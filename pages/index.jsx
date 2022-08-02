import Link from 'next/link';

export default function Products({products}) {
  
  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center" >
          {/*Product One*/}
          {products.map(product =>(
            <div className="col-md-4">
            <div className="productOne product py-5 rounded-4">
              <h2 className='mb-5'>Product {product.id}</h2>
              <Link href={`/products/${product.id}`}>
                Add To Cart
              </Link>
            </div>
          </div>
          ))}
        </div>
      </div>
    </>
  )
}
  export async function getStaticProps() {
    const response = await fetch(`http://localhost:3000/api/products`);
    const data = await response.json();
    return {
      props:{
        products:data
      }
    }
  }
  


