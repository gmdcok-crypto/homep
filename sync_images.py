import shutil
import os

def sync_images():
    src_base = r"C:\Users\gmdco\OneDrive\사진"
    dst_base = r"d:\homep\public\images"
    
    files = ["DS-2CD1021G0-I.jpg", "DS-2CD1121-I.jpg"]
    
    for f in files:
        src = os.path.join(src_base, f)
        dst = os.path.join(dst_base, f)
        
        if os.path.exists(src):
            try:
                shutil.copy2(src, dst)
                print(f"Success: Copied {f} to {dst}")
            except Exception as e:
                print(f"Error copying {f}: {e}")
        else:
            # Try to find by partial match if exact filename is different
            print(f"Source not found: {src}. Searching for partial matches...")
            found = False
            for root, dirs, filenames in os.walk(src_base):
                for filename in filenames:
                    if f.split('.')[0] in filename:
                        src_match = os.path.join(root, filename)
                        try:
                            shutil.copy2(src_match, dst)
                            print(f"Success: Copied matched file {filename} as {f}")
                            found = True
                            break
                        except Exception as e:
                            print(f"Error copying matched {filename}: {e}")
                if found: break

if __name__ == "__main__":
    sync_images()
