from flask import Flask, render_template, request, send_file
from PIL import Image
import stepic
import os

app = Flask(__name__)

UPLOAD_FOLDER = 'static/uploads'
ENCODED_FOLDER = 'static/encoded'

os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(ENCODED_FOLDER, exist_ok=True)


# -----------------------------
# Caesar Cipher Obfuscation
# -----------------------------
def encrypt(text, shift=3):
    result = ""

    for char in text:
        result += chr(ord(char) + shift)

    return result


def decrypt(text, shift=3):
    result = ""

    for char in text:
        result += chr(ord(char) - shift)

    return result


# -----------------------------
# Home Page
# -----------------------------
@app.route('/')
def index():
    return render_template('index.html')


# -----------------------------
# Encode Message
# -----------------------------
@app.route('/encode', methods=['POST'])
def encode():

    if 'image' not in request.files:
        return "No image uploaded"

    image = request.files['image']
    secret_message = request.form['message']

    if image.filename == '':
        return "No selected file"

    image_path = os.path.join(UPLOAD_FOLDER, image.filename)
    image.save(image_path)

    # Obfuscate message
    encrypted_message = encrypt(secret_message)

    # Open image
    img = Image.open(image_path)

    # Encode hidden message
    encoded_img = stepic.encode(img, encrypted_message.encode())

    output_path = os.path.join(
        ENCODED_FOLDER,
        'encoded_' + image.filename
    )

    encoded_img.save(output_path)

    return send_file(output_path, as_attachment=True)


# -----------------------------
# Decode Page
# -----------------------------
@app.route('/decode-page')
def decode_page():
    return render_template('decode.html')


# -----------------------------
# Decode Message
# -----------------------------
@app.route('/decode', methods=['POST'])
def decode():

    if 'image' not in request.files:
        return "No image uploaded"

    image = request.files['image']

    image_path = os.path.join(UPLOAD_FOLDER, image.filename)
    image.save(image_path)

    img = Image.open(image_path)

    # Extract hidden message
    hidden_message = stepic.decode(img)

    # Deobfuscate
    original_message = decrypt(hidden_message)

    return f"""
    <h2>Decoded Message:</h2>
    <p>{original_message}</p>
    <br>
    <a href='/'>Go Back</a>
    """


if __name__ == '__main__':
    app.run(debug=False)