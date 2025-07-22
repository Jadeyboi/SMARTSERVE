#This is a placeholder for the YOLO detection script.
#Replace this with your actual YOLO detection logic or Python script.

import sys
import json

if __name__ == "__main__":
    # Simulate detection result
    # In real use, load the image and run YOLO detection here
    result = {
        "detections": [
            {"label": "person", "confidence": 0.98, "box": [100, 120, 200, 300]},
            {"label": "bottle", "confidence": 0.87, "box": [250, 180, 320, 400]}
        ]
    }
    print(json.dumps(result))
