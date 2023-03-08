import mongoose, { Schema } from "mongoose";

const PostSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        image:{
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        },
        description:{
            type:String,
            required:true
        },
        slug:{
            type:String,
            required:true
        },
        userName:{
            type:String,
            required:true
        },
        userId:{
            type:Schema.Types.ObjectId,
            ref:'user'
        }

    }, {timestamps:true}
)


 const schema = mongoose.model("post",PostSchema);

 export default schema;