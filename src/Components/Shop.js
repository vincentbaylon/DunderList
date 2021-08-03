import React from 'react'
import Filters from './Filters'
import ProductList from './ProductList'
import Search from './Search'

function Shop({ products}) { 

    return (
        <div className="shopContainer">
            <Filters />
            <div>
                <Search />
                <ProductList products={products}/>
            </div>
        </div>
    )
}

export default Shop