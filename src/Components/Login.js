import { useState } from 'react'

function Login() {
    const [loggedIn, setLoggedIn] = useState(false)

    const divStyle = {
        width: '40%',
    }

    function handleSubmit(e) {
        e.preventDefault()
    }

    function handleClick() {
        setLoggedIn(loggedIn => !loggedIn)
    }

    return (
        <div className="ui center aligned container" style={divStyle}>
            <br></br>
            <h1>{loggedIn ? "Login" : "Sign Up"}</h1>
            <br></br>

            <form className="ui form" onSubmit={handleSubmit}>
                <div className="field">
                    <input type="email" placeholder="Email"></input>
                </div>
                <div className="field">
                    <input type="password" placeholder="Password"></input>
                </div>
                <div className="field">
                    <input type="submit" value="Login"></input>
                </div>                
            </form>
            <br></br>
            <hr></hr>
            <div className="field">
                <p>Don't have an acccount?</p>
                <button onClick={handleClick}>Sign Up</button>
            </div>
        </div>
    )
}

export default Login