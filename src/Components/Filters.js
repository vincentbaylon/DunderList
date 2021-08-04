import React, { useState } from 'react'

function Filters({ setFilter, filter, sideBarElementStyle }) {
    const [category, setCategory] = useState('')
    const categories = [
        "Food",
        "Home",
        "Apparel",
        "Entertainment",
        "Miscellaneous"
    ]

    const checkboxStyle ={
        marginTop: '10px',
        marginBottom: '10px'
    }

    const displayCategories = categories.map((eachCategory) => {
        return (
            <div style={checkboxStyle}>
            <label key={eachCategory}>
            <input 
                type='checkbox'
                name={eachCategory} 
                onChange={handleChange}            
            />
            {eachCategory}
        </label>
        </div>
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
        <div  style={sideBarElementStyle} className="ui checkbox"  >
            <h4>Filter:</h4>
            {displayCategories}
        </div>
    )
}

export default Filters
