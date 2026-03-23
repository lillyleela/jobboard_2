import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Styles/CandidateDashboard.css";

function EmployerDashboard() {
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);

  const [jobData, setJobData] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    experience: "",
    skills: "",
    jobType: "",
    description: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetchJobs();
    fetchApplications();
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("userId");
    navigate("/");
  };

  const fetchJobs = async () => {
    const res = await axios.get(
      "https://jobboard-2-ogr1.onrender.com/api/jobs",
    );
    setJobs(res.data);
  };

  const fetchApplications = async () => {
    const res = await axios.get(
      "https://jobboard-2-ogr1.onrender.com/api/applications",
    );
    setApplications(res.data);
  };

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };
  const deleteJob = async (id) => {
    try {
      await axios.delete(`https://jobboard-2-ogr1.onrender.com/api/jobs/${id}`);

      alert("Job deleted successfully");

      fetchJobs();
    } catch (error) {
      console.error(error);
    }
  };

  const postJob = async (e) => {
    e.preventDefault();
    // Validation
    if (
      !jobData.title ||
      !jobData.company ||
      !jobData.location ||
      !jobData.salary ||
      !jobData.experience ||
      !jobData.skills ||
      !jobData.jobType ||
      !jobData.description
    ) {
      alert("Please fill all fields");
      return;
    }

    await axios.post("https://jobboard-2-ogr1.onrender.com/api/jobs", jobData);

    alert("Job Posted Successfully");
    setJobData({
      title: "",
      company: "",
      location: "",
      salary: "",
      experience: "",
      skills: "",
      jobType: "",
      description: "",
    });

    fetchJobs();
  };

  return (
    <div className="dashboard">
      <h1 className="title">Employer Dashboard</h1>
      <div className="logout-container">
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

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

          <input
            type="text"
            name="salary"
            placeholder="Salary"
            value={jobData.salary}
            onChange={handleChange}
          />

          <input
            type="text"
            name="experience"
            placeholder="Experience Required"
            value={jobData.experience}
            onChange={handleChange}
          />

          <input
            type="text"
            name="skills"
            placeholder="Skills Required"
            value={jobData.skills}
            onChange={handleChange}
          />

          <select
            name="jobType"
            value={jobData.jobType}
            onChange={handleChange}
          >
            <option value="">Select Job Type</option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
            <option value="Internship">Internship</option>
          </select>

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
            <button className="delete-btn" onClick={() => deleteJob(job._id)}>
              Delete Job
            </button>
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
              <td>{app.candidateId?.name}</td>
              <td>{app.jobId?.title}</td>
              <td>{app.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployerDashboard;
