FROM python:3.10.2

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN pip install --upgrade pip
COPY ./ ./
RUN pip install -r requirements.txt  
RUN pip install gunicorn


