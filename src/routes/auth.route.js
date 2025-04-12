import express from "express";
import { signup, login, logout, updateProfile, checkAuth } from "../controller/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.put("/update-profile", protectRoute, updateProfile);
router.get("/check", protectRoute, checkAuth); // ✅ Fix: checkAuth is now imported
router.get(("/"), (req, res) => {
    res.sendFile("login.html", { root: __dirname });
}); // Serve login.html on the root route

export default router;
