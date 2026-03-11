const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Get candidate profile
router.get("/profile/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Error fetching profile" });
  }
});

// Update profile
router.put("/profile/:id", async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.json(updatedUser);
});

module.exports = router;
