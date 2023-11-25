import os
import tensorflow as tf
import numpy as np
from tensorflow import keras
import pandas as pd
import matplotlib.pyplot as plt
from keras.utils import to_categorical

# load model
model = tf.keras.models.load_model('finished/best_model.h5')
choice = {0: "N", 1: 'S', 2: 'V', 3: 'F', 4: 'Q'}


def predict(X_test):
    X_test_reshaped = np.reshape(X_test, (1, 186, 1))
    predictions = model.predict(X_test_reshaped)
    return choice[np.argmax(predictions)]