const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job",
  },
  candidateId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  resume: String,
  status: {
    type: String,
    default: "Pending",
  },
});

module.exports = mongoose.model("Application", applicationSchema);
