import React from 'react'
import SellerList from './SellerList'

function About( { sellers, setSellerFilter, products }) {
  
    return (
        <div className="ui center aligned container">
            <br></br>
            <h2>About</h2>
            <p>DunderList is an online marketplace where employees of Dunder Mifflin (Scranton branch) can buy and sell items.</p>
            <br></br>
            <h2>Meet the Sellers</h2>
            <br></br>
            <SellerList sellers={sellers} setSellerFilter={setSellerFilter} products={products}/>
        </div>
    )
}

export default About