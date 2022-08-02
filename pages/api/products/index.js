import {products} from '../../../product-api'
export default function handler(req,res){
  res.status(200).json(products)
}