import React from 'react'
import Filters from './Filters'
import ProductList from './ProductList'
import Search from './Search'

function Shop({ products, search, setSearch}) { 

    return (
        <div className="shopContainer">
            <Filters />
            <div>
                <Search seach={search} setSearch={setSearch}/>
                <ProductList products={products}/>
            </div>
        </div>
    )
}

export default Shop