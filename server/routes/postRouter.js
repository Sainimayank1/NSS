import express from "express";
import auth from "../utils/auth.js";
import createPost from "../controllers/createPost/createPost.js"
import expressFormidable from "express-formidable"
import FetchAllPosts from "../controllers/FetchAllposts/FetchAllPosts.js"
import LikePost from "../controllers/Like-and-dislike/LikePost.js";
import Dislike from "../controllers/Like-and-dislike/Dislike.js";
const router = express.Router();




router.post("/create", auth , expressFormidable({maxFileSize : 5 * 1024 * 1024}) , createPost);
router.get("/posts/:page" , FetchAllPosts);
router.post("/like" , auth , LikePost);
router.post("/dislike" , auth , Dislike);

export default router