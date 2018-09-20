import React, {Component} from 'react';
import Nav from './../Nav/Nav';
import styled from 'styled-components';
import axios from 'axios';

const Page = styled.div`
    background: #f2f2f2;
    min-height: 100vh;
`
const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`
const Container = styled.div`
    width: 60%;
    min-height: 100vh;
    border-radius: 2px;
    background-color: #ffffff;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.2);
    > div{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;  
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

class Search extends Component {
    constructor(){
        super()
        this.state = {
            friends: []
        }
    }
    componentDidMount = () => {
        axios.get('/api/friend/list').then(res => {
            this.setState({
                friends: res.data
            })
        })
    }

    render(){
        let friendsDisplay = this.state.friends.map((el, i) => {
            return (
                <Friend>
                    <div>
                        <img src={el.image} alt=""/>
                    </div>
                    <div>
                        <h4>{el.first_name}</h4>
                        <h4>{el.last_name}</h4>
                    </div>
                    <div>
                        <Button3>Add Friend</Button3> 
                    </div>
                    {/* <button>Remove Friend</button> */}
                </Friend>
            )
        })
        return (
            <Page>
                <Nav/>
                <Body>
                    <Container>
                        <br/>
                        <select name="" id="">
                            <option value="Select">Select...</option>
                            <option value="firstName">First Name</option>
                            <option value="lastName">Last Name</option>
                            {/* <option value="gender">Gender</option>
                            <option value="hairColor">Hair Color</option>
                            <option value="eyeColor">Eye Color</option>
                            <option value="hobby">Hobby</option>
                            <option value="birthday">Birthday</option>
                            <option value="birthMonth">Birth Month</option>
                            <option value="birthYear">Birth Year</option> */}
                        </select>
                        <input type="text"/>
                        <button>Search</button>
                        <button>Reset</button>
                        <br/>
                        <div>
                            {friendsDisplay}
                        </div>
                    </Container>
                </Body>
            </Page>
        )
    }
}
export default Search