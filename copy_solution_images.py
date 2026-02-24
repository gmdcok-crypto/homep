import shutil
import os

source_dir = r"C:\Users\gmdco\.gemini\antigravity\brain\962efa5b-808a-4f60-bc18-5d521f007a81"
target_dir = r"d:\homep\public\images\solutions"

if not os.path.exists(target_dir):
    os.makedirs(target_dir)

mapping = {
    "logistics_hero_jpg_1771881930117.png": "logistics-hero.jpg",
    "rfid_tracking_korean_jpg_1771881945800.png": "rfid-tracking-korean.jpg",
    "sw_dev_korean_jpg_1771881962329.png": "sw-dev-korean.jpg",
    "label_printer_action_jpg_1771881984909.png": "label-printer-action.jpg",
    "hospital_hero_jpg_1771882028943.png": "hospital-hero.jpg",
    "hospital_kiosk_korean_jpg_1771882045238.png": "hospital-kiosk-korean.jpg",
    "outpatient_korean_jpg_1771882419724.png": "outpatient-korean.jpg",
    "signage_hero_jpg_1771882063206.png": "signage-hero.jpg",
    "did_korean_jpg_1771882080929.png": "did-korean.jpg",
    "multivision_korean_jpg_1771882098994.png": "multivision-korean.jpg",
    "cms_interface_jpg_1771882114722.png": "cms-interface.jpg",
    "cctv_hero_jpg_1771882437061.png": "cctv-hero.jpg",
    "cctv_ai_korean_jpg_1771882453030.png": "cctv-ai-korean.jpg",
    "night_vision_korean_jpg_1771882470713.png": "night-vision-korean.jpg",
    "it_infra_hero_jpg_1771882487246.png": "it-infra-hero.jpg",
    "network_rack_korean_jpg_1771882503029.png": "network-rack-korean.jpg",
    "pc_maintenance_korean_jpg_1771882518868.png": "pc-maintenance-korean.jpg"
}

for src_name, dest_name in mapping.items():
    src_path = os.path.join(source_dir, src_name)
    dest_path = os.path.join(target_dir, dest_name)
    if os.path.exists(src_path):
        shutil.copy2(src_path, dest_path)
        print(f"Copied {src_name} to {dest_name}")
    else:
        print(f"Source not found: {src_path}")
