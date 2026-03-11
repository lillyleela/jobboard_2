# Job Portal Web Application

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

A full-stack **Job Portal** web application built with **React.js**, **Node.js**, **Express**, and **MongoDB**. This platform allows **candidates** to search and apply for jobs, and **employers** to post job openings and manage applications.

---

## 🔹 Live Demo

*(If hosted, replace with your link. Otherwise, leave for future deployment)*

[Live Demo Link](https://your-deployed-link.com)

---

## 🔹 Features

### Candidate Features
- Register and manage profile
- Browse and search jobs by title or company
- View detailed job descriptions
- Upload resume and apply for jobs
- View status of applied jobs

### Employer Features
- Register and manage profile
- Post new job listings
- View all applications
- Accept or reject applications
- Download candidate resumes

### Common Features
- Responsive design (mobile + desktop)
- Secure login system
- Dynamic job listings from the database

---

## 🔹 Tech Stack

**Frontend**
- React.js
- React Router DOM
- Axios
- CSS / Tailwind or Bootstrap

**Backend**
- Node.js
- Express.js
- MongoDB with Mongoose
- Multer (for resume uploads)
- CORS

---

## 🔹 Project Structure
job-portal/
├─ backend/
│ ├─ models/
│ │ ├─ User.js
│ │ ├─ Job.js
│ │ └─ Application.js
│ ├─ routes/
│ │ ├─ authRoutes.js
│ │ ├─ jobRoutes.js
│ │ ├─ candidateRoutes.js
│ │ └─ applicationRoutes.js
│ ├─ uploads/ # Uploaded resumes
│ └─ server.js
├─ frontend/
│ ├─ src/
│ │ ├─ components/ # Navbar, JobCard, SearchBar, etc.
│ │ ├─ pages/ # HomePage.js, JobsPage.js, CandidateDashboard.js, EmployerDashboard.js
│ │ └─ Styles/ # CSS files
│ └─ package.json
└─ README.md

---

## 🔹 Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/job-portal.git
cd job-portal
MONGO_URI=your_mongodb_connection_string
PORT=5000
npm start
```
🔹 Screenshots

(Add screenshots of your homepage, jobs page, candidate dashboard, and employer dashboard here)
🔹 Future Enhancements

Search filters by location, experience, and salary

Email notifications for application status

Profile editing for candidates and employers

Resume preview before uploading

Role-based authentication (Admin, Candidate, Employer)

Job recommendations based on skills
# Author
Leelavathi
