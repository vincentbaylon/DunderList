import React from 'react'
import ProductCard from './ProductCard'

function ProductList( { products }) {

    return (
        <div className="productListContainer">
            <ul>
            {products.map(product => {return (<ProductCard product={product} key={product.id} />) })}
            </ul>
        </div>
    )
}

export default ProductList
