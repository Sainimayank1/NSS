import Post from "../../models/Post.js"

const  FetchAllPosts = async(req,res) => {
    const page = req.params.page;
    const perPage = 7;
    const skip = (page -1) * perPage;
    try {
        const count = await Post.find().countDocuments();
        const data = await Post.find()
        .skip(skip)
        .limit(perPage)
        .sort({updateAt:-1});
        return res.status(200).json({data , count , perPage})
    } catch (error) {
        return res.status(500).json({error});
    }
  
}

export default FetchAllPosts