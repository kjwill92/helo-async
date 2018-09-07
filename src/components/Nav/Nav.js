import React, {Component} from 'react';
import styled from 'styled-components';
import home from './home.png';
import search from './search.png';
import {withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';

const Body = styled.div`
    background-image: linear-gradient(97deg, #ff7a6e, #ff9770);
    box-shadow: 0 10px 20px 0 rgba(0,0,0,0.1), 0 6px 6px 0 rgba(0,0,0,0.2);
    height: 50px;
    display: flex;
    align-items: center;
`
const Name = styled.div`
    position: absolute;
    left: 120px;
    > h2 {
        color: white;
        letter-spacing: 2px;
    }
`
const Icon = styled.div`
    position: absolute;
    left: 190px;
`
const Search = styled.div`
    position: absolute;
    left: 230px;
`
const Dash = styled.div`
    position: absolute;
    left: 48%;
    > h4 {
        color: white;
        font-weight: normal;
    }
`
const Logoutt = styled.div`
    position: absolute;
    right: 130px;
    > h4 {
        color: white;
        font-weight: normal;
    }
`

class Nav extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        console.log(this.props)
        let name = ""
        if(this.props.location.pathname === "/") {
            name = "Dashboard"
        } else if(this.props.location.pathname === "/profile") {
            name = "Profile"
        } else if(this.props.location.pathname === "/search") {
            name = "Search"
        } 

        return (
            <Body>
                <Name>
                    <h2>Helo</h2>
                </Name>
                <Icon>
                    <Link to="/"><img src={home} alt=""/></Link>
                </Icon>
                <Search>
                    <Link to="/search"><img src={search} alt=""/></Link>
                </Search>
                <Dash>
                    <h4>{name}</h4>
                </Dash>
                <Logoutt>
                    <h4>Logout</h4>
                </Logoutt>
            </Body>
        )
    }
}
export default withRouter(Nav);