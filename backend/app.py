from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
import jwt
from datetime import datetime, timedelta
from functools import wraps

app = Flask(__name__)
CORS(app)

app.config['SECRET_KEY'] = 'your-secret-key'  # Use environment variable in production
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///fresheggs.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.headers.get('Authorization')
        if not token:
            return jsonify({'error': 'Token is missing'}), 401
        try:
            token = token.split(' ')[1]
            data = jwt.decode(token, app.config['SECRET_KEY'], algorithms=['HS256'])
            current_user = User.query.get(data['user_id'])
        except:
            return jsonify({'error': 'Token is invalid'}), 401
        return f(current_user, *args, **kwargs)
    return decorated

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)
    orders = db.relationship('Order', backref='user', lazy=True)

class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    total_amount = db.Column(db.Float, nullable=False)
    status = db.Column(db.String(50), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

with app.app_context():
    db.create_all()

@app.route('/api/user', methods=['GET'])
@token_required
def get_user(current_user):
    return jsonify({
        'id': current_user.id,
        'name': current_user.name,
        'email': current_user.email
    })

@app.route('/api/signup', methods=['POST'])
def signup():
    try:
        data = request.json
        if User.query.filter_by(email=data['email']).first():
            return jsonify({'error': 'Email already exists'}), 400
            
        hashed_password = generate_password_hash(data['password'])
        new_user = User(
            name=data['name'],
            email=data['email'],
            password=hashed_password
        )
        
        db.session.add(new_user)
        db.session.commit()
        
        return jsonify({'message': 'User created successfully'}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@app.route('/api/login', methods=['POST'])
def login():
    try:
        data = request.json
        user = User.query.filter_by(email=data['email']).first()
        
        if user and check_password_hash(user.password, data['password']):
            token = jwt.encode({
                'user_id': user.id,
                'exp': datetime.utcnow() + timedelta(hours=24)
            }, app.config['SECRET_KEY'])
            
            return jsonify({
                'token': token,
                'user': {'id': user.id, 'name': user.name, 'email': user.email}
            })
        
        return jsonify({'error': 'Invalid credentials'}), 401
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/create-order', methods=['POST'])
@token_required
def create_order(current_user):
    try:
        data = request.json
        new_order = Order(
            user_id=current_user.id,
            total_amount=data['total_amount'],
            status='pending'
        )
        
        db.session.add(new_order)
        db.session.commit()
        
        return jsonify({'order_id': new_order.id}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)