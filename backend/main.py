from fastapi import FastAPI, Depends, HTTPException, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from typing import List
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dotenv import load_dotenv
import models
import schemas
import database
import httpx
import asyncio

load_dotenv()

# Create database tables
models.Base.metadata.create_all(bind=database.engine)

app = FastAPI()

# Email Configuration (from .env)
SMTP_SERVER = os.getenv("SMTP_SERVER", "smtp.gmail.com")
SMTP_PORT = int(os.getenv("SMTP_PORT", "587"))
SMTP_USER = os.getenv("SMTP_USER")
SMTP_PASSWORD = os.getenv("SMTP_PASSWORD")
ADMIN_EMAIL = os.getenv("ADMIN_EMAIL")

# Telegram Configuration
TELEGRAM_BOT_TOKEN = os.getenv("TELEGRAM_BOT_TOKEN")
TELEGRAM_CHAT_ID = os.getenv("TELEGRAM_CHAT_ID")

def send_notification_email(quote: schemas.QuoteCreate):
    if not all([SMTP_USER, SMTP_PASSWORD, ADMIN_EMAIL]):
        print("Email credentials not fully configured. Skipping email.")
        return

    try:
        msg = MIMEMultipart()
        msg['From'] = str(SMTP_USER)
        msg['To'] = str(ADMIN_EMAIL)
        msg['Subject'] = f"[BLUE] 새로운 상담 문의가 접수되었습니다: {quote.name}님"

        body = f"""
        새로운 상담 문의 상세 내용:
        
        - 성함/담당자: {quote.name}
        - 회사명: {quote.company or 'N/A'}
        - 연락처: {quote.phone}
        - 이메일: {quote.email or 'N/A'}
        - 문의 내용:
        {quote.message or '내용 없음'}
        
        접수 시간: {models.func.now()}
        """
        msg.attach(MIMEText(body, 'plain'))

        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()
        server.login(str(SMTP_USER), str(SMTP_PASSWORD))
        server.send_message(msg)
        server.quit()
        print(f"Notification email sent to {ADMIN_EMAIL}")
    except Exception as e:
        print(f"Failed to send email: {e}")

async def send_telegram_notification(quote: schemas.QuoteCreate):
    print(f"Attempting to send Telegram notification for {quote.name}...")
    if not all([TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID]) or TELEGRAM_CHAT_ID == "your_chat_id_here":
        print("Telegram credentials not fully configured (Token or Chat ID missing).")
        return

    message = (
        f"🔔 *새로운 상담 문의 접수*\n\n"
        f"👤 *성함/담당자:* {quote.name}\n"
        f"🏢 *회사명:* {quote.company or 'N/A'}\n"
        f"📞 *연락처:* {quote.phone}\n"
        f"📧 *이메일:* {quote.email or 'N/A'}\n\n"
        f"💬 *문의 내용:*\n{quote.message or '내용 없음'}"
    )

    url = f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendMessage"
    payload = {
        "chat_id": TELEGRAM_CHAT_ID,
        "text": message,
        "parse_mode": "Markdown"
    }

    try:
        async with httpx.AsyncClient(timeout=10.0) as client:
            response = await client.post(url, json=payload)
            print(f"Telegram API Response Status: {response.status_code}")
            if response.status_code != 200:
                print(f"Telegram Error Response: {response.text}")
            response.raise_for_status()
            print("Telegram notification sent successfully")
    except Exception as e:
        print(f"Failed to send Telegram notification: {str(e)}")

@app.get("/test-telegram/")
async def test_telegram():
    """Endpoint to manually test Telegram configuration"""
    if not all([TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID]):
        return {"status": "error", "message": "Missing credentials", "token_exists": bool(TELEGRAM_BOT_TOKEN), "chat_id_exists": bool(TELEGRAM_CHAT_ID)}
    
    url = f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendMessage"
    payload = {
        "chat_id": TELEGRAM_CHAT_ID,
        "text": "✅ 텔레그램 알림 설정 테스트 성공! 서버가 정상적으로 연결되었습니다.",
        "parse_mode": "Markdown"
    }
    
    try:
        async with httpx.AsyncClient(timeout=10.0) as client:
            response = await client.post(url, json=payload)
            return {
                "status": "completed", 
                "http_status": response.status_code,
                "response": response.json()
            }
    except Exception as e:
        return {"status": "failed", "error": str(e)}

# CORS configuration
origins = [
    "http://localhost:5173",
    "http://localhost:5174",
    "http://localhost:3000",
    "https://homep-production.up.railway.app", # Example production URL
    "https://effulgent-sunflower-4bc798.netlify.app",
    "https://bluecs.co.kr",
    "https://www.bluecs.co.kr",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # For development/initial deployment, we can use wildcard or specific list
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/quotes/", response_model=schemas.Quote)
def create_quote(quote: schemas.QuoteCreate, background_tasks: BackgroundTasks, db: Session = Depends(database.get_db)):
    db_quote = models.Quote(**quote.dict())
    db.add(db_quote)
    db.commit()
    db.refresh(db_quote)
    
    # Send email in background to avoid blocking response
    background_tasks.add_task(send_notification_email, quote)
    
    # Send Telegram notification in background (FastAPI handles async def directly)
    background_tasks.add_task(send_telegram_notification, quote)
    
    return db_quote

@app.get("/quotes/", response_model=List[schemas.Quote])
def read_quotes(skip: int = 0, limit: int = 100, db: Session = Depends(database.get_db)):
    quotes = db.query(models.Quote).offset(skip).limit(limit).all()
    return quotes

@app.get("/")
def read_root():
    return {"message": "Welcome to the Quote API"}
