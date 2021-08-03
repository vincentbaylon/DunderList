import React from 'react'
import SellerCard from './SellerCard'

function SellerList({ sellers }) {

    const renderSellers = sellers.map(seller => {
        if (seller.image !== null)
        return (<SellerCard seller={seller} key={seller.id}/>)
    })

    return (
        <div className="ui relaxed centered three column grid">
            {renderSellers}
        </div>
    )
}

export default SellerList
