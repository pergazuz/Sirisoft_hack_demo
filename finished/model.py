import os
import tensorflow as tf
import numpy as np
from tensorflow import keras
import pandas as pd
import matplotlib.pyplot as plt
from keras.utils import to_categorical

# load model
test_df = pd.read_csv('C:/Users/CPE/OneDrive/เดสก์ท็อป/hackaday_demo/Sirisoft_hack_demo/.venv/finished/dataset/mitbih_test.csv', header=None)

X_test =test_df.iloc[:,:186].values
X_test_reshaped = X_test.reshape(len(X_test), X_test.shape[1],1)

model = tf.keras.models.load_model('C:/Users/CPE/OneDrive/เดสก์ท็อป/hackaday_demo/Sirisoft_hack_demo/.venv/finished/best_model.h5')
choice = {0: "N", 1: 'S', 2: 'V', 3: 'F', 4: 'Q'}
predictions = model.predict(X_test_reshaped)
a = []
for i in range(len(predictions)):
  a.append(choice[np.argmax(predictions[i])])

pred = np.array(a)
def predict():
    return pred




