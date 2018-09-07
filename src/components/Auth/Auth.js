import React, {Component} from 'react';
import styled from 'styled-components';
import logo from './helo-logo.png';

const Button = styled.button`
    color: white;
    width: 70%;
    padding: 6px;
    border-radius: 1px;
    background-image: radial-gradient(circle at 50% -46%, #737373, #403d39);
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.2);
    border: none;
`
const Body = styled.div`
    background: linear-gradient(99deg, #ff70a6, #ff9770 50%, #ffd670 73%, #e9ff70);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    > div{
        border-radius: 8px;
        background-image: linear-gradient(128deg, rgba(64, 61, 57, 0.1), rgba(255,255,255,0.2));
        box-shadow: 0 14px 28px 0 rgba(0,0,0,0.25), 0 10px 10px 0 rgba(0,0,0,0.26);
        width: 300px;
        height: 215px;
        > img {
            margin-top: 20px;
            width: 65px;
            margin-bottom: -40px;
        }
        > h3 {
        color: white;
        font-size: 52px;
        margin-bottom: 0;
        letter-spacing: 2px;
        }
    }
`



class Auth extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return (
            <Body>
                <div>
                    <img src={logo} alt=""/>
                    <h3>Helo</h3>
                    <Button>Login / Register</Button>
                </div>
            </Body>
        )
    }
}
export default Auth