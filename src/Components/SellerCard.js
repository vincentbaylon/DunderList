import React from 'react'

function SellerCard( {seller} ) {

    const tempCardStyle = {
        margin: '5px',
        textAlign: 'center',
        padding: '5px',
        float: 'left',
        overflow: 'hidden',
    }

    const tempImgStyle = {
        overflow: 'hidden',
        objectFit: 'cover',
        height: '140px',
        width: '140px',
        borderRadius: '50%',
        objectPosition: '-10% 0'
    }

    return (
        <div className="ui card" style={tempCardStyle}> 
            <div>
                <img src={seller.image.medium} className="ui small centered image" alt={seller.name} style={tempImgStyle}/>
            </div>
            <h3 className="ui header">{seller.name}</h3>
            <p className="ui meta">See {seller.name.split(' ', 1)}'s products here</p>
        </div>
    )
}

export default SellerCard



