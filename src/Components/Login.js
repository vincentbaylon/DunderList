import { useState } from 'react'
import { useHistory } from 'react-router-dom'

function Login({ setCurrentUser }) {
    const history = useHistory()
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

        if (login) {
            fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(res => res.json())
            .then(data => {
                if (typeof data !== 'object') {
                    alert(data)
                } else {
                    setCurrentUser(data)
                    alert("Logged in")
                    history.push("/")
                }
            })
        } else {
            fetch('http://localhost:3000/users')
            .then(res => res.json())
            .then(data => {
                let findUser = data.find((eachUser) => eachUser.email === formData.email)
                if (findUser) {
                    alert("Email already taken, login instead.")
                } else {
                    fetch('http://localhost:3000/users', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(formData)
                    })
                    .then(res => res.json())
                    .then(data => console.log('SUCCESS', data))
                }
            })
        }

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
                    <input type="submit" className="ui button" value={login ? "Login" : "Sign Up"}></input>
                </div>                
            </form>
            <br></br>
            <hr></hr>
            <div className="field">
                {login ? 
                    <>
                    <p>Don't have an acccount?</p>
                    <button className="ui button" onClick={handleClick}>Sign Up</button>
                    </> : 
                    <>
                    <p>Already have an acccount?</p>
                    <button className="ui button" onClick={handleClick}>Login</button>
                    </>
                }
            </div>
        </div>
    )
}

export default Login