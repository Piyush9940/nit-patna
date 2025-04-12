import cv2
from pyzbar.pyzbar import decode
def scan_qr_from_image(image_path):
    image = cv2.imread(image_path)
    if image is None:
        print("Error: Could not read image.")
        return

    decoded_objects = decode(image)
    if not decoded_objects:
        print("No QR code detected in the image.")
        return

    print_qr_details(decoded_objects)
def print_qr_details(decoded_objects):
    for obj in decoded_objects:
        print("Type:", obj.type)
        print("Data:", obj.data.decode('utf-8'))
        print("Rect:", obj.rect)
        print("Polygon:", obj.polygon)

def scan_qr_code():
    cap = cv2.VideoCapture(0)

    if not cap.isOpened():
        print("Error: Could not open camera.")
        return

    while True:
        ret, frame = cap.read()
        if not ret:
            print("Error: Failed to capture frame.")
            break

        decoded_objects = decode(frame)
        for obj in decoded_objects:
            # Draw polygon around the QR code
            points = obj.polygon
            if points:
                points = [(int(p.x), int(p.y)) for p in points]
                for i in range(len(points)):
                    cv2.line(frame, points[i], points[(i + 1) % len(points)], (0, 255, 0), 2)

            # Display decoded data
            qr_data = obj.data.decode('utf-8')
            print(f"QR Code Data: {qr_data}")

            # Optionally draw text on frame
            cv2.putText(frame, qr_data, (points[0][0], points[0][1] - 10), 
                        cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 0, 0), 2)

            cap.release()
            cv2.destroyAllWindows()
            return qr_data

        cv2.imshow("QR Code Scanner", frame)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    cap.release()
    cv2.destroyAllWindows()

scan_qr_code()
