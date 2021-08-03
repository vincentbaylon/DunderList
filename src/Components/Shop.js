import React from 'react'
import Filters from './Filters'
import ProductList from './ProductList'
import Search from './Search'
import Sort from './Sort'

function Shop({ products, search, setSearch, setFilter, addToCart, removeFromCart, setSort }) { 

    return (
        <div className="shopContainer">
            <div>
                <Sort setSort={setSort} />
                <Filters setFilter={setFilter} />
                <Search seach={search} setSearch={setSearch}/>
                <ProductList products={products} addToCart={addToCart} removeFromCart={removeFromCart}/>
            </div>
        </div>
    )
}

export default Shop