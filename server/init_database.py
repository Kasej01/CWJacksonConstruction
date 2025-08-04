import sqlite3
import bcrypt

conn = sqlite3.connect('database.sqlite')

# Create tables
conn.execute('''
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL
)
''')

conn.execute('''
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    is_read INTEGER DEFAULT 0,
    is_important INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
''')

conn.execute('''
CREATE TABLE IF NOT EXISTS content (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    section_name TEXT NOT NULL,
    content TEXT NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
''')

# Insert default admin user
admin_username = 'admin'
admin_password = 'admin123'
password_hash = bcrypt.hashpw(admin_password.encode('utf-8'), bcrypt.gensalt())

conn.execute('INSERT OR IGNORE INTO users (username, password_hash) VALUES (?, ?)', (admin_username, password_hash))
conn.commit()
conn.close()

print("Database initialized")