# CI/CD Web App (Node.js + Docker + GitHub Actions + EC2)

A full-stack web application with a complete CI/CD pipeline that automatically builds, pushes, and deploys a Dockerized Node.js app to an AWS EC2 instance.

---

## Project Overview

This project demonstrates:

- Node.js + Express backend
- Static frontend (HTML, CSS, JS)
- Docker containerization
- CI/CD using GitHub Actions
- Automated deployment to AWS EC2

---

##  Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript  
- **Backend:** Node.js, Express.js  
- **DevOps:** Docker, GitHub Actions  
- **Cloud:** AWS EC2  

---

##  Project Structure


cicd-web-app/
├── .github/workflows/ # CI/CD pipeline
│ └── cicd.yml
├── public/ # Frontend files
│ ├── index.html
│ ├── styles.css
│ └── script.js
├── routes/ # API routes
├── controllers/ # Business logic
├── config/ # Config files
├── Dockerfile # Docker config
├── package.json
├── server.js # Backend entry point
└── README.md


---

##  Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/cicd-web-app.git
cd cicd-web-app
2. Install dependencies
npm install
3. Run locally
npm start

Open:

http://localhost:3000
 Docker Setup
Build image
docker build -t web-app .
Run container
docker run -d -p 3000:3000 web-app

CI/CD Pipeline (GitHub Actions)

Pipeline automatically triggers on push to main branch:

Steps:
Checkout code
Build Docker image
Push to Docker Hub
SSH into EC2
Pull latest image
Stop old container
Run new container
Required GitHub Secrets

Add these in your repository settings:

Secret Name	Description
DOCKER_USERNAME	Docker Hub username
DOCKER_TOKEN	Docker Hub access token
EC2_HOST	EC2 public IP
EC2_USER	EC2 username (ubuntu)
EC2_SSH_KEY	Private SSH key (.pem)

EC2 Setup
Install Docker
sudo apt update
sudo apt install docker.io -y
Add user to docker group
sudo usermod -aG docker ubuntu
newgrp docker

API Endpoints
Health Check
GET /health
Contact Form
POST /api/contact

Features
Responsive frontend UI
Contact form with backend API
Dockerized application
Automated CI/CD pipeline
EC2 deployment

Future Improvements
Add MongoDB integration
Implement authentication (JWT)
Add Nginx reverse proxy
Enable HTTPS (SSL)
Add monitoring & logging