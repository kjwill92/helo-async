import React, {Component} from 'react';
import Nav from './../Nav/Nav';
import styled from 'styled-components';
import axios from 'axios';
// import {Link} from 'react-router-dom';

const Page = styled.div`
    background: #f2f2f2;
    height: 100vh;
`
const Body = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`
const Middle2 = styled.div`
    border-radius: 2px;
    background-color: #ffffff;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.2);
    width: 60%;
    height: 300px;
    border: solid black 1px;
    position: absolute;
    top: 275px;
`
const Middle = styled.div`
    /* border: 2px green solid; */
    width: 60%;
    display: flex;
    margin-top: 30px;
`
const Container = styled.div`
    border-radius: 2px;
    background-color: #ffffff;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.2);
    width: 355px;
    height: 135px;
    border: 1px black solid;
    margin-right: 20px;
    padding: 10px;
    display: flex;
    > img{
        border: 2px groove orange;
        width: 130px;
        height:130px;
        margin-right: 10px;
    }
    > div{
        > h3 {
            text-align: left;
        }
    }
`
const Item = styled.div`
    position: absolute;
    top: 100px;
    left: 275px;
`
const Container2 = styled.div`
    border-radius: 2px;
    background-color: #ffffff;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.2);
    width: 550px;
    height: 135px;
    border: 1px black solid;
    padding: 10px;
    text-align: left;
    font-size: 19px;
`
const Button = styled.div`
    position: relative;
    top: 85px;
    left: 125px;
    border-radius: 1px;
    background-image: radial-gradient(circle at 50% 0, #ffffff, #f1eceb);
    border: solid 1px #ccc3c3;
    padding: 5px;
    width: 110px;
`

class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            userInfo: [],
            everybody: [],
            pic: '',
            firstName: '',
            lastName: ''
        }
    }

    componentDidMount(){
        axios.get('/api/dashUsers').then(res => {
            this.setState({
                userInfo: res.data,
                pic: res.data[0].image,
                firstName: res.data[0].first_name,
                lastName: res.data[0].last_name
            })
        })
        axios.get('/api/recommended').then(res => {
            this.setState({
                everybody: res.data
            })
        })
    }

    render(){
        const recFriends = this.state.everybody.map((el, i) => {
            return (
                <div>
                    <h3>{el.first_name}</h3>
                </div>
            )
        })
        return (
            <Page>
                <Nav/>
                <Body>
                    <Middle>
                        <Container>
                            <img src={this.state.pic} alt=""/>
                            <div>
                                <h3>{this.state.firstName}</h3>
                                <h3>{this.state.lastName}</h3>
                            </div>
                            <Item>
                                <Button onClick={()=> this.props.history.push('/profile')}>Edit Profile</Button>
                            </Item>
                        </Container>
                        <Container2>
                            Welcome to Helo! Find recommended friends based on your similiarities, and even search for them by name.  The more you update your profile, the better recommendations we can make!
                        </Container2>
                    </Middle>
                    <Middle2>
                        Recommended Friends
                        {recFriends}
                        Sorted by
                        <select name="" id="">
                            <option value="select">Select...</option>
                            <option value="firstName">First Name</option>
                            <option value="lastName">Last Name</option>
                            <option value="gender">Gender</option>
                            <option value="hairColor">Hair Color</option>
                            <option value="eyeColor">Eye Color</option>
                            <option value="hobby">Hobby</option>
                            <option value="birthday">Birthday</option>
                            <option value="birthMonth">Birth Month</option>
                            <option value="birthYear">Birth Year</option>
                        </select>
                    </Middle2>
                </Body>
            </Page>
            
        )
    }
}
export default Dashboard