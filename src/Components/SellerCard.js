import React from 'react'
import { useHistory } from 'react-router-dom'

function SellerCard( {seller, setSellerFilter, products} ) {

    const history = useHistory()

    const tempCardStyle = {
        margin: '5px',
        textAlign: 'center',
        padding: '5px',
        float: 'left',
        overflow: 'hidden',
        boxShadow: '0 1px 3px 0 #F4F7F5, 0 0 0 1px #F4F7F5',
    }

    const tempImgStyle = {
        overflow: 'hidden',
        objectFit: 'cover',
        height: '140px',
        width: '140px',
        borderRadius: '50%',
        objectPosition: '-10% 0'
    }

    const buttonStyle = {
        boxShadow: 'none',
        textDecoration: 'underline',
    }

    const hasProducts = products.find(product => product.seller === seller.name)


    function handleClick(){
        setSellerFilter(seller.name)
        history.push('/')
    }

    return (
        <div className="ui card" style={tempCardStyle}> 
            <div>
                <img src={seller.image.medium} className="ui small centered image" alt={seller.name} style={tempImgStyle}/>
            </div>
            <h3 className="ui header">{seller.name}</h3>
            {hasProducts ? 
                <button className="ui basic button" onClick={handleClick} style={buttonStyle}>See {seller.name.split(' ', 1)}'s products</button>
                :
                <p className="ui meta">{seller.name.split(' ', 1)} doesn't have any products for sale</p>
            }
        </div>
    )
}

export default SellerCard



