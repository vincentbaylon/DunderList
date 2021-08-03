import React from 'react'
import { useEffect, useState } from 'react'
import SellerList from './SellerList'

function About() {
    const [sellers, setSellers] = useState([])

    //should move this up into App so it only fires once
    useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/526/cast`)
        .then(res => res.json())
        .then(data => {
            setSellers(data.map(item => item.character))
        })
    }, [])


    return (
        <div className="ui center aligned container">
            <h2>Meet the Sellers</h2>
            <br></br>
            <SellerList sellers={sellers}/>
        </div>
    )
}

export default About