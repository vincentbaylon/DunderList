import React from 'react'
import { useState } from 'react'
import CartCard from './CartCard'
import states from '../Data/states'

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

const SalesTax = require("sales-tax")

function Cart({ cart, products, removeFromCart, setCart, currentUser }) {
    SalesTax.setTaxOriginCountry("US")

    const [taxFilter, setTaxFilter] = useState('')
    const [tax, setTax] = useState(0)

    const filterProduct = products.filter((eachProduct) => {
        return cart.includes(eachProduct.id)
    })
    
    const displayProduct = filterProduct.map((eachFiltered) => {
        return <CartCard key={eachFiltered.id} product={eachFiltered} removeFromCart={removeFromCart} />
    })

    const totalCost = Number.parseFloat(filterProduct.reduce((accum, product)=> {
        return product.price + accum}, 0)).toFixed(2)

    const taxTotal = Number.parseFloat(tax * totalCost).toFixed(2)
    const totalWithTax = +totalCost + +taxTotal
    
    function handleClick() {
        if (currentUser !== null) {
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
        } else {
            alert("Login to complete your purchase.")
        }
    }

    const stateCodes = states.map((eachState) => {
        return (
            <option value={eachState} key={eachState}>{eachState}</option> 
        )
    })

    function handleChange(e) {
        setTaxFilter(e.target.value)

        SalesTax.getSalesTax("US", `${e.target.value}`)
        .then(tax => setTax(tax.rate))
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
                <select 
                    name="tax-filter" 
                    id="tax-filter" 
                    aria-label="tax filter" 
                    className="ui compact selection dropdown"
                    onChange={handleChange}
                    value={taxFilter}
                >
                    <option value="all">State</option>
                    {stateCodes}
                </select>

                <h4>Tax:&nbsp;&nbsp;&nbsp;&nbsp; ${taxTotal}</h4>
                <h3>Total:&nbsp;&nbsp;&nbsp;&nbsp; ${totalWithTax}</h3>
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