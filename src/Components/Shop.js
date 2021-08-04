import React from 'react'
import Filters from './Filters'
import ProductList from './ProductList'
import Search from './Search'
import Sort from './Sort'

function Shop({ products, search, setSearch, setFilter, addToCart, removeFromCart, setSort, filter, cart}) { 

    const sideBarStyle ={
        float: 'left',
        height: '100%',
        width: '15%',
        padding: '20px',
        marginTop: '20px',
        display: 'block',
       // backgroundColor: 'gray',
    }

    const sideBarElementStyle = {
        marginTop: '20px',
        marginBottom: '20px'
    }


    return (
        <div className="row">
                <div className="ui " style={sideBarStyle}>
                    <Sort setSort={setSort} sideBarElementStyle={sideBarElementStyle}/>
                    <Filters filter={filter} setFilter={setFilter}  sideBarElementStyle={sideBarElementStyle}/>
                    <Search seach={search} setSearch={setSearch} sideBarElementStyle={sideBarElementStyle}/>
                </div>
                <ProductList products={products} addToCart={addToCart} removeFromCart={removeFromCart} cart={cart}/>
        </div>
    )
}

export default Shop