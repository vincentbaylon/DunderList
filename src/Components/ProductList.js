import React from 'react'
import ProductCard from './ProductCard'

function ProductList( { products, addToCart, removeFromCart, cart, addLikes, likes, removeLikes }) {

    const productStyle ={
        marginTop: '20px',
    }

    return (
        <div className="ui three column grid" style={productStyle}>
            {products.map(product => {return (<ProductCard product={product} key={product.id} addToCart={addToCart} removeFromCart={removeFromCart} cart={cart} addLikes={addLikes} removeLikes={removeLikes} userLiked={(likes.includes(product.id)) ? true : false} />) })}
        </div>
    )
}

export default ProductList
