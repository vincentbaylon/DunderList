import React from 'react'
import { useState } from 'react'
import CartCard from './CartCard'

function Cart({ cart, products, removeFromCart }) {

    const filterProduct = products.filter((eachProduct) => {
        return cart.includes(eachProduct.id)
    })
    
    const displayProduct = filterProduct.map((eachFiltered) => {
        return <CartCard key={eachFiltered.id} product={eachFiltered} removeFromCart={removeFromCart} />
    })

    const totalCost = Number.parseFloat(filterProduct.reduce((accum, product)=> {
        return product.price + accum}, 0)).toFixed(2)

    return (
        <div className="ui center aligned container">
            <br></br>
            <h2>Your Cart</h2>
            <br></br>
            <div className="ui one column center aligned grid">
                {displayProduct}
            </div>
            <br></br>
            <div className="ui basic segment">
                <h3>Total:&nbsp;&nbsp;&nbsp;&nbsp; ${totalCost}</h3>
            </div>
          
        </div>
    )
}

export default Cart