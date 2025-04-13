import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
 
import { fileURLToPath } from "url";
import { dirname } from "path";
import admin from "./routes/admin.route.js";
import hospital from "./routes/hospital.route.js";
import driver from "./routes/driver.route.js";
import help from "./routes/help.route.js";
import insurance from "./routes/insurance.route.js";



import authRoutes from "./routes/auth.route.js";
 
import { connectDB } from "./lib/db.js";
 
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
app.use("/api/hospital", hospital); // Hospital routes
app.use("/api/driver", driver); // Driver routes
app.use("/api/help", help); // Help routes
app.use("/api/insurance", insurance); // Insurance routes
app.use("/api/admin", admin); // Admin routes
app.use("/api/help", help); // Help routes
app.use("/api/insurance", insurance); // Insurance routes
  
  // Admin routes

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
