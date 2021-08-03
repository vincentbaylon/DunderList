import React from 'react'
import Filters from './Filters'
import ProductList from './ProductList'
import Search from './Search'

function Shop({ products, search, setSearch, setFilter, addToCart, removeFromCart }) { 

    return (
        <div className="shopContainer">
            <Filters setFilter={setFilter} />
            <div>
                <Search seach={search} setSearch={setSearch}/>
                <ProductList products={products} addToCart={addToCart} removeFromCart={removeFromCart}/>
            </div>
        </div>
    )
}

export default Shop