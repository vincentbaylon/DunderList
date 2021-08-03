function Sort({ setSort }) {
    function onChange(e) {
        setSort(e.target.value)
        console.log(e.target.value)
    }

    return (
        <select 
            name="sort" 
            id="sort" 
            aria-label="sort" 
            onChange={onChange}
        >
            <option value="relevant">Relevant</option>
            <option value="priceHighLow">Price High to Low</option>
            <option value="priceLowHigh">Price Low to High</option>
        </select>
    )
}

export default Sort