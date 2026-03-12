# 💼 Job Portal Web Application

A full-stack **Job Portal** web application where **candidates can search and apply for jobs** and **employers can post jobs and manage applications**.

This project demonstrates a **complete MERN stack implementation** including authentication, job listings, resume uploads, and application management.

---

# 🚀 Features

## 👩‍💻 Candidate Features
- Register and login
- View available jobs
- Search jobs by title or company
- View job details
- Upload resume and apply for jobs
- Track application status

## 🏢 Employer Features
- Employer login
- Post new job listings
- View candidate applications
- Manage application status
- View uploaded resumes

---

# 🛠 Tech Stack

### Frontend
- React.js
- React Router
- Axios
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer (for resume uploads)

---

# 📂 Project Structure

## 📂 Project Structure
```text
job-portal
│
├── backend
│   ├── models
│   │   ├── User.js
│   │   ├── Job.js
│   │   └── Application.js
│   │
│   ├── routes
│   │   ├── authRoutes.js
│   │   ├── jobRoutes.js
│   │   ├── candidateRoutes.js
│   │   └── applicationRoutes.js
│   │
│   ├── uploads
│   │
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── frontend
│   ├── public
│   │   └── index.html
│   │
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── Styles
│   │   ├── App.js
│   │   └── index.js
│   │
│   └── package.json
│
└── README.md

```

# ⚙️ Installation & Setup

## 1️⃣ Clone the Repository
git clone [https://github.com/your-username/job-portal.git](https://github.com/lillyleela/jobboard_2)
cd job-portal

---

# 🖥 Backend Setup

Navigate to backend folder:

cd backend
npm install

Create a `.env` file inside backend folder:
MONGO_URI=mongodb://localhost:27017/jobportal
PORT=5000

Start backend server:
npm start


Backend will run at:


http://localhost:5000

---

# 💻 Frontend Setup

Navigate to frontend folder:
cd frontend
npm install
npm start
Frontend will run at:


http://localhost:3000

---

# 🔌 Example API Endpoints

| Method | Endpoint | Description |
|------|------|------|
| POST | /api/auth/register | Register new user |
| POST | /api/auth/login | Login user |
| GET | /api/jobs | Get all jobs |
| POST | /api/jobs | Create new job |
| POST | /api/applications | Apply for job |
| GET | /api/applications | Get all applications |

---

# 📊 Example Application Data

When a candidate applies for a job, an application document is stored in MongoDB:
{
"jobId": "69ac04c11a620bba456635da",
"candidateId": "69aa9432990b6680956011fd",
"resume": "resume.pdf",
"status": "Pending"
}


---

# 🧪 Example API Test Commands

Fetch all jobs:
curl http://localhost:5000/api/jobs
Create a job:


curl -X POST http://localhost:5000/api/jobs

-H "Content-Type: application/json"
-d '{"title":"Frontend Developer","company":"Tech Solutions"}'


---

# 🎥 Demo

demo clips here.

Example:

### Home Page
<img width="1895" height="910" alt="image" src="https://github.com/user-attachments/assets/2619b47f-7c35-4e24-a936-e2fd8cf21af1" />

## Jobs
<img width="1915" height="697" alt="image" src="https://github.com/user-attachments/assets/90f2753d-a7ef-468d-93a6-a8d471ffaf3b" />

### Candidate Dashboard
<img width="1430" height="868" alt="image" src="https://github.com/user-attachments/assets/db481558-c4c4-47fe-b0f1-06771b03ca63" />


### Employer Dashboard
<img width="1303" height="863" alt="image" src="https://github.com/user-attachments/assets/aaf3e38e-df22-442b-9e1e-8fa1d40b1572" />


---

# 🔧 Environment Tips

If you do not want to run MongoDB locally, use **MongoDB Atlas**.

Example connection string:
mongodb+srv://username:password@cluster.mongodb.net/jobportal


---

# 📈 Future Improvements

- Email notifications for applications
- Job recommendation system
- Resume preview feature
- Admin dashboard
- Advanced job filters

---

# 👩‍💻 Author

**Kummari Leelavathi**

---


