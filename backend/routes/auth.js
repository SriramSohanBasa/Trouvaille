import express from "express";
import { login, register, googleLogin } from "./../controllers/authController.js";

const router = express.Router();


//giving URL routes for login and register
router.post("/register", register);
router.post("/login", login);
router.post("/google-login", googleLogin);

export default router;
