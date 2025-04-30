
import express from 'express';
import Order from './order.model.js';
import { createOrder, getOrdersByEmail } from './order.controller.js';
const router  = express.Router();

router.post('/',createOrder)

//get orders by user email
router.get('/email/:email',getOrdersByEmail)

export default router



