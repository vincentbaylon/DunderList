import { useState } from 'react'

function Login() {
    const [login, setLogin] = useState(true)
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const divStyle = {
        width: '40%',
    }

    function handleChange(e) {
        let name = e.target.name
        let value = e.target.value

        setFormData({ ...formData, [name]: value })
    }

    function handleSubmit(e) {
        e.preventDefault()

        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        

        setFormData({
            email: '',
            password: ''
        })
    }

    function handleClick() {
        setLogin(login => !login)
    }

    return (
        <div className="ui center aligned container" style={divStyle}>
            <br></br>
            <h1>{login ? "Login" : "Sign Up"}</h1>
            <br></br>

            <form className="ui form" onSubmit={handleSubmit}>
                <div className="field">
                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange}></input>
                </div>
                <div className="field">
                    <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange}></input>
                </div>
                <div className="field">
                    <input type="submit" value={login ? "Login" : "Sign Up"}></input>
                </div>                
            </form>
            <br></br>
            <hr></hr>
            <div className="field">
                {login ? 
                    <>
                    <p>Don't have an acccount?</p>
                    <button onClick={handleClick}>Sign Up</button>
                    </> : 
                    <>
                    <p>Already have an acccount?</p>
                    <button onClick={handleClick}>Login</button>
                    </>
                }
            </div>
        </div>
    )
}

export default Login