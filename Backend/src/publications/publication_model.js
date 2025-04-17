import { model, Schema } from "mongoose";

const publicationSchema = Schema({
    titlePublication:{
        type:String,
        required:true
    },
    shortDescription:{
        type:String,
        required:true
    },
    imagePublication:{
        type:String,
        require:true
    },
    author:{
        type:String,
        require:true
    },
    content:{
        type:String,
        require:true
    },
    typeClass:{
        type:String,
        enum:['taller','tecnologia','practica']
    },
    datePublication:{
        type:Date,
    }  
})

export default model('Publication',publicationSchema)