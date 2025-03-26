import pandas as pd
import pickle
from sklearn.linear_model import LogisticRegression
from flask import Flask, request, jsonify

# Load and train the model
data = pd.read_csv('loan_default_data.csv')
X = data[['age', 'income', 'loan_amount', 'credit_score']]
y = data['loan_status']

model = LogisticRegression()
model.fit(X, y)

# Save the model
with open('ml_model.pkl', 'wb') as f:
    pickle.dump(model, f)

# Load the model for API use
with open('ml_model.pkl', 'rb') as f:
    loaded_model = pickle.load(f)

# Flask API
app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    input_data = [[
        data['age'],
        data['income'],
        data['loan_amount'],
        data['credit_score']
    ]]
    prediction = loaded_model.predict_proba(input_data)[0][1]  # Probability of default (class 1)
    return jsonify({'loan_default_probability': prediction})

if __name__ == '__main__':
    app.run(debug=True, port=5000)