URL Shortener – Logging Middleware Project
This project is a simple URL Shortener built with Node.js and Express.js, featuring two distinct logging middlewares.

📂 Project Structure
AFM/
│── backend/
│   ├── server.js        # Entry point
│   ├── routes.js        # API routes for URL shortener
│
│── middlewares/
│   ├── logger1.js       # First logging middleware
│   ├── logger2.js       # Second logging middleware
│
│── public/
│   ├── index.html       # Frontend for testing
│
│── package.json
│── README.md

🚀 Features:
Shortens long URLs into unique short codes
Redirects short codes to original URLs
Two custom middlewares for request logging
Simple frontend form to create and test short URLs

🔧 Installation & Setup
Clone this repo:
git clone https://github.com/NagabhushanP/1CR22IS094.git
cd 1CR22IS094


Install dependencies:
npm install
Start the server:
node backend/server.js
Open in browser:
http://localhost:3000
📌 API Endpoints
GET / → Welcome message
POST /shorten → Shorten a URL
{ "url": "https://example.com" }
✅ Response:
{ "shortUrl": "http://localhost:3000/abc123" }
GET /:code → Redirect to original URL

🧑‍💻 Example
Open http://localhost:3000
Enter a long URL → Get short URL
Visit short URL → Redirects correctly
✨ Created by Nagabhushan P (Roll No: 1CR22IS094)
