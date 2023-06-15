import express from "express";
import { login, register } from "../controllers/auth.js";
const router = express.Router();

/**
 * Route serving login functionality.
 * @name post/login
 */
router.post("/login", login);

/**
 * Route serving register functionality.
 * @name post/register
 */
router.post("/register", register);

export default router;
