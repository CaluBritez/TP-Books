import { Schema, model } from "mongoose";
import { User } from "./user.js";

const AuthorSchema = new Schema({
    userCreate: {
        type: Schema.Types.ObjectId,
        ref: User
    },
    name:{
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    biography: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey:false
})

const Author = model('Author', AuthorSchema)


export { Author }