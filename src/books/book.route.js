
import express from 'express'
import { createBook, deleteBook, getAllBooks, getBook, updateBook } from './book.controller.js'
import verifyAdminToken from '../middleware/verifyAdminToken.js'
import upload from '../middleware/multerMiddleware.js'

const router = express.Router()

//get all books
router.get('/',getAllBooks)

//post a book
router.post('/',verifyAdminToken,upload.single('coverImage'),createBook)

//get a book
router.get('/:id',getBook)

//update a book
router.put('/:id',verifyAdminToken,updateBook)

//delete a book
router.delete('/:id',verifyAdminToken,deleteBook)

export default router