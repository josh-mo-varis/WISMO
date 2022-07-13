import React, { useState } from 'react'
import Shipped from './Shipped'
import ReadyToFulfill from './ReadyToFulfill'
import Axios from 'axios'
import { v4 as uuid } from 'uuid'


export default function OrderDetails() {
  const [products, setProducts] = useState([{ id:uuid(), name:'Some brand of work laptop', quantityRequested:2, quantityAvailable:1, price:1559.20, shipped:true}])
  // const shipped;
  // const notshipped;

  // const getProducts = () => {
  //   Axios.get("...").then((response)=> {
  //       //take list of products and seperate into 2 lists based upon if product shipped or not
  //        console.log(response);
  //   });
  // };

  return (
    <div class='orderdetails card'>
        <div class='title'>Order Details</div>
        <div class='body'>
          <div class='shipped'>Shipped</div>
          <Shipped products={products} />
          <div class='readytofulfill'>Ready to Fulfill</div>
          <ReadyToFulfill products={products} />
        </div>
    </div>
  )
}
