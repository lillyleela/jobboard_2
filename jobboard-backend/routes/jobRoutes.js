const express = require("express");
const router = express.Router();
const Job = require("../models/Job");

console.log("Job routes loaded");

router.get("/", async (req, res) => {
  console.log("GET /api/jobs called");

  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching jobs" });
  }
});
// POST new job (Employer posts job)
router.post("/", async (req, res) => {
  try {
    const {
      title,
      company,
      location,
      salary,
      experience,
      skills,
      jobType,
      description,
    } = req.body;

    const newJob = new Job({
      title,
      company,
      location,
      salary,
      experience,
      skills,
      jobType,
      description,
    });

    await newJob.save();

    res.status(201).json({
      message: "Job posted successfully",
      job: newJob,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// DELETE job
router.delete("/:id", async (req, res) => {
  try {
    await Job.findByIdAndDelete(req.params.id);
    res.json({ message: "Job deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
