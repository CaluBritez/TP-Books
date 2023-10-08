import { Book } from "../models/book.js";
const ctrlBook = {};

//registrar un usuario
ctrlBook.createBook = async (req, res) => {
    try {
        const book = new Book(req.body)
        await book.save()

        return res.json(book)
    } catch (error) {
        res.status(500).json('Internal server error Book')
    }
};
export {ctrlBook}
