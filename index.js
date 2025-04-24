import dotenv from 'dotenv';
dotenv.config();
import express from 'express'
import mongoose, { mongo } from 'mongoose'
import cors from 'cors'
import bookRoutes from './src/books/book.route.js'

const app = express()


const PORT = process.env.PORT || 5000


//middleware
app.use(express.json())
app.use(cors({
    // origin:['http://localhost:5173',"*"],
    credentials:true
}))

//routes
app.use('/api/books',bookRoutes)
app.get('/',(req,res)=>{
    res.send('Hello World')
})
async function main() {
    // await mongoose.connect('mongodb+srv://akashes5753279:<db_password>@cluster0.4sjv8kn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    await mongoose.connect(process.env.DB_URL)
  
  }
  main().then(()=>{
    console.log('Mongodb connected successfully')
  }).catch(err=>{
    console.log(err)
  })
app.listen(PORT,()=>{
    console.log( `app started and listening in the port ${PORT}`)
}) 