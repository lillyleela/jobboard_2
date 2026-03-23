import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Styles/CandidateDashboard.css";

function CandidateDashboard() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [search, setSearch] = useState("");
  const [profile, setProfile] = useState({});
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);
  const [resume, setResume] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetchProfile();
    fetchJobs();
    fetchApplications();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    navigate("/");
  };

  const fetchProfile = async () => {
    const userId = localStorage.getItem("userId");

    const res = await axios.get(
      `https://jobboard-2-ogr1.onrender.com/api/candidate/profile/${userId}`,
    );

    setProfile(res.data);
  };

  const fetchJobs = async () => {
    const res = await axios.get(
      "https://jobboard-2-ogr1.onrender.com/api/jobs",
    );
    setJobs(res.data);
  };

  // const fetchApplications = async () => {
  //   const userId = localStorage.getItem("userId");

  //   const res = await axios.get(
  //     `http://localhost:5000/api/applications/${userId}`,
  //   );

  //   setApplications(res.data);
  // };
  const fetchApplications = async () => {
    try {
      const res = await axios.get(
        "https://jobboard-2-ogr1.onrender.com/api/applications",
      );
      setApplications(res.data);
    } catch (error) {
      console.error(error);
    }
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

    await axios.post(
      "https://jobboard-2-ogr1.onrender.com/api/applications",
      formData,
    );

    alert("Application submitted successfully");

    setResume(null);
    fetchApplications();
  };

  return (
    <div className="dashboard">
      <div className="logout-container">
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

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
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search jobs by title or company..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {/* Jobs */}
      <h2>Available Jobs</h2>

      <div className="jobs-grid">
        {jobs
          .filter(
            (job) =>
              job.title.toLowerCase().includes(search.toLowerCase()) ||
              job.company.toLowerCase().includes(search.toLowerCase()),
          )
          .map((job) => (
            <div className="job-card" key={job._id}>
              <h3>{job.title}</h3>
              <p>{job.company}</p>
              <button onClick={() => setSelectedJob(job)}>Apply</button>
            </div>
          ))}
      </div>
      {selectedJob && (
        <div className="job-details">
          <h2>Job Details</h2>

          <p>
            <strong>Title:</strong> {selectedJob.title}
          </p>
          <p>
            <strong>Company:</strong> {selectedJob.company}
          </p>
          <p>
            <strong>Location:</strong> {selectedJob.location}
          </p>
          <p>
            <strong>Salary:</strong> {selectedJob.salary}
          </p>
          <p>
            <strong>Experience:</strong> {selectedJob.experience}
          </p>
          <p>
            <strong>Skills:</strong> {selectedJob.skills}
          </p>
          <p>
            <strong>Job Type:</strong> {selectedJob.jobType}
          </p>
          <p>
            <strong>Description:</strong> {selectedJob.description}
          </p>

          <h3>Upload Resume</h3>

          <input type="file" onChange={(e) => setResume(e.target.files[0])} />

          <button onClick={() => applyJob(selectedJob._id)}>Apply Job</button>

          <button onClick={() => setSelectedJob(null)}>Cancel</button>
        </div>
      )}

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
              <td>{app.jobId?.title}</td>
              <td>{app.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CandidateDashboard;
