import { Schema, model } from "mongoose";
import { User } from "./user.js";
import { Author } from "./author.js";
import { Genre } from "./genre.js";

const BookSchema = new Schema({
    userCreate: {
        type: Schema.Types.ObjectId,
        ref: User
    },
    title: {
        type: String,
        required: true
    },
    authorId:{
        type: Schema.Types.ObjectId,
        ref: Author
    },
    genreId:{
        type: Schema.Types.ObjectId,
        ref: Genre
    },
    yearPublication: {
        type: Number,
        required: true
    },
    imgFront: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey:false
})

const Book = model('Book', BookSchema)
export { Book }

