import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import JobCard from "../components/JobCard";
import "../Styles/Jobspage.css";

function JobsPage() {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/jobs");
      setJobs(res.data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <>
      <Navbar />

      <div className="jobs-container">
        <h2>Available Jobs</h2>

        <div className="jobs-grid">
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <JobCard
                key={job._id}
                title={job.title}
                company={job.company}
                location={job.location}
              />
            ))
          ) : (
            <p>No jobs available</p>
          )}
        </div>
      </div>
    </>
  );
}

export default JobsPage;
