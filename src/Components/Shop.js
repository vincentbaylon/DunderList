import React from 'react'
import Filters from './Filters'
import ProductList from './ProductList'
import Search from './Search'
import Sort from './Sort'
import SellerFilter from './SellerFilter'


function Shop({ products, search, setSearch, setFilter, addToCart, removeFromCart, setSort, filter, cart, sellerNames, setSellerFilter, sellerFilter}) { 

    const sideBarStyle ={
        float: 'left',
        height: '100%',
        width: '15%',
        padding: '20px',
        marginTop: '20px',
        minWidth: '225px'
        //display: 'block',

    }

    const sideBarElementStyle = {
        marginTop: '20px',
        marginBottom: '10px'
    }


    return (
        <div className="ui ">
                <div className="column" style={sideBarStyle}>
                    <Search seach={search} setSearch={setSearch} sideBarElementStyle={sideBarElementStyle}/>
                    <Sort setSort={setSort} sideBarElementStyle={sideBarElementStyle}/>
                    <Filters filter={filter} setFilter={setFilter}  sideBarElementStyle={sideBarElementStyle}/>
                    <SellerFilter sellerNames={sellerNames} sideBarElementStyle={sideBarElementStyle} setSellerFilter={setSellerFilter} sellerFilter={sellerFilter}/> 
                </div>
                <ProductList products={products} addToCart={addToCart} removeFromCart={removeFromCart} cart={cart}/>
        </div>
    )
}

export default Shop