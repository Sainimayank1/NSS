import express from "express";
import auth from "../utils/auth.js";
import createPost from "../controllers/createPost/createPost.js"

const router = express.Router();




router.post("/create", auth, createPost);

export default router