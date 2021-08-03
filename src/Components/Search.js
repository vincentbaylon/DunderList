import React from 'react'

function Search({ search, setSearch }) {

    return (
        <div className="ui icon input">
            <input 
                type="text" 
                placeholder="Search..." 
                value={search} 
                onChange={(e) => setSearch(e.target.value)}/>
            <i aria-hidden="true" className="search icon"></i>
        </div>
    )
}

export default Search
