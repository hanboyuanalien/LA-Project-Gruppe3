from machinelearning import svm_score,lr_score,nlr_score,rf_score,knn_score,head_5
from flask import Flask
import json
import numpy as np

app = Flask(__name__)

@app.route('/index')
def index():
    print("svm:",svm_score)
    return "Hello World!"
@app.route('/svm')
def svm():
    return {"svm_score":str(svm_score)}
@app.route('/lr')
def lr():
    return {"lr_score":str(lr_score)}
@app.route('/nlr')
def nlr():
    return {"nlr_score":str(nlr_score)}
@app.route('/rf')
def rf():
    return {"rf_score":str(rf_score)}
@app.route('/knn')
def knn():
    return {"knn_score":str(knn_score)}
@app.route('/head5')
def head5():
    print(head_5)
    print(type(head_5))
    print("sss")
    return head_5
if __name__ == '__main__':
    app.run(debug=True, port=8088)
