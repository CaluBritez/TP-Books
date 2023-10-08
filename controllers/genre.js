import { Genre } from "../models/genre.js";
const ctrlGenre = {};

//registrar un usuario
ctrlGenre.createGenre = async (req, res) => {
    try {
        const genre = new Genre(req.body)
        await genre.save()

        return res.json(genre)
    } catch (error) {
        res.status(500).json('Internal server error Genre')
    }
};

export {ctrlGenre}