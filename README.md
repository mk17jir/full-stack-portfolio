Full-Stack Portfolio

A modern, responsive full-stack developer portfolio built with React, Tailwind CSS, Node.js, and Express.

The portfolio showcases my projects, technical skills, and provides a working contact form powered by a production backend and Gmail.

🚀 Live Demo

Portfolio:
https://full-stack-portfolio-eight-omega.vercel.app

GitHub:
https://github.com/mk17jir

✨ Features

Responsive portfolio design

Dark and light mode

Animated sections with Framer Motion

Projects showcase

Skills section

Working contact form

Backend API with Express

Email delivery with Nodemailer

Gmail App Password authentication

Server-side validation

API rate limiting

Helmet security headers

CORS configuration

Honeypot protection against bots

Protected health-check endpoint

Environment variable configuration

Vercel production deployment

🛠️ Tech Stack
Frontend

React

Vite

Tailwind CSS

Framer Motion

Lucide React

Backend

Node.js

Express

Nodemailer

Express Rate Limit

Helmet

CORS

dotenv

Deployment

Vercel

GitHub

📁 Project Structure
full-stack-portfolio/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── data/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── api/
│   │   └── index.js
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   └── server.js
│   └── package.json
│
├── vercel.json
└── README.md

📬 Contact API

The portfolio includes a backend contact endpoint:

POST /api/contact


Example request:

{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "I'd like to discuss a project."
}


The backend validates the request and sends the message to the portfolio owner's email through Nodemailer.

🔐 Security

The backend includes several security measures:

Helmet for HTTP security headers

CORS restrictions

Request body size limits

Rate limiting on the contact endpoint

Server-side validation

HTML escaping

Honeypot bot protection

Protected health-check endpoint

Sensitive credentials stored in environment variables

No email credentials or API secrets are stored in the repository.

⚙️ Local Development

Clone the repository:

git clone https://github.com/mk17jir/full-stack-portfolio.git


Move into the project:

cd full-stack-portfolio

Start the frontend
cd client
npm install
npm run dev


The frontend runs on:

http://localhost:5173

Start the backend

Open another terminal:

cd server
npm install
npm run dev


The backend runs on:

http://localhost:3000

🔑 Environment Variables
Server

Create:

server/.env


and configure:

PORT=3000
CLIENT_URL=http://localhost:5173

EMAIL_USER=your-email@gmail.com
EMAIL_APP_PASSWORD=your-gmail-app-password

HEALTH_API_KEY=your-long-random-api-key

Client

Create:

client/.env


and configure:

VITE_API_URL=http://localhost:3000/api


🚀 Deployment

The project is deployed on Vercel as a multi-service application.

                    Vercel
                      │
          ┌───────────┴───────────┐
          │                       │
       Client                   Server
       React                   Express
          │                       │
          │                  /api/contact
          │                       │
          └───────────┬───────────┘
                      │
                  Nodemailer
                      │
                    Gmail


The frontend and backend share the same production domain.

https://full-stack-portfolio-eight-omega.vercel.app


API requests are routed through:

/api/*

📌 Featured Projects
TikTok Video Downloader

A web application that allows users to download TikTok videos through a simple and responsive interface.

Technologies: React, Tailwind CSS, JavaScript, Node.js, Express

Twitter Video Downloader

A responsive web application that allows users to download videos from Twitter through a simple interface.

Technologies: React, Tailwind CSS, JavaScript, Node.js, Express

Full-Stack Todo List

A full-stack task management application that allows users to create, manage, and organize tasks.

Technologies: React, Node.js, Express, MongoDB, Tailwind CSS, JavaScript

👨‍💻 Author

Mohamed Faisal

GitHub:
https://github.com/mk17jir

Portfolio:
https://full-stack-portfolio-eight-omega.vercel.app

Built with React, Node.js, and Express.
