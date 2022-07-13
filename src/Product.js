import React from 'react'
import './Product.css';

export default function Product({ product }) {
  return (

    <div class='product'>
        <div class='name'>{product.name}</div>
        <div class='quantity'>Quantity requested: {product.quantityRequested}<br />Quantity available: {product.quantityAvailable}</div>
        <div class='price'>Price: ${product.price}</div>
    </div>
  )
}
