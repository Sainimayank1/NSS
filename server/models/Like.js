import mongoose, { Schema } from "mongoose";

const LikeSchema = new mongoose.Schema(
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


 const schema = mongoose.model("like",LikeSchema);

 export default schema;