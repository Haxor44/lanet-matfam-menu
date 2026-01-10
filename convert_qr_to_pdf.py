from PIL import Image
import os

def convert_to_pdf(image_path, output_path):
    try:
        if os.path.exists(image_path):
            image = Image.open(image_path)
            if image.mode == 'RGBA':
                image = image.convert('RGB')
            image.save(output_path, "PDF", resolution=100.0)
            print(f"Successfully converted {image_path} to {output_path}")
        else:
            print(f"Error: File not found at {image_path}")
    except Exception as e:
        print(f"Failed to convert {image_path}: {e}")

# Convert Matkids QR
convert_to_pdf('/home/haxor44/menu/matkids_website/Matkids-512.jpeg', '/home/haxor44/menu/matkids_website/Matkids_QR.pdf')

# Convert Matfam Menu QR
convert_to_pdf('/home/haxor44/menu/MatfmaMenu.png', '/home/haxor44/menu/Matfam_Menu_QR.pdf')
