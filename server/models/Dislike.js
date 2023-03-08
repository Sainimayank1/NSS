import mongoose, { Schema } from "mongoose";

const DislikeSchema = new mongoose.Schema(
    {
        UserId:{
            type:Schema.Types.ObjectId,
            ref:"user"
        }, 
        PostId:{
            type:Schema.Types.ObjectId,
            ref:"post"
        },
    }, {timestamps:true}
)


 const schema = mongoose.model("dislike",DislikeSchema);

 export default schema;