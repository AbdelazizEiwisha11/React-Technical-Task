import { useRouter } from 'next/router'
import React from 'react'

export default function Details() {
  // Use Router
  const router = useRouter();
  // Get Product Details From Products Page
  const query = router.query;
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 m-auto ">
            <div className="product py-5 rounded-4 text-start ">
              <h2 className='mb-5 ps-5'>Product {query.head_name}</h2>
              <ul className='ps-5'>
                <li>Name: <span> {query.name}</span></li>
                <li>Price: <span> {query.price}</span></li>
                <li>Quantity:<span> {query.quantity_counter}</span></li>
                <li>Total Price:<span> {query.total_price}</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
