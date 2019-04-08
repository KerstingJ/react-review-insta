import React, {useState}from 'react'
import styled from 'styled-components'

export default function(props){

    const [loginInfo, setLoginInfo] = useState({
        username: "",
        password: ""
    })

    const [error, setError] = useState("")

    const handleInput = event => {
        setLoginInfo({
            ...loginInfo,
            [event.target.name]: event.target.value
        })

        
    }

    const handleLogin = event => {
        event.preventDefault();
        // get out loginInfo
        //check if username is valid
        const validUser = !!loginInfo.username.trim()
        //check if password is valid
        const validPass = !!loginInfo.password.trim() && loginInfo.password !== "password"

        console.log(validUser, validPass)
        //if not return and pass error
        if (!(validUser && validPass)) {
            setError("Not Valid Credentials");
            return
        } 

        //login
        props.login(loginInfo.username.trim())
        props.history.push("/posts")
    }

    return (
        <LoginView>
            <h1>NotInstagram</h1>
            {error ? <div className="error">{error}</div> : null}
            <form>
                <input 
                    name="username"
                    value={loginInfo.username}
                    onChange={handleInput}
                />
                <input
                    name="password"
                    type="password"
                    value={loginInfo.password}
                    onChange={handleInput}
                />
                <button type="submit" onClick={handleLogin}>Login</button>
            </form>
        </LoginView>
    )
}

const LoginView = styled.div`
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .error {
        padding: 15px;
        color: lightpink;

        font-size: 2rem;
        font-weight: bold;

        border: 2px solid lightpink;

        margin: 15px;
    }

    h1 {
        font-size: 3rem;
    }

    form {
        width: 500px;

        display: flex;
        flex-direction: column;

        border: 1px solid lightgray;
        border-radius: 5px;
        padding: 15px;

        input {
            padding: 10px;
            margin-bottom: 10px;


            border-radius: 4px;
            border: 1px solid lightgray;

            box-shadow: 2px 2px 1px lightgray;

            :focus {
                outline: none;
            }
        }
    }
`