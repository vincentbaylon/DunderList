import React from 'react'
import CartCard from './CartCard'

function Cart({ cart, products, removeFromCart }) {
    const filterProduct = products.filter((eachProduct) => {
        return cart.includes(eachProduct.id)
    })
    
    const displayProduct = filterProduct.map((eachFiltered) => {
        return <CartCard key={eachFiltered.id} product={eachFiltered} removeFromCart={removeFromCart} />
    })

    return (
        <div>
            {displayProduct}
        </div>
    )
}

export default Cart