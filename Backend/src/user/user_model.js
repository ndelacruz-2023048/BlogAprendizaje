import { model, Schema } from "mongoose";


const userSchema = Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
    }
}, {
    timestamps: true
});

export default model('User',userSchema)