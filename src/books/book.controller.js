import Book from "./book.model.js"
export const createBook = async (req, res) => {
    try {
        const newBook =  Book({...req.body})
        await newBook.save()
        res.status(201).json({
            message:"Book created successfully",
            book:newBook
        })
       } catch (error) {
        console.log('Error creating book',error)
        res.status(500).send({
            message:"Error creating book",
            error
        })
        
       }
}

export const getAllBooks=async(req,res)=>{
    console.log('inside get all books')
 
    try {
        const bookData = await Book.find().sort({createdAt:-1})
        // res.status(200).json({
        //     message:"Books fetched successfully",
        //     books:bookData
        // })
        res.status(200).json(bookData)
    } catch (error) {
        console.log('Error fetching books',error)
        res.status(500).send({
            message:"Error fetching books",
            error
        })
        
    }
}

export const getBook=async(req,res)=>{

    try {
        const {id}=req.params
        const book = await Book.findById(id)
        if(!book){
            return res.status(404).send({
                message:"Book not found"
            })
        }
        res.status(200).json(book)
    } catch (error) {
        console.log('Error fetching book',error)
        res.status(500).send({
            message:"Error fetching book",
            error
        })
        
    }
}

export const updateBook = async(req,res)=>{
    try {
        const {id}=req.params
        
      const updatedBook=  await Book.findByIdAndUpdate(id,req.body,{new:true})
      if(!updatedBook){
          return res.status(404).send({
              message:"Book not found"
          })
      }
      res.status(200).json({
          message:"Book updated successfully",
          book:updatedBook
      })

    } catch (error) {
        console.log('Error updating book',error)
        res.status(500).send({
            message:"Error updating book",
            error
        })
        
    }
}

export const deleteBook=async(req,res)=>{
    try {
        const {id}=req.params
        const deletedBook= await Book.findByIdAndDelete(id)
        if(!deletedBook){
            return res.status(404).send({
                message:"Book not found"
            })
        }
        res.status(200).json({
            message:"Book deleted successfully",
            book:deletedBook
        })
        
    } catch (error) {
        
        console.log('Error deleting book',error)
        res.status(500).send({
            message:"Error deleting book",
            error
        })
    }
}