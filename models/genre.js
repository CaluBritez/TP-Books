import { Schema, model } from "mongoose";
import { User } from "./user.js";

const GenreSchema = new Schema({
    userCreate: {
        type: Schema.Types.ObjectId,
        ref: User
    },
    genre: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey:false
})

const Genre = model('Genre', GenreSchema)
export { Genre }