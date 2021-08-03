import React, { useState } from 'react'

function Filters({ setFilter, filter }) {
    const [category, setCategory] = useState('')
    const categories = [
        "Food",
        "Home",
        "Apparel",
        "Entertainment",
        "Miscellaneous"
    ]

    const displayCategories = categories.map((eachCategory) => {
        return (
            <label key={eachCategory}>
            <input 
                type='checkbox'
                name={eachCategory} 
                onChange={handleChange}
            />
            {eachCategory}
        </label>
        )
    })

    function handleChange(e) {
        if (e.target.checked) {
            setFilter([...filter, e.target.name])
        } else {
            const newFilter = filter.filter((eachFilter) => eachFilter !== e.target.name)
            setFilter(newFilter)
        }
    }

    return (
        <div className="filterContainer">
            {displayCategories}
        </div>
    )
}

export default Filters
