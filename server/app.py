from flask import Flask
from flask_cors import CORS
from routes.admin import admin_bp
from routes.messages import messages_bp
from routes.content import content_bp
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

app = Flask(__name__)
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')

# Disable strict slashes globally
app.url_map.strict_slashes = False

# Enable CORS
CORS(app, resources={r"/*": {"origins": "*"}}, supports_credentials=True, methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"])

# Register blueprints
app.register_blueprint(admin_bp, url_prefix='/admin')
app.register_blueprint(messages_bp, url_prefix='/messages')
app.register_blueprint(content_bp, url_prefix='/content')

@app.route('/')
def home():
    return "API is running..."

if __name__ == '__main__':
    app.run(port=5000, debug=True)