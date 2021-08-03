import React from 'react';
import { NavLink } from "react-router-dom";

const headerStyle ={
    backgroundColor: "#0D1F2D",
    width: "100%",
    color: "white", 
    paddingTop: '10px',
    paddingLeft: '10px',
    display: 'flex',
}

const logoStyle = {
    flex: '1',
    fontFamily: 'Impact',
    fontSize: '20px'
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


function Header() {
    return (
        <header style={headerStyle}>
            <div id="logo" style={logoStyle}>
            <h1>DunderList</h1>
            </div>
            <div id="navBar" style={navStyle}>
                <NavLink exact to="/" style={linkStyles} activeStyle={selectedLink}>Shop</NavLink>
                <NavLink to="/sell" style={linkStyles} activeStyle={selectedLink}>Sell</NavLink>
                <NavLink to="/about" style={linkStyles} activeStyle={selectedLink}>About</NavLink>
                <NavLink to="/cart" style={linkStyles} activeStyle={selectedLink}>Cart</NavLink>
            </div>
        </header>
    )
}

export default Header
