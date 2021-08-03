import React from 'react'
import Filters from './Filters'
import ProductList from './ProductList'
import Search from './Search'

function Shop({ products, setFilter }) { 

    return (
        <div className="shopContainer">
            <Filters setFilter={setFilter} />
            <div>
                <Search />
                <ProductList products={products}/>
            </div>
        </div>
    )
}

export default Shop