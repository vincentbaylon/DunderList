import React from 'react'
import SellerList from './SellerList'

function About( { sellers }) {
  
    return (
        <div className="ui center aligned container">
            <br></br>
            <h2>Meet the Sellers</h2>
            <br></br>
            <SellerList sellers={sellers}/>
        </div>
    )
}

export default About