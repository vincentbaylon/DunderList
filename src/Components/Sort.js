function Sort({ setSort, sideBarElementStyle }) {
    function onChange(e) {
        setSort(e.target.value)
    }

    return (
        <div style={sideBarElementStyle} id="sortDiv">
        <h4>Sort:</h4>
        <select 
            name="sort" 
            id="sort" 
            aria-label="sort" 
            onChange={onChange}
            className="ui selection dropdown"
        >
            <option value="relevant">Relevant</option>
            <option value="priceHighLow">Price High to Low</option>
            <option value="priceLowHigh">Price Low to High</option>
        </select>
        </div>
    )
}

export default Sort