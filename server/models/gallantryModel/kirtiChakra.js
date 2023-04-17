import mongoose, { Schema } from "mongoose";

const chakraSchema = new mongoose.Schema(
    {
        userName:{
            type:String,
            required:true
        },
        Rank:{
            type:String,
        },
        fatherNmae:{
            type:String
        },
        resident:{
            type:String
        },
        service:{
            type:String
        },
        award:{
            type:String
        }
    }, {timestamps:true}
)


 const schema = mongoose.model("Kirti Chakra",chakraSchema);

 export default schema;