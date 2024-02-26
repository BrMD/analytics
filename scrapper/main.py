from flask import Flask
from markupsafe import escape

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/domain/<domain>")
def getScrapDomain(domain):
    return f"Domain{escape(domain)}"

@app.route("/emailSearch/<email>")
def getScrapEmailSearch(email):
    return f"Email Search{escape(email)}"

@app.route("/emailValue/<email>")
def getScrapEmailValue(email):
    return f"Email Value{escape(email)}"