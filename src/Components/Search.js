import React from 'react'

function Search({ search, setSearch, sideBarElementStyle }) {

    return (
        <div className="ui icon input" style={sideBarElementStyle} id="searchDiv">
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
