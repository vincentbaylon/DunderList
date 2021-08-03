import React, { useState } from 'react'

function Sell() {
    const [formData, setFormData] = useState({
        name: "",
        imageUrl: "",
        price: "",
        category: "default",
        seller: "default"
    })

    function onChange(e) {
        let name = e.target.name
        let value = e.target.value
        setFormData({...formData, [name]: value})
    }

    function handleSubmit(e) {
        e.preventDefault()

        fetch('htpp://localhost:3000/products', {
            method: 'POST',
            heaaders: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(newProduct => console.log(newProduct))

        setFormData({
            name: "",
            imageUrl: "",
            price: "",
            category: "default",
            seller: "default"
        })
    }

    return (
        <div>
            <h2>Add your product</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    onChange={onChange}
                    value={formData.name} 
                    type="text" 
                    name="name" 
                    placeholder="Product Name" 
                />
                <input 
                    onChange={onChange}
                    value={formData.imageUrl} 
                    type="text" 
                    name="imageUrl" 
                    placeholder="Image Url" 
                />
                <input 
                    onChange={onChange}
                    value={formData.price} 
                    type="number" 
                    step="0.01" 
                    name="price" 
                    placeholder="Price" 
                />
                <select 
                    name="category" 
                    id="category" 
                    aria-label="Category" 
                    value={formData.category} 
                    onChange={onChange}
                >
                    <option value="default">Select a category</option>
                    <option value="foodDrink">Food {"&"} Drink</option>
                    <option value="home">Home</option>
                    <option value="apparel">Apparel</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="misc">Miscellaneous</option>
                </select>
                <select 
                    name="seller" 
                    id="seller" 
                    aria-label="Sellers" 
                    value={formData.seller} 
                    onChange={onChange}
                >
                    <option value="default">Select a seller</option>
                    <option value="jim">Jim Halpert</option>
                    <option value="pam">Pam Beesley</option>
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