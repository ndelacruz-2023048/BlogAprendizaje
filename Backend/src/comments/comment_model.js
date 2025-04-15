import { Schema } from "mongoose";

const commentSchema = Schema({
    userName:{
        type:String,
        require:true
    },
    comment:{
        type:String,
        require:true
    }
})