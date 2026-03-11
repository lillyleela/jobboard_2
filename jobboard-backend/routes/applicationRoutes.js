const express = require("express");
const router = express.Router();
const multer = require("multer");
const Application = require("../models/Application");

// Storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Apply job with resume upload
router.post("/", upload.single("resume"), async (req, res) => {
  try {
    const { jobId, candidateId } = req.body;

    const application = new Application({
      jobId,
      candidateId,
      resume: req.file.filename,
      status: "Pending",
    });

    await application.save();

    res.json({ message: "Application submitted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Apply job
// router.post("/", async (req, res) => {
//   const application = new Application(req.body);
//   await application.save();
//   res.json({ message: "Applied successfully" });
// });
router.post("/", upload.single("resume"), async (req, res) => {
  try {
    const { jobId, candidateId } = req.body;

    const application = new Application({
      jobId,
      candidateId,
      resume: req.file.filename,
      status: "Pending",
    });

    await application.save();

    res.json({ message: "Application submitted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// Get applications of candidate
// router.get("/:userId", async (req, res) => {
//   try {
//     const applications = await Application.find({
//       userId: req.params.userId,
//     }).populate("jobId");

//     res.json(applications);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching applications" });
//   }
// });
router.get("/candidate/:candidateId", async (req, res) => {
  try {
    const applications = await Application.find({
      candidateId: req.params.candidateId,
    }).populate("jobId", "title");

    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: "Error fetching applications" });
  }
});
router.get("/", async (req, res) => {
  try {
    const applications = await Application.find()
      .populate("candidateId", "name") // get candidate name
      .populate("jobId", "title"); // get job title

    res.json(applications);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
