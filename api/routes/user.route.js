import express from "express";
import { test } from "../controllers/user.controller.js";
const router = express.Router();

// console.log("hello");
router.get('/test', test);

export default router;