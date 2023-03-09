import Post from "../../models/Post.js"


const  FetchPosts = async(req,res) => {
    let PostId = req.params.PostId;
    PostId  = PostId.split(':')[1];
    try {
        const data = await Post.find({_id:PostId})
        return res.status(200).json({data})
    } catch (error) {
        return res.status(500).json({error:[error]});
    }
  
}

export default FetchPosts