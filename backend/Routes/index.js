import express from "express";

import { contactQuery } from "../Controller/ContactController.js";


const router =express.Router();


router.post("/contact" ,contactQuery);

export default router;