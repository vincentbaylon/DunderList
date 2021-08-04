import React from 'react'
import ProductCard from './ProductCard'

function ProductList( { products, addToCart, removeFromCart}) {

    const productStyle ={
        marginTop: '20px',
    }

    return (
        <div className="ui relaxed  three column grid" style={productStyle}>
            {products.map(product => {return (<ProductCard product={product} key={product.id} addToCart={addToCart} removeFromCart={removeFromCart}/>) })}
        </div>
    )
}

export default ProductList
