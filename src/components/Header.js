import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function (props){

    return (
        <Header>
            {/* Branding */}
            <h1>NotInstagram</h1>
            {/* Search */}
            <form>
                <input 
                    name="search"
                    placeholder="search.."
                />
            </form>
            {/* Navigation */}
            <nav>
                <Link to="/" >{props.username}</Link>
                <Link to="/" >Log Out</Link>
            </nav>
        </Header>
    )

}

const Header = styled.header`
    width: 100%;
    padding: 20px 10px;

    background: white;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    border-bottom: 1px solid lightgray;
    position: fixed;

    h1 {
        font-size: 3rem;
    }

    form {
        input {
            padding: 5px;
            border-radius: 3px;
            border: 1px solid lightgray;

            :focus {
                outline: none;
            }

            :placeholder {
                color: lightgray;
            }
        }
    }

    nav {
        a {
            text-decoration: none;
            color: inherit;

            margin-left: 15px;

            :first-child {
                margin-left: 0;
            }

            :hover {
                text-decoration: underline;
            }
        }
    }
`