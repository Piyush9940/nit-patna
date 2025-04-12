import express from "express";
const router = express.Router();

router.get("/searchResults",searchResults);
router.get("/faq",faq);
router.get("/contact",contact);


const help = router;
export default help;