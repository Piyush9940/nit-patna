import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";


import authRoutes from "./routes/auth.route.js";
import user from "./routes/dashboard.route.js";
import { connectDB } from "./lib/db.js";
import admin from "./routes/admin.route.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to serve static files from the "public" directory


app.use(express.json());
app.use(cors());

// Resolve __dirname in ES module scope
const __filename = fileURLToPath(import.meta.url);

// Middleware
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);// Authentication routes    
app.use("/api/user", user); // User routes
app.use("/api/admin", admin); // Admin routes

// Serve static HTML file (fallback route or homepage)
 

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    connectDB()
        .then(() => {
            console.log("Connected to MongoDB");
        })
        .catch((err) => {
            console.error("Error connecting to MongoDB:", err);
        });
    
    console.log("MongoDB connection established successfully.");
  });
