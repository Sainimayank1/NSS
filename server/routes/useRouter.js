import express from "express";
import { registeration , registerValidation} from "../controllers/UserRegisteration.js";
// import {loginValidation , login} from "../controller/UserLogin.js";
const router = express.Router();




//          REDIRECT TO USERRIGESTRATION CONTROLLER


router.post("/register", registerValidation, registeration)
// router.post("/login", loginValidation, login)

export default router;