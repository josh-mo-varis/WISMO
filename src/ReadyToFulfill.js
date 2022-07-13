import React from 'react'
import Product from './Product.js'

export default function ReadyToFulfill({ products }) {
    return (
        products.map(product => {
            return <Product key={product} product={product} />
        })
    )
}
