import express from "express";

import { signupUser, loginUser, checkUsername } from "../controller/user_controller.js";

import { authenticateToken } from "../controller/jwt-controller.js";


const router = express.Router();

router.post('/signup', signupUser);
router.post('/username', checkUsername);
router.post('/login', loginUser);

export default router;
