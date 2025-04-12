import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
    try {
        const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });

        res.cookie("jwt", token, {
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
            httpOnly: true,
            sameSite: "strict",
            secure: process.env.NODE_ENV === "production", // Secure in production only
        });

        return token;
    } catch (error) {
        console.error("Error generating token:", error.message);
        throw new Error("Token generation failed"); // Ensure proper error handling
    }
};
