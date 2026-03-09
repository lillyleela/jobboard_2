import React from "react";
import "../Styles/Homepage.css";
import heroImage from "../assests/image.png";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import JobCard from "../components/JobCard";

function HomePage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-overlay">
          <h1>Find Your Dream Job Today</h1>
          <p>Browse thousands of job opportunities and start your career</p>
          <SearchBar />
        </div>
      </div>

      {/* Featured Jobs */}
      <section className="featured-section">
        <h2>Featured Jobs</h2>
        <div className="job-grid">
          <JobCard
            title="Frontend Developer"
            company="Tech Solutions"
            location="Hyderabad"
          />
          <JobCard
            title="Backend Developer"
            company="Code Labs"
            location="Bangalore"
          />
          <JobCard
            title="UI/UX Designer"
            company="Creative Minds"
            location="Chennai"
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Are You Hiring?</h2>
        <p>Post your job openings and find the best candidates</p>
        <button>Post a Job</button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 JobBoard. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default HomePage;
