
export default function Details({product}) {

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 m-auto ">
            <div className="product py-5 rounded-4 text-start ">
              <h2 className='mb-5 ps-5'>Product {product.id}</h2>
              <ul className='ps-5'>
                <li>Name: <span> {product.name}</span></li>
                <li>Price: <span> {product.price}</span></li>
                <li>Quantity:<span> {product.quantity_counter}</span></li>
                <li>Total Price:<span> {product.total_price}</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
//Get Products Paths
export async function getStaticPaths() {
  const response = await fetch(`http://localhost:3000/api/products`);
  const data = await response.json();
  const paths = data.map(p => {
    return{
      params: {id: `${p.id}`}
    }
  })
  return {
    paths: paths,
    fallback:false
  }
}
// Get Product By Id 
export async function getStaticProps(context) {
  const response = await fetch(`http://localhost:3000/api/products/${context.params.id}`);
  const data = await response.json();
  return {
    props:{
      product:data
    }
  }
}
