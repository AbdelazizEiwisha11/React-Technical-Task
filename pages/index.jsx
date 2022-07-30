import Link from 'next/link';

export default function Products() {
  //ProductOne details
  const prouduct_One = {
    head_name: 'One',
    name: 'Samsung',
    price: 5000,
    quantity_counter: 10,
    total_price: 6000
  };

  //ProductTne details
  const prouduct_Two = {
    head_name: 'Two',
    name: 'Lg',
    price: 7000,
    quantity_counter: 8,
    total_price: 10000
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center" >
          {/*Product One*/}
          <div className="col-md-4">
            <div className="productOne product py-5 rounded-4">
              <h2 className='mb-5'>Product One</h2>
              <Link href={{
                pathname: '/products/details',
                query: prouduct_One
              }}>
                Add To Cart
              </Link>
            </div>
          </div>
          {/*Product Two*/}
          <div className="col-md-4">
            <div className="productOne product py-5 rounded-4">
              <h2 className='mb-5'>Product Two</h2>
              <Link href={{
                pathname: '/products/details',
                query: prouduct_Two
              }}>
                Add To Chart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
