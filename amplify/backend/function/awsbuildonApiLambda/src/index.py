import awsgi
from flask_cors import CORS
from flask import Flask, jsonify, request
import LowBall
app = Flask(__name__)
CORS(app)

BASE_ROUTE = "/model"


@app.route(BASE_ROUTE, methods=['POST'])
def get_model():
    data = request.get_json()
    text = data['text']
    price = (data['price'])
    cutoff = (data['cutoff'])
    print(text)
    print(price)
    print(cutoff)
    lowball = LowBall.CustomisedLowBall(text, price, cutoff)
    print(lowball)
    return {'verdict': lowball}


def handler(event, context):
    return awsgi.response(app, event, context)