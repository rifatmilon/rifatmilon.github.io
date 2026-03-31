import fitz
import sys

def extract(pdf_path, out_path):
    doc = fitz.open(pdf_path)
    text = ""
    for page in doc:
        text += page.get_text()
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(text)
    print(f"Extracted {pdf_path} to {out_path}")

extract(sys.argv[1], sys.argv[2])
