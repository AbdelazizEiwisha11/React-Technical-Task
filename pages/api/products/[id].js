import {products} from '../../../product-api'
export default function handler(req,res){
  let id = req.query.id;
  let product = products.find((pro)=>pro.id == id)
  if(product){
    res.status(200).json(product)
  }
  else{
    res.status(400).json({error: 'There is No Product'})
  }
  
}