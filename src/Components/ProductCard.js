import React from 'react'
import { useState } from 'react'

function ProductCard( { product, addToCart, removeFromCart }) {

    const { id, title, image, seller, price, category, comments, inCart } = product
    const [isInCart, setIsInCart] = useState(false)
    const [isLiked, setIsLiked] = useState(false)

//temporary CSS
    const tempCardStyle = {
        //backgroundColor: '#DCE1E9',
        margin: '5px',
        //width: '300px',
        textAlign: 'center',
        padding: '5px',
        float: 'left',
    }

    const imgStyle = {
        overflow: 'hidden',
        objectFit: 'cover',
        height: '140px',
        width: '140px',
    }

    function handleCartToggle(){
        isInCart? removeFromCart(id) : addToCart(id)
        setIsInCart(!isInCart)
    }

    function handleLike(){
        setIsLiked(!isLiked)
    }

    return (
        <div className="ui card" style={tempCardStyle}> 
            <i onClick={handleLike} className={isLiked? "heart icon" : " heart outline icon"}></i>
            <img src={image} className="ui small centered image" style={imgStyle}/>
            <div className="content">
            <h3 className="ui header">{title}</h3>
            <h5 className="ui header">{seller}</h5>
            <h5 className="ui header">${price}</h5> 
            <button className="ui button" onClick={handleCartToggle}>{isInCart? "Remove from Cart" : "Add to Cart"}</button>
            </div>
        </div>
    )
}

export default ProductCard
