import { withWidth } from '@material-ui/core'
import React from 'react'

function ProductCard( { product }) {

    const { id, title, image, seller, price, category, comments, inCart } = product

//temporary CSS
    const imgStyle = {
        maxWidth: "200px"
    }

    const tempCardStyle = {
        backgroundColor: '#DCE1E9',
        margin: '5px',
        width: '300px',
        textAlign: 'center',
        padding: '5px',
        float: 'left',
    }
    
    return (
        <div className="ui card" style={tempCardStyle}>
            <img src={image} style={imgStyle}/>
            <h3>{title}</h3>
            <h5>{seller}</h5>
            <h5>${price}</h5>
            <button>Add to Cart</button>
        </div>
    )
}

export default ProductCard
