import React, { useState } from 'react'

function Filters({ setFilter }) {
    const [category, setCategory] = useState('')
    const [checked, setChecked] = useState(false)
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
        if (!checked) {
            setFilter(e.target.name)
            setChecked(checked => !checked)
        } else {
            setFilter('')
            setChecked(checked => !checked)
        }
    }

    return (
        <div className="filterContainer">
            {displayCategories}
        </div>
    )
}

export default Filters
