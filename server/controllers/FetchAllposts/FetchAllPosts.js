import Post from "../../models/Post.js"
import Like from "../../models/Like.js"
import Dislike from "../../models/Dislike.js"

const  FetchAllPosts = async(req,res) => {
    const page = req.params.page.split(':');
    const perPage = 7;
    const skip = (page[1] -1) * perPage;
    // console.log(skip)
    try {
        const count = await Post.find({}).countDocuments();
        const data = await Post.find({}).skip(skip).limit(perPage).sort({updateAt:-1});
        const likes  = await Like.find({});
        const dislikes = await Dislike.find({});
        return res.status(200).json({data , likes , dislikes , count , perPage})
    } catch (error) {
        return res.status(500).json({error});
    }
  
}

export default FetchAllPosts