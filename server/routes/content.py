from flask import Blueprint, request, jsonify
import sqlite3

content_bp = Blueprint('content', __name__)

def get_db_connection():
    conn = sqlite3.connect('database.sqlite')
    conn.row_factory = sqlite3.Row
    return conn

@content_bp.route('/', methods=['GET'])
def get_content():
    conn = get_db_connection()
    content = conn.execute('SELECT * FROM content').fetchall()
    conn.close()

    return jsonify([dict(row) for row in content])

@content_bp.route('/<int:id>', methods=['PUT'])
def update_content(id):
    data = request.get_json()
    section_name = data.get('section_name')
    content = data.get('content')

    conn = get_db_connection()
    conn.execute('UPDATE content SET section_name = ?, content = ? WHERE id = ?', (section_name, content, id))
    conn.commit()
    conn.close()

    return jsonify({'message': 'Content updated successfully'})