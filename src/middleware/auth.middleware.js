import jwt from "jsonwebtoken";
import User from "../models/user.model.js"; // Ensure correct import
import dotenv from "dotenv";

dotenv.config(); // Ensure environment variables are loaded

export const protectRoute = async (req, res, next) => {
    try {
        // Fix req.cookie -> req.cookies
        const token = req.cookies?.jwt;

        if (!token) {
            return res.status(401).json({ message: "Unauthorized access - No token provided" });
        }

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(401).json({ message: "Unauthorized - Invalid token" });
        }

        // Fix findById and select query
        const user = await User.findById(decoded.userId).select("-password");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        req.user = user; // Attach user data to request
        next(); // Move to the next middleware

    } catch (error) {
        console.error("Error in protectRoute middleware:", error.message);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};
