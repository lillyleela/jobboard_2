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

module.exports = router;
