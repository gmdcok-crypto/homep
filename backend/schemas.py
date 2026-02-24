from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class QuoteBase(BaseModel):
    name: str
    company: Optional[str] = None
    phone: str
    email: Optional[str] = None
    message: Optional[str] = None

class QuoteCreate(QuoteBase):
    pass

class Quote(QuoteBase):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True
