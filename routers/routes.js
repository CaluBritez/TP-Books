import { Router } from 'express';
import { ctrlUser } from '../controllers/user.js';
import { ctrlAuthor } from '../controllers/author.js';
import { ctrlGenre } from '../controllers/genre.js';
import { ctrlBook } from '../controllers/book.js';
const router = Router();
// ------------------------------------------------------------------------------------
// ----------------- ROUTES USER ---------------------------------------------
// ------------------------------------------------------------------------------------
// Crear Usuario
router.post('/user',ctrlUser.createUser);
// ------------------------------------------------------------------------------------
// ----------------- ROUTES AUTHOR ---------------------------------------------
// ------------------------------------------------------------------------------------
router.post('/author',ctrlAuthor.createAuthor)
router.get('/author',ctrlAuthor.showAuthors)
router.get('/author/:id',ctrlAuthor.showOneAuthor)
router.delete('/author/:id',ctrlAuthor.deleteAuthor)
router.put('/author/:id',ctrlAuthor.updateAuthor)
// ------------------------------------------------------------------------------------
// ----------------- ROUTES GENRE ---------------------------------------------
// ------------------------------------------------------------------------------------
router.post('/genre',ctrlGenre.createGenre)
// ------------------------------------------------------------------------------------
// ----------------- ROUTES BOOK ---------------------------------------------
// ------------------------------------------------------------------------------------
router.post('/book',ctrlBook.createBook)
router.get('/book',ctrlBook.showBooks)
router.get('/book/:id',ctrlBook.showOneBook)
router.delete('/book/:id',ctrlBook.deleteBook)
router.put('/book/:id',ctrlBook.updateBook)

export {router}
