import React from 'react'
import { useState } from 'react'
import CartCard from './CartCard'

const paypalStyle = {
    width: "23px"
}

const googleStyle = {
    width: "28px"
}

const appleStyle = {
    width: "30px"
}

const hrStyle = {
    width: "50%"
}

function Cart({ cart, products, removeFromCart, setCart, currentUser }) {
    const SalesTax = require("sales-tax")
    SalesTax.setTaxOriginCountry("US")

    const filterProduct = products.filter((eachProduct) => {
        return cart.includes(eachProduct.id)
    })
    
    const displayProduct = filterProduct.map((eachFiltered) => {
        return <CartCard key={eachFiltered.id} product={eachFiltered} removeFromCart={removeFromCart} />
    })

    const totalCost = Number.parseFloat(filterProduct.reduce((accum, product)=> {
        return product.price + accum}, 0)).toFixed(2)

    function handleClick() {
        if (cart.length > 0) {
            alert("Thank you for your purchase!")

            products.forEach((eachProduct) => {
                if (cart.includes(eachProduct.id)) {
                    eachProduct.inStock = false

                    fetch(`http://localhost:3000/products/${eachProduct.id}`, {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            'inStock': false
                        })
                    })
                    .then(res => res.json())
                    .then(() => {
                        setCart([])
                        fetch(`http://localhost:3000/users/${currentUser.user.id}`, {
                            method: 'PATCH',
                            headers: {
                              'Content-Type': 'application/json',
                              'Authorization': `Bearer ${currentUser.accessToken}`
                            },
                            body: JSON.stringify({
                              "cart": []
                            })
                          })
                          .then(res => res.json())
                          .then(data => data)
                    })
                }
            })
        }
    }

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
                {console.log(SalesTax.getSalesTax("US", "CA"))}
                <h3>Total:&nbsp;&nbsp;&nbsp;&nbsp; ${totalCost}</h3>
            </div>
            <hr style={hrStyle}></hr>
            <h5>Express Checkout</h5>
            <br></br>
            <div className="ui one row center aligned grid">
                <button className="ui basic button"><img src="./paypal.png" onClick={handleClick} style={paypalStyle}/></button>
                <button className="ui basic button"><img src="./google.png" onClick={handleClick} style={googleStyle}/></button>
                <button className="ui basic button"><img src="./apple.png" onClick={handleClick} style={appleStyle}/></button>
            </div>
          
        </div>
    )
}

export default Cart