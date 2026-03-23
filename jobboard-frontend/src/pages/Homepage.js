import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/Homepage.css";
import heroImage from "../assests/image.png";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import JobCard from "../components/JobCard";

function HomePage() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get("https://jobboard-2-ogr1.onrender.com/api/jobs")
      .then((res) => {
        console.log(res.data); // check data
        setJobs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Navbar />

      <div className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-overlay">
          <h1>Find Your Dream Job Today</h1>
          <p>Browse thousands of job opportunities</p>
          <SearchBar />
        </div>
      </div>

      {/* Featured Jobs */}
      <section className="featured-section">
        <h2>Featured Jobs</h2>

        <div className="job-grid">
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <JobCard
                key={job.id}
                title={job.title}
                company={job.company}
                location={job.location}
              />
            ))
          ) : (
            <p>No jobs available</p>
          )}
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 JobBoard. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default HomePage;
