import React from 'react'
import Filters from './Filters'
import ProductList from './ProductList'
import Search from './Search'
import Sort from './Sort'

function Shop({ products, search, setSearch, setFilter, setSort }) { 

    return (
        <div className="shopContainer">
            <div>
                <Sort setSort={setSort} />
                <Filters setFilter={setFilter} />
                <Search seach={search} setSearch={setSearch}/>
                <ProductList products={products}/>
            </div>
        </div>
    )
}

export default Shop