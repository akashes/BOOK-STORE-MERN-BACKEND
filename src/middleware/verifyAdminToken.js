import dotenv from 'dotenv'
dotenv.config()

import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET_KEY   


const verifyAdminToken = (req, res, next) => {
    console.log('verify admin')
    try {
        console.log(req.headers)
        const token = 
        req.headers['authorization']?.split(' ')[1] || 
        req.headers['Authorization']?.split(' ')[1];
              console.log(token)
        if (!token) {
            console.log('no token')
            return res.status(401).json({ message: 'Unauthorized' })
        }

        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if (err) {
                console.log('error in token')
                return res.status(403).json({ message: 'Invalid token' })
            }
            req.user = decoded

            next()
            
        })
    } catch (error) {
        
    }
}

export default verifyAdminToken