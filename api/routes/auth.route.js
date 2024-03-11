import express from "express";
import { google, signup } from '../controllers/auth.controller.js';
import { signin } from '../controllers/auth.controller.js';
const router = express.Router();

// console.log("hello");
router.post('/signup', signup);
router.post('/signin', signin);
router.post('/google', google);

export default router;