import express from "express";
import { searchResults, faq, contact } from "../controller/help.controller.js";
const router = express.Router();

router.get("/searchResults",searchResults);
router.get("/faq",faq);
router.get("/contact",contact);


const help = router;
export default help;