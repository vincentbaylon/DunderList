import React from 'react'

function Filters({ setFilter, filter, sideBarElementStyle }) {
    const categories = [
        "Food",
        "Home",
        "Apparel",
        "Entertainment",
        "Miscellaneous"
    ]

    const checkboxStyle ={
        marginTop: '10px',
        marginBottom: '10px',
        marginRight: '90px',
    }

    const displayCategories = categories.map((eachCategory) => {
        return (
            <div style={checkboxStyle} className="ui checkbox" id="catFilter">
            <input 
                type='checkbox'
                name={eachCategory} 
                onChange={handleChange}    
            />
            <label key={eachCategory}>
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
        <div style={sideBarElementStyle} className="ui vertical">
            <h4>Filter:</h4>
            <p className="ui meta">By Cateogry</p>
            {displayCategories}
        </div>
    )
}

export default Filters
