import { Book } from "../models/book.js";
const ctrlBook = {};

//Create Book
ctrlBook.createBook = async (req, res) => {
    try {
        const book = new Book(req.body)
        await book.save()

        return res.json(book)
    } catch (error) {
        res.status(500).json('Internal server error Book')
    }
};
// Show Books
ctrlBook.showBooks = async (req, res) => {
    try {
        const book = await Book.find({});
        return res.json(book);
    } catch (error) {
        console.log('Error al obtener los Libros', error);
        return res.status(500).json({
            message: 'Error al obtener los libros'
        })
    }
}
// Show one Book
ctrlBook.showOneBook = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);
        return res.json(book);
    } catch (error) {
        console.log('Error al obtener un libro',error);
        return res.status(500).json({
            message: 'Error al obtener el libro buscado'
        })
    }
}
// Delete Boook
ctrlBook.deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        await Book.findByIdAndDelete(id);
        return res.json('libro eliminado con exito');
    } catch (error) {
        console.log('Error al borrar un libro',error);
        return res.status(500).json({
            message: 'Error al borrar el libro buscado'
        })
    }
}
// Update Book
ctrlBook.updateBook = async (req, res) => {
    const book = req.params.id
    const { title, authorId, genreId, yearPublication, imgFront} = req.body
  
    try {
      await Book.findByIdAndUpdate(book, { title, authorId, genreId, yearPublication, imgFront})
  
      res.sendStatus(202)
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Something goes wrong' })
    }
  }

export {ctrlBook}
