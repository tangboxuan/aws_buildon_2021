import awsgi
from flask_cors import CORS
from flask import Flask, jsonify, request

app = Flask(__name__)
CORS(app)

BASE_ROUTE = "/model"

@app.route(BASE_ROUTE, methods=['GET'])
def hello_world():
    return jsonify(message="hello world")

@app.route(BASE_ROUTE, methods=['POST'])
def get_model():
    request_json = request.get_json()
    
    return request_json

def handler(event, context):
    return awsgi.response(app, event, context)