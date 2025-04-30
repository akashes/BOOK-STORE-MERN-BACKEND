import Order from "./order.model.js";

export const createOrder = async (req, res) => {
  try {
    console.log(req.body)
    const newOrder = Order(req.body);
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (error) {
    console.log(error);

    res
      .status(500)
      .json({ message: "Failed to create order", error: error.message });
  }
};


export const getOrdersByEmail=async(req,res)=>{
    console.log('inside get orders by email')
    try {
        const {email}=req.params
        const orders =await Order.find({email}).sort({createdAt:-1})
        if(!orders){
          return  res.status(404).json({
                message:'Order not found'
            })
        }
        res.status(200).json(orders)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:'Failed to get orders',error:error.message})
    }
}