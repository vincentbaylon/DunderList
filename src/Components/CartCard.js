function CartCard({ product, removeFromCart }) {
    const { title, price, image, id } = product

    function handleClick() {
        removeFromCart(id)
    }

    return (
        <div>
            <img style={{ width: "100px" }} src={image} />
            <h5>{title}</h5>
            <h5>{price}</h5>
            <button onClick={handleClick}>Remove</button>
        </div>
    )
}

export default CartCard