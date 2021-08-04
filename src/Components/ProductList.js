import React from 'react'
import ProductCard from './ProductCard'

function ProductList( { products, addToCart, removeFromCart, cart}) {

    const productStyle ={
        marginTop: '20px',
    }

    return (
        <div className="ui three column grid" style={productStyle}>
            {products.map(product => {return (<ProductCard product={product} key={product.id} addToCart={addToCart} removeFromCart={removeFromCart} cart={cart}/>) })}
        </div>
    )
}

export default ProductList
