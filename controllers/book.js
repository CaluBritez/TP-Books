import { Book } from "../models/book.js";
import { Genre } from "../models/genre.js";
const ctrlBook = {};

//Create Book
ctrlBook.createBook = async (req, res) => {
    try{
        const {userCreate, title, authorId, genreId, yearPublication} = req.body;
        if (!req.files || (req.files).length === 0) {
            res.status(400).send("No se adjuntaron archivos.");
            return;
        }
        const file = req.files.archivo;
        const path = `C:/Users/Lucas/Desktop/Trabajos/TP-Libros/img/${file.name}`;
        file.mv(path, (err) => {
            if (err) {
                console.log("Error al guardar ruta de imagen")
                return res.status(500).send(err);
            }
        })
        const book = new Book({
            userCreate,
            title,
            authorId,
            genreId,
            yearPublication,
            imgFront:path
            })
        
        await book.save()
        return res.json(book)
    }
    catch (error) {
        res.status(500).json('Internal server error Book')
    }
}
// Show Books

ctrlBook.showBooks = async (req, res) => {
    try {
        const books = await Book.find()
        .populate('authorId','name lastname')
        .populate('genreId','genre');
        const list = books.map((book) => ({
            title: book.title,
            authorId: `${book.authorId.name} ${book.authorId.lastname}`,
            genreId: book.genreId.genre
        }))

        return res.status(200).json(list);

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
// Show Books for Genre

ctrlBook.showBooksGenre = async (req, res) => {
    try {
        const generos = await Genre.find();
        let idsGeneros = [];
        let nombresGeneros = [];
        let resultados = []
        for(var i=0; i< generos.length; i++){
            idsGeneros.push(generos[i].id);
            nombresGeneros.push(generos[i].genre)
            resultados.push(0)
        }
        console.log(idsGeneros)
        console.log(nombresGeneros)
        const book = await Book.find();
        
        for (var i=0; i < book.length; i++){

            for(var r=0; r < idsGeneros.length; r++){
                if(book[i].genreId == idsGeneros[r]){
                    resultados[r] = resultados[r] + 1
                }
            }
        }
        console.log(resultados)
        
        return (
            res.status(200).json({message:"Los resultados son los siguientes: "}
                ))
    } catch (error) {
        console.log('Error al obtener los Libros del genero solicitado', error);
        return res.status(500).json({
            message: 'Error al obtener los libros del genero solicitado'
        })
    }
}
export {ctrlBook}
