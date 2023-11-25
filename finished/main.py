# model
from test import predict as model_predict
# Web Server
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from typing import List
import pandas as pd

# create app
app = FastAPI()
# alow cross origin all origin
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# index route
@app.get('/')
def index():
    return {'message': 'This is a sentiment analysis model API.'}

# predict route
@app.post('/predict')
def predict():
    return model_predict()


# start server
if __name__ == '__main__':
    uvicorn.run(app, host='127.0.0.1', port=8000)