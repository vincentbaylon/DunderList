import React, { useState } from 'react'

function Sell({ addProduct, sellerNames }) {
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

    const sellerList = sellerNames.map((seller) => {
        return (
            <option value={seller} key={seller}>{seller}</option> 
        )
    })


    return (
        <div className="ui center aligned container">

            <br></br>
            <h2>Add Your Product</h2>
            <br></br>
            <form onSubmit={handleSubmit} className="ui form">
                <div className="seven wide field">
                <input 
                    onChange={onChange}
                    value={formData.title} 
                    type="text" 
                    name="title" 
                    placeholder="Product Name" 
                />
                </div>
                <div className="seven wide field">
                <input 
                    onChange={onChange}
                    value={formData.image} 
                    type="text" 
                    name="image" 
                    placeholder="Image Url" 
                />
                </div>
                <div className=" seven wide field">
                <input 
                    onChange={onChange}
                    value={formData.price} 
                    type="number" 
                    step="0.01" 
                    name="price" 
                    placeholder="Price" 
                />
                </div>
                <div className="fields">
                <div className="field three wide">
                <select 
                    name="category" 
                    id="category" 
                    aria-label="Category" 
                    value={formData.category} 
                    onChange={onChange}
                >
                    <option value="default">Select a Category</option>
                    <option value="Food">Food</option>
                    <option value="Home">Home</option>
                    <option value="Apparel">Apparel</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Miscellaneous">Miscellaneous</option>
                </select>
                </div>
                <div className="three wide field">
                <select 
                    name="seller" 
                    id="seller" 
                    aria-label="Sellers" 
                    value={formData.seller} 
                    onChange={onChange}
                >
                    <option value="default">Select a Seller</option>
                    {sellerList}
                </select>
                </div>
                </div>
                <input className="ui button" type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Sell
