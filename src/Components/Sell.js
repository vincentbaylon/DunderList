import React from 'react'

function Sell() {
    return (
        <div>
            <form>
                <input type="text" name="name" placeholder="Product Name" />
                <input type="text" name="imageUrl" placeholder="Image Url" />
                <input type="number" step="0.01" name="price" placeholder="Price" />
                <select name="category" id="category" aria-label="Category">
                    <option value="foodDrink">Food N Drink</option>
                    <option value="home">Home</option>
                    <option value="apparel">Apparel</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="misc">Miscellaneous</option>
                </select>
                <select name="sellers" id="sellers" aria-label="Sellers">
                    <option value="jim">Jim Halpert</option>
                    <option value="pam">Pam Beasley</option>
                    <option value="dwight">Dwight Schrute</option>
                    <option value="michael">Michael Scott</option>
                    <option value="jan">Jan Levinson</option>
                </select>

                <input type="submit" value="Submit" />
            </form>
            
        </div>
    )
}

export default Sell