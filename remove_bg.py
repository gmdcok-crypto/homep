from PIL import Image, ImageDraw
import os

def remove_bg(img_path, out_path, thresh=20):
    if not os.path.exists(img_path):
        print(f"Skipping: {img_path} not found")
        return
    img = Image.open(img_path).convert("RGBA")
    temp = img.copy().convert("RGB")
    
    w, h = img.size
    # Sampling more points for floodfill to catch isolated background pockets
    points = [
        (0,0), (w-1,0), (0,h-1), (w-1,h-1),
        (w//2,0), (0,h//2), (w-1,h//2), (w//2,h-1),
        (2,2), (w-3,2), (2,h-3), (w-3,h-3)
    ]
    for pt in points:
        ImageDraw.floodfill(temp, pt, (255, 0, 255), thresh=thresh)
        
    d1 = img.getdata()
    d2 = temp.getdata()
    
    out = []
    for orig, mask in zip(d1, d2):
        if mask == (255, 0, 255):
            out.append((255, 255, 255, 0))
        else:
            out.append(orig)
            
    img.putdata(out)
    img.save(out_path, "PNG")
    print(f"Processed: {out_path}")

if __name__ == "__main__":
    base = "d:/homep/public/images/"
    files = [
        ("ZT411.JPG", "ZT411_trans.png"),
        ("MB241T.JPG", "MB241T_trans.png"),
        ("TTP247.JPG", "TTP247_trans.png"),
        ("ZD421.JPG", "ZD421_trans.png"),
        ("custom_labels.png", "custom_labels_transparent.png")
    ]
    for src, dst in files:
        remove_bg(base + src, base + dst)
