const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const { exec } = require("child_process");

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Multer setup for file uploads
const upload = multer({ dest: "uploads/" });

// Health check
app.get("/", (req, res) => {
  res.send("YOLO AI backend is running.");
});

// Endpoint to handle image upload and run YOLO detection
app.post("/detect", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No image uploaded" });
  }

  const imagePath = path.resolve(req.file.path);
  // Example: Replace this with your YOLO command or Python script
  // This is a placeholder for demonstration
  exec(
    `python yolo_detect.py --image ${imagePath}`,
    (error, stdout, stderr) => {
      if (error) {
        return res.status(500).json({ error: stderr || error.message });
      }
      // stdout should be the detection result (JSON or string)
      try {
        const result = JSON.parse(stdout);
        res.json(result);
      } catch (e) {
        res.json({ result: stdout });
      }
    }
  );
});

app.listen(PORT, () => {
  console.log(`YOLO AI backend running on port ${PORT}`);
});
