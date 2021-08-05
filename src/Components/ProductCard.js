import React from 'react'
import { useState } from 'react'

function ProductCard( { product, addToCart, removeFromCart, cart, addLikes, userLiked, removeLikes }) {

    const { id, title, image, seller, price, category, comments, inCart, inStock } = product
    const [isInCart, setIsInCart] = useState(false)
    const [isLiked, setIsLiked] = useState(userLiked)

//temporary CSS
    const tempCardStyle = {
        margin: '5px',
        textAlign: 'center',
        padding: '5px',
        boxShadow: '0 1px 3px 0 #F4F7F5, 0 0 0 1px #F4F7F5',
    }

    const imgStyle = {
        overflow: 'hidden',
        objectFit: 'cover',
        height: '140px',
        width: '140px',
    }

    function handleCartToggle(){
        (cart.includes(id))? removeFromCart(id) : addToCart(id)
        setIsInCart(!isInCart)
    }

    function handleLike(){
        if (isLiked) {
            removeLikes(id)
            setIsLiked(!isLiked)
        } else {
            addLikes(id)
            setIsLiked(!isLiked)
        }    
    }

    return (
        <div className="ui card" style={tempCardStyle}>
            <i onClick={handleLike} className={isLiked? "heart icon" : " heart outline icon"}></i>
            <img src={image} className="ui small centered image" style={imgStyle}/>
            <br></br>
            <div >
            <h3 className="ui header">{title}</h3>
            <h5 className="ui header">{seller}</h5>
            <h5 className="ui header">${price}</h5> 
            <button disabled={inStock ? '' : "disabled"} className="ui button" onClick={handleCartToggle}>{inStock ? ((cart.includes(id))? "Remove from Cart" : "Add to Cart") : "Out of Stock"}</button>
            </div>
        </div>
    )
}

export default ProductCard
