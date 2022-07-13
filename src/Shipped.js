import React from 'react'
import Product from './Product.js'

export default function Shipped({ products }) {
  return (
    products.map(product => {
        return <Product key={product.id} product={product} />
    })
  )
}
