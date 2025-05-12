import { model, Schema } from "mongoose";

const commentSchema = Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:'User',
        require:true
    },
    comment:{
        type:String,
        require:true
    },
    publication:{
        type:Schema.Types.ObjectId,
        ref:'Publication',
        require:true
    }
},{
    timestamps: true
})

export default model("Comment",commentSchema)