import React from 'react';
import { NavLink } from "react-router-dom";

const headerStyle ={
    backgroundColor: "#0D1F2D",
    width: "100%",
    color: "white", 
    paddingTop: '10px',
    paddingLeft: '10px',
    display: 'flex',
    height: '75px'
}

const logoStyle = {
    flex: '1',
    fontFamily: 'Impact',
    fontSize: '40px',
    letterSpacing: '.1rem',
}

const navStyle = {
    textAlign: "right",
    paddingBottom: "10px",
    paddingRight: "10px",
    margin: "auto"
}

const linkStyles = {
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    color: "white",
    textDecoration: "none"
  }

const selectedLink ={
    fontWeight: "bold"
}

function Header({ cart, loggedIn, setCurrentUser, setLoggedIn, setCart }) {
    function handleClick() {
        setCurrentUser(null)
        setLoggedIn(false)
        setCart([])

    }

    return (
        <header style={headerStyle} className="ui container">
            <div id="logo" style={logoStyle}>
            <p>DunderList</p>
            </div>
            <div id="navBar" style={navStyle}>
                <NavLink exact to="/" style={linkStyles} activeStyle={selectedLink}>Shop</NavLink>
                <NavLink to="/sell" style={linkStyles} activeStyle={selectedLink}>Sell</NavLink>
                <NavLink to="/about" style={linkStyles} activeStyle={selectedLink}>About</NavLink>
                <NavLink to="/cart" style={linkStyles} activeStyle={selectedLink}>Cart {(cart.length > 0) ? `(${cart.length})` : '' }</NavLink>

                {loggedIn ? 
                    <button onClick={handleClick} style={linkStyles}>Logout</button> :
                    <NavLink to="/login" style={linkStyles} activeStyle={selectedLink}>Login</NavLink>  
                }
                
            </div>
        </header>
    )
}

export default Header
