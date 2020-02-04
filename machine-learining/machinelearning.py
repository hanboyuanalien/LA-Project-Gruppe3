import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import warnings
warnings.filterwarnings('ignore')

#Load the dataset
data=pd.read_csv('students_data.csv')
data.head() #Display the first 5 columns of data

#Check that the various fields with missing values

print(data.isnull().sum())


#Check the feature type of each attribute

print(data.dtypes)


#Data preprocessing

x=data.drop('Class',axis=1)
y=data['Class']
x=pd.get_dummies(x)#All the non-numeric variables into numeric
head_5 = x.head()
head_5 = head_5.to_json(orient = 'split', force_ascii = False)

from sklearn.model_selection import train_test_split

#Select training and test sets
x_train,x_test,y_train,y_test=train_test_split(x,y,test_size=0.2,random_state=10)

from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

#Use Logistic Regression model prediction and test accuracy

lr=LogisticRegression()
lr.fit(x_train,y_train)

predict_y=lr.predict(x_test)
print('predict',predict_y)

lr_score=accuracy_score(y_test,predict_y)
print('Logistic Regression Accuracy：', lr_score)

#Remove not important feature, Use logistic regression model again to compare results

df=data
x=df.drop('Class',axis=1)
x=x.drop(['StageID', 'Semester','SectionID'],axis=1)#remove 'StageID','Semester','SectionID'

y=df['Class']
x=pd.get_dummies(x)
x.head(10)

x_train,x_test,y_train,y_test=train_test_split(x,y,test_size=0.2,random_state=10)

#Train the Logistic Regression model and test accuracy
lr=LogisticRegression()
lr.fit(x_train,y_train)

predict_y =lr.predict(x_test)
print('predict',predict_y)

nlr_score=accuracy_score(y_test,predict_y)
print('NEW Logistic Regression Accuracy：', nlr_score)


from sklearn import svm

#Train the SVM model and test accuracy
model = svm.SVC(kernel='linear', C=12)
model.fit(x_train,y_train)
model.score(x_test,y_test)

predicted = model.predict(x_test)
svm_score =accuracy_score(y_test,predicted)
print(predicted)
print('SVM Precision Accuracy',svm_score)

from sklearn.ensemble import RandomForestClassifier

#Random Forest
rfc_model = RandomForestClassifier()
rfc_model.fit(x_train, y_train)

predicted = rfc_model.predict(x_test)
rf_score =accuracy_score(y_test,predicted)
print(predicted)
print('Random Forest Precision Accuracy',rf_score)


from sklearn.neighbors import KNeighborsClassifier
#K-NN
model = KNeighborsClassifier(n_neighbors=7)
model.fit(x_train, y_train)

predict_y = model.predict(x_test)
print('predict',predict_y)
knn_score=accuracy_score(y_test,predict_y)
print('K-NN Precision Accuracy：', knn_score)