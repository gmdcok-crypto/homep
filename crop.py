from PIL import Image
import os

src = r"C:\Users\gmdco\.gemini\antigravity\brain\0ba5a884-b885-4625-8a03-f2359ae72058\showroom_printer_banner_1920x400_1771596615535.png"
dst = r"d:\homep\public\images\detail_banner_bg.png"

img = Image.open(src)
target_aspect = 1920 / 400.0

w, h = img.size
current_aspect = w / float(h)

if current_aspect > target_aspect:
    # Too wide -> crop width
    new_w = int(target_aspect * h)
    offset = (w - new_w) // 2
    img = img.crop((offset, 0, offset + new_w, h))
else:
    # Too tall -> crop height
    new_h = int(w / target_aspect)
    offset = (h - new_h) // 2
    img = img.crop((0, offset, w, offset + new_h))

img = img.resize((1920, 400), Image.Resampling.LANCZOS)
img.save(dst)
print("Saved 1920x400 image")
