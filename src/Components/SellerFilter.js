import React from 'react'

function SellerFilter({ sellerNames, sideBarElementStyle, setSellerFilter, sellerFilter }) {


    const sellerOptions = sellerNames.map((seller) => {
        return (
            <option value={seller} key={seller}>{seller}</option> 
        )
    })

    function handleChange(e){
        setSellerFilter(e.target.value)
    }


    return (
        <div style={sideBarElementStyle} id="sellerFilterDiv">
        <p className="ui meta">By Seller</p>
        <select 
        name="seller-filter" 
        id="seller-filter" 
        aria-label="seller filter" 
        className="ui selection dropdown"
        onChange={handleChange}
        value={sellerFilter}
        >
             <option value="all">All</option>
             {sellerOptions}
        </select>
        </div>
    )
}
export default SellerFilter