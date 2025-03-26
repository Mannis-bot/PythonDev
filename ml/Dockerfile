FROM python:3.9-slim
WORKDIR /app
COPY . /app
RUN pip install flask scikit-learn pandas
CMD ["python", "ml_api.py"]