import express from "express";
import auth from "../utils/auth.js";
import createPost from "../controllers/createPost/createPost.js"
import expressFormidable from "express-formidable"
import FetchAllPosts from "../controllers/FetchAllposts/FetchAllPosts.js"
const router = express.Router();




router.post("/create", auth , expressFormidable({maxFileSize : 5 * 1024 * 1024}) , createPost);
router.get("/posts" , auth , FetchAllPosts);

export default router