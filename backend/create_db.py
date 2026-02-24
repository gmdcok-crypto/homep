import pymysql
import os
from dotenv import load_dotenv

load_dotenv()

# We need to parse the DATABASE_URL to get credentials but connect without the DB name
# mysql+pymysql://root:700312ok!@localhost:3306/mydatabase
url = os.getenv("DATABASE_URL")
if not url:
    print("DATABASE_URL not found in .env")
    exit(1)

# Basic parsing (this is a bit hacky but works for standard URLs)
# mysql+pymysql://root:700312ok!@localhost:3306/mydatabase
try:
    auth_part = url.split("//")[1].split("@")[0]
    user = auth_part.split(":")[0]
    password = auth_part.split(":")[1]
    
    host_part = url.split("@")[1].split("/")[0]
    host = host_part.split(":")[0]
    port = int(host_part.split(":")[1]) if ":" in host_part else 3306
    
    db_name = url.split("/")[-1]
except Exception as e:
    print(f"Error parsing DATABASE_URL: {e}")
    exit(1)

try:
    connection = pymysql.connect(
        host=host,
        user=user,
        password=password,
        port=port
    )
    with connection.cursor() as cursor:
        cursor.execute(f"CREATE DATABASE IF NOT EXISTS {db_name} CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci")
    connection.commit()
    print(f"Database '{db_name}' created or already exists.")
    connection.close()
except Exception as e:
    print(f"Error creating database: {e}")
    exit(1)
