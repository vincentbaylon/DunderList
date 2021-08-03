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

    // function cartToggle(){
    //     const updatedProduct = {
    //             ...product,
    //             inCart: !inCart
    //     }

    //     fetch(`http://localhost:3000/products/${id}`, {
    //         method : 'PATCH',
    //         headers: {
    //             'content-type': 'application/json'}, 
    //         body: JSON.stringify(updatedProduct)
    //     }).then (res => res.json())
    //     .then(updatedProd => console.log(updatedProd))
    // }

    
    return (
        <div className="ui card" style={tempCardStyle}>
            <img src={image} style={imgStyle}/>
            <h3>{title}</h3>
            <h5>{seller}</h5>
            <h5>${price}</h5>
            <button>{inCart? "Remove from Cart" : "Add to Cart"}</button>
        </div>
    )
}

export default ProductCard
