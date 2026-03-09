import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/CandidateDashboard.css";

function EmployerDashboard() {
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);

  const [jobData, setJobData] = useState({
    title: "",
    company: "",
    description: "",
    location: "",
  });

  useEffect(() => {
    fetchJobs();
    fetchApplications();
  }, []);

  const fetchJobs = async () => {
    const res = await axios.get("http://localhost:5000/api/jobs");
    setJobs(res.data);
  };

  const fetchApplications = async () => {
    const res = await axios.get("http://localhost:5000/api/applications");
    setApplications(res.data);
  };

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const postJob = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:5000/api/jobs", jobData);

    alert("Job Posted Successfully");
    setJobData({
      title: "",
      company: "",
      description: "",
      location: "",
    });

    fetchJobs();
  };

  return (
    <div className="dashboard">
      <h1 className="title">Employer Dashboard</h1>

      {/* Post Job */}
      <div className="profile-card">
        <h2>Post New Job</h2>

        <form onSubmit={postJob} className="job-form">
          <input
            type="text"
            name="title"
            placeholder="Job Title"
            value={jobData.title}
            onChange={handleChange}
          />

          <input
            type="text"
            name="company"
            placeholder="Company"
            value={jobData.company}
            onChange={handleChange}
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={jobData.location}
            onChange={handleChange}
          />

          <textarea
            name="description"
            placeholder="Job Description"
            value={jobData.description}
            onChange={handleChange}
          />

          <button type="submit">Post Job</button>
        </form>
      </div>

      {/* Posted Jobs */}
      <h2>Posted Jobs</h2>

      <div className="jobs-grid">
        {jobs.map((job) => (
          <div className="job-card" key={job._id}>
            <h3>{job.title}</h3>
            <p>{job.company}</p>
            <p>{job.location}</p>
          </div>
        ))}
      </div>

      {/* Applications */}
      <h2>Applications</h2>

      <table className="applications-table">
        <thead>
          <tr>
            <th>Candidate</th>
            <th>Job</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {applications.map((app) => (
            <tr key={app._id}>
              <td>{app.candidateName}</td>
              <td>{app.jobTitle}</td>
              <td>{app.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployerDashboard;
