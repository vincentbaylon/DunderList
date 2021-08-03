import React, { useState } from 'react'

function Sell({ addProduct }) {
    const [formData, setFormData] = useState({
        title: "",
        image: "",
        price: "",
        category: "default",
        seller: "default",
        comments: [],
        inCart: false
    })

    function onChange(e) {
        let name = e.target.name
        let value = e.target.value
        setFormData({...formData, [name]: value})
    }

    function handleSubmit(e) {
        e.preventDefault()

        fetch('http://localhost:3000/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(newProduct => addProduct(newProduct))

        setFormData({
            title: "",
            image: "",
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
                    value={formData.title} 
                    type="text" 
                    name="title" 
                    placeholder="Product Name" 
                />
                <input 
                    onChange={onChange}
                    value={formData.image} 
                    type="text" 
                    name="image" 
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
                    <option value="Food">Food {"&"} Drink</option>
                    <option value="Home">Home</option>
                    <option value="Apparel">Apparel</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Miscellaneous">Miscellaneous</option>
                </select>
                <select 
                    name="seller" 
                    id="seller" 
                    aria-label="Sellers" 
                    value={formData.seller} 
                    onChange={onChange}
                >
                    <option value="default">Select a seller</option>
                    <option value="Jim Halpert">Jim Halpert</option>
                    <option value="Pam Beesley">Pam Beesley</option>
                    <option value="Dwight Schrute">Dwight Schrute</option>
                    <option value="Michael Scott">Michael Scott</option>
                    <option value="Jan Levinson">Jan Levinson</option>
                </select>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Sell