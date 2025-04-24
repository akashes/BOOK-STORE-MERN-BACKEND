
import express from 'express'
import Book from './book.model.js'
import { createBook, deleteBook, getAllBooks, getBook, updateBook } from './book.controller.js'

const router = express.Router()

//get all books
router.get('/',getAllBooks)

//post a book
router.post('/',createBook)

//get a book
router.get('/:id',getBook)

//update a book
router.put('/:id',updateBook)

//delete a book
router.delete('/:id',deleteBook)

export default router