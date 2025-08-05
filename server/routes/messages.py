from flask import Blueprint, request, jsonify
import sqlite3

messages_bp = Blueprint('messages', __name__)

def get_db_connection():
    conn = sqlite3.connect('database.sqlite')
    conn.row_factory = sqlite3.Row
    return conn

@messages_bp.route('', methods=['POST', 'OPTIONS'])  # No trailing slash
def add_message():
    if request.method == 'OPTIONS':
        return jsonify({'message': 'CORS preflight handled'}), 200

    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')

    conn = get_db_connection()
    conn.execute('INSERT INTO messages (name, email, message) VALUES (?, ?, ?)', (name, email, message))
    conn.commit()
    conn.close()

    return jsonify({'message': 'Message added successfully'})