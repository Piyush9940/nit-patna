import qrcode

def generate_qr(data, filename="qr_code.png"):
    # Create a QR Code instance
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )
    # Add data to the QR Code
    qr.add_data(data)
    qr.make(fit=True)

    # Create an image of the QR Code
    img = qr.make_image(fill_color="black", back_color="white")
    # Save the image to a file
    img.save(filename)
    print(f"QR Code saved as {filename}")

if __name__ == "__main__":
    # Take custom input from the user
    data = input("Enter the data to encode in the QR Code: ")
    filename = input("Enter the filename to save the QR Code (default: qr_code.png): ") or "qr_code.png"
    generate_qr(data, filename)