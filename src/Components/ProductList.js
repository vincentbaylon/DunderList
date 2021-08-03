import React from 'react'
import ProductCard from './ProductCard'

function ProductList( { products, addToCart, removeFromCart}) {

    return (
        <div className="ui relaxed three column grid">
            <ul>
            {products.map(product => {return (<ProductCard product={product} key={product.id} addToCart={addToCart} removeFromCart={removeFromCart}/>) })}
            </ul>
        </div>
    )
}

export default ProductList
