import dotenv from 'dotenv'
dotenv.config()
import express from 'express';
import jwt from 'jsonwebtoken'
import User from './user.model.js';

const router = express.Router();

const JWT_SECRET=process.env.JWT_SECRET_KEY

router.post('/admin',async(req,res)=>{
    const{username,password}=req.body
    console.log(username,password)

    try {
        const admin = await User.findOne({username})
        if(!admin) return res.status(404).json({message:'Admin not found'})

            if(admin.password !== password){
                return res.status(401).json({message:'Invalid credentials'})
            }
            console.log('passed')

            const token = jwt.sign({id:admin._id,username:admin.username,role:admin.role},
                JWT_SECRET,
                {expiresIn:'1h'}
            )
            res.status(200).json({
                message:'Login successful',
                token:token,
                user:{
                    username:admin.username,
                    role:admin.role
                }
            })


    } catch (error) {
        console.log(error)
        res.status(500).json({message:'Failed to login',error:error.message})
    }
})


export default router