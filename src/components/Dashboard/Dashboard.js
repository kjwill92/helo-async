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
    height: 400px;
    border: solid black 1px;
    position: absolute;
    top: 275px;
    overflow: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
    > div{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;  
    }

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
const RecFriend = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    > h3 {
        position: relative;
        right: 80px;
    }
    > h4 {
        position: relative;
        left: 160px;
    }
    > select {
        position: relative;
        left: 75px;
    }
`
const Friend = styled.div`
    width: 330px;
    height: 150px;
    border: 1px solid black;
    display: flex;
    margin-top: 15px;
`
const Button3 = styled.div`
    border-radius: 1px;
    background-image: radial-gradient(circle at 50% -46%, #ff9770, #ff7a6e);
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1) 0 1px 2px 0 rgba(0,0,0,0.2);
    padding: 10px 15px;
    color: white;
`

class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            userInfo: [],
            everybody: [],
            pic: '',
            firstName: '',
            lastName: '',
            select: ''
        }
    }

    componentDidMount(){
        axios.get('/api/dashUsers').then(res => {
            this.setState({
                userInfo: res.data[0],
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

    addFriend(friendID){
        axios.post('/api/recommended/add', {friendID}).then(res => {
            this.setState({
                everybody: res.data
            })
        })
    }
    filterBy = (e) => {
        this.setState({
            select: e.target.value
        })
    }

    render(){
        const recFriends = this.state.everybody.filter((el) => {
            if(el[this.state.select] === this.state.userInfo[this.state.select]){
                return true
            } else {
                return false
            }
        })
        .map((el, i) => {
            return (
                <Friend key={i}>
                    <div>
                        <img src={el.image} alt=""/>
                    </div>
                    <div>
                        <h4>{el.first_name}</h4>
                        <h4>{el.last_name}</h4>
                    </div>
                    <div>
                        <Button3 onClick={()=> this.addFriend(el.id)}>Add Friend</Button3>
                    </div>
                </Friend>
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
                        <RecFriend>
                            <h3>Recommended Friends</h3>
                            <h4>Sorted by</h4>
                            <select name="" id="" value={this.state.select} onChange={this.filterBy}>
                                <option value="select">Select...</option>
                                <option value="first_name">First Name</option>
                                <option value="last_name">Last Name</option>
                                <option value="gender">Gender</option>
                                <option value="hair_color">Hair Color</option>
                                <option value="eye_color">Eye Color</option>
                                <option value="hobby">Hobby</option>
                                <option value="birthday">Birthday</option>
                                <option value="birth_month">Birth Month</option>
                                <option value="birth_year">Birth Year</option>
                            </select>
                        </RecFriend>
                        <div>
                            {recFriends}
                        </div>
                        
                    </Middle2>
                </Body>
            </Page>
            
        )
    }
}
export default Dashboard


