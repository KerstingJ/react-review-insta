import React, {useState}from 'react'
import styled from 'styled-components'

export default function(props){

    const [loginInfo, setLoginInfo] = useState({
        username: "",
        password: ""
    })

    const handleInput = event => {
        setLoginInfo({
            ...loginInfo,
            [event.target.name]: event.target.value
        })

        
    }

    console.log("set login Info to", loginInfo)

    return (
        <LoginView>
            <h1>NotInstagram</h1>
            <form>
                <input 
                    name="username"
                    value={loginInfo.username}
                    onChange={handleInput}
                />
                <input
                    name="password"
                    value={loginInfo.password}
                    onChange={handleInput}
                />
                <button type="submit">Login</button>
            </form>
        </LoginView>
    )
}

const LoginView = styled.div`
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;

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