function CartCard({ product, removeFromCart }) {
    const { title, price, image, id } = product

    function handleClick() {
        removeFromCart(id)
    }

    const cardStyle = {
       width: '40%',
       padding: '10px'
    }
    const imgDiv = {
        width: '20%',
        float: 'left'
    }

    const imgStyle ={
        overflow: 'hidden',
        objectFit: 'cover',
        height: '80px',
        width: '80px',
    }
    const cardText = {
       float: 'left',
       width: '60%',
       paddingTop: '7%',
       textAlign: 'left',
       paddingLeft: '5px'
    }

    const buttonCol = {
        paddingTop: '5%'
    }

    const buttonStyle = {
        width: '10%'
    }

    return (
        <div className="row">
            <div style={cardStyle} className="ui raised segment">
                <div className="column" style={imgDiv}>
                    <img src={image} className="ui tiny image" style={imgStyle}/>
                </div>
                <div className="column" style={cardText}>
                    <h5>{title} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ${price}</h5>
                </div>
                <div className="column" style={buttonCol}>
                    <button className="ui tiny button"onClick={handleClick} style={buttonStyle}><i class="close icon"></i></button>
                </div>
            </div>
        </div>
    )
}

export default CartCard


