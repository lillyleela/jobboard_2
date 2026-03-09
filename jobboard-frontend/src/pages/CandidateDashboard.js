import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/CandidateDashboard.css";

function CandidateDashboard() {
  const [profile, setProfile] = useState({});
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);
  const [resume, setResume] = useState(null);

  useEffect(() => {
    fetchProfile();
    fetchJobs();
    fetchApplications();
  }, []);

  const fetchProfile = async () => {
    const userId = localStorage.getItem("userId");

    const res = await axios.get(
      `http://localhost:5000/api/candidate/profile/${userId}`,
    );

    setProfile(res.data);
  };

  const fetchJobs = async () => {
    const res = await axios.get("http://localhost:5000/api/jobs");
    setJobs(res.data);
  };

  const fetchApplications = async () => {
    const userId = localStorage.getItem("userId");

    const res = await axios.get(
      `http://localhost:5000/api/applications/${userId}`,
    );

    setApplications(res.data);
  };

  const applyJob = async (jobId) => {
    const userId = localStorage.getItem("userId");

    if (!resume) {
      alert("Please upload resume first");
      return;
    }

    const formData = new FormData();
    formData.append("jobId", jobId);
    formData.append("candidateId", userId);
    formData.append("resume", resume);

    await axios.post("http://localhost:5000/api/applications", formData);

    alert("Application submitted successfully");

    setResume(null);
    fetchApplications();
  };

  return (
    <div className="dashboard">
      <h1 className="title">Candidate Dashboard</h1>

      {/* Profile */}
      <div className="profile-card">
        <h2>My Profile</h2>
        <p>
          <strong>Name:</strong> {profile.name}
        </p>
        <p>
          <strong>Email:</strong> {profile.email}
        </p>
      </div>

      {/* Resume Upload */}
      <div className="profile-card">
        <h2>Upload Resume</h2>
        <input type="file" onChange={(e) => setResume(e.target.files[0])} />
      </div>

      {/* Jobs */}
      <h2>Available Jobs</h2>

      <div className="jobs-grid">
        {jobs.map((job) => (
          <div className="job-card" key={job._id}>
            <h3>{job.title}</h3>
            <p>{job.company}</p>

            <button onClick={() => applyJob(job._id)}>Apply</button>
          </div>
        ))}
      </div>

      {/* Applications */}
      <h2>My Applications</h2>

      <table className="applications-table">
        <thead>
          <tr>
            <th>Job</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {applications.map((app) => (
            <tr key={app._id}>
              <td>{app.jobTitle}</td>
              <td>{app.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CandidateDashboard;
