import { Author } from "../models/author.js";
const ctrlAuthor = {};

//Create authors
ctrlAuthor.createAuthor = async (req, res) => {
    try {
        const author = new Author(req.body)
        await author.save()

        return res.json(author)
    } catch (error) {
        res.status(500).json('Internal server error Author')
    }
};

// Show Authors
ctrlAuthor.showAuthors = async (req, res) => {
    try {
        const authors = await Author.find({});
        return res.json(authors);
    } catch (error) {
        console.log('Error al obtener los Autores', error);
        return res.status(500).json({
            message: 'Error al obtener los autores'
        })
    }
}

// Show one Author
ctrlAuthor.showOneAuthor = async (req, res) => {
    try {
        const { id } = req.params;
        const author = await Author.findById(id);
        return res.json(author);
    } catch (error) {
        console.log('Error al obtener un autor',error);
        return res.status(500).json({
            message: 'Error al obtener el autor buscado'
        })
    }
}

// Delete one Author
ctrlAuthor.deleteAuthor = async (req, res) => {
    try {
        const { id } = req.params;
        await Author.findByIdAndDelete(id);
        return res.json('eliminado con exito');
    } catch (error) {
        console.log('Error al borrar un autor',error);
        return res.status(500).json({
            message: 'Error al borrar el autor buscado'
        })
    }
}
// Update one Author
ctrlAuthor.updateAuthor = async (req, res) => {
    const author = req.params.id
    const { name, lastname, biography } = req.body
  
    try {
      await Author.findByIdAndUpdate(author, { name, lastname, biography })
  
      res.sendStatus(202)
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Something goes wrong' })
    }
  }

  export {ctrlAuthor}