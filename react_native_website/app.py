from flask import Flask, render_template, jsonify

app = Flask(__name__)

@app.route("/")
def main():
    return "<h1>Hello World</h1>"

@app.route("/pi/<lights>")
def pi(lights):
    return render_template("raspberrypi.html", lights=lights)

@app.route("/gpio/<gpio>/<cmd>")
def gpio_command(gpio, cmd):
    return jsonify({"status":"ok", "gpio":gpio, "cmd":cmd})

@app.route("/<name>")
def john(name):
    return f"<h1>HI {name}!</h1>"

if __name__ == "__main__":
    app.run(debug=True, port=80, host='0.0.0.0')