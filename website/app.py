from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("home.html")

@app.route("/contact")
def contact():
    return render_template("contact.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/slides")
def slides():
    return render_template("slides.html")

if __name__ == '__main__':
    # app.run(debug=True) # for debugging
    app.run(host="0.0.0.0", port=80) # using port 80 for cs310 assignment