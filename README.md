# 📈 Zerodha Kite Clone

A full-stack web application built using the MERN stack (MongoDB, Express, React, Node.js). This project successfully replicates the UI and core portfolio-tracking mechanics of the popular Zerodha Kite trading dashboard, showcasing skills in frontend component design, backend API routing, and cloud database management.

## 🚀 Features

- **Authentic UI**: Pixel-perfect replication of the Zerodha Kite trading terminal and landing pages.
- **Trading Dashboard**: A functional mock dashboard that displays equity, available margins, and holdings.
- **RESTful APIs**: Node.js and Express backend connecting the user interface to the database.
- **Cloud Database**: Integrated with MongoDB Atlas for persistent storage of mock portfolio data (Holdings, Positions, Orders).
- **Client-side Routing**: Seamless page navigation using `react-router-dom`.

## 💻 Tech Stack

- **Frontend**: React.js, HTML5, CSS3, Bootstrap 5
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Atlas Cloud)
- **Other Tools**: Axios (API calls), Mongoose (Data modeling), Cors

## 📂 Project Structure

The project is divided into three main microservices:
1. `/frontend`: The main landing pages (Home, About, Pricing, Signup, etc.)
2. `/dashboard`: The authenticated trading terminal (Kite).
3. `/backend`: The Express server and MongoDB connection.

## 🛠️ Installation & Setup

**1. Clone the repository**
```bash
git clone https://github.com/yuktiarya/Stock-Trading-Platform.git
cd Stock-Trading-Platform
```

**2. Install dependencies for all folders**
Open three separate terminals and run the following in each folder:
```bash
# Terminal 1
cd backend
npm install

# Terminal 2
cd frontend
npm install

# Terminal 3
cd dashboard
npm install --legacy-peer-deps
```

**3. Setup Environment Variables**
In the `backend` folder, create a `.env` file and add your MongoDB Atlas connection string:
```env
PORT=3002
MONGO_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/zerodha-clone
```

## 🏃‍♂️ Running the Application

To run the full stack locally, you need to start all three servers.

1. **Start the Backend** (Runs on Port 3002)
   ```bash
   cd backend
   npm start
   ```
2. **Start the Frontend** (Runs on Port 3000)
   ```bash
   cd frontend
   npm start
   ```
3. **Start the Dashboard** (Runs on Port 3001)
   ```bash
   cd dashboard
   npm start
   ```

*Note: If React asks to run the dashboard on another port because 3000 is occupied, press `Y`.*

## 📸 Screenshots

*(You can add images of your working project here later!)*

---
*Disclaimer: This is a clone project built strictly for educational and portfolio purposes. It is not affiliated with the real Zerodha in any way.*
