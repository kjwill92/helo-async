import React, {Component} from 'react';
import Nav from './../Nav/Nav';
import styled from 'styled-components';
import axios from 'axios';
import 'rc-pagination/assets/index.css'
import Pagination from 'rc-pagination'

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
const Button2 = styled.div`
    border-radius: 1px;
    background-image: radial-gradient(circle at 50% -46%, #737373, #403d39);
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.2);
    color: white;
    padding: 8px 8px;
`
const Button4 = styled.div`
    border-radius: 1px;
    background-image: radial-gradient(circle at 50% -46%, #737373, #403d39);
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.2);
    color: white;
    width: 70px;
    padding: 8px 20px;
`

class Search extends Component {
    constructor(){
        super()
        this.state = {
            friends: [],
            current: 1,
            count: 0,
            input: '',
            select: ''
        }
    }
    
    componentDidMount = () => {
        axios.get('/api/friend/list/0').then(res => {
            this.setState({
                friends: res.data
            })
        })
        axios.get('/api/count/users').then(res => {
            console.log(555,res.data)
            this.setState({
                count: Number(res.data[0].count)
            })
        })
    }
    addFriend(friendID){
        axios.post(`/api/friend/add`, {friendID}).then(res => {
            this.pageChange(this.state.current)
        })
    }
    removeFriend(friendID){
        axios.post(`/api/friend/remove`, {friendID}).then(res => {
            this.pageChange(this.state.current)            
        })
    }
    handleInput = (e) => {
        this.setState({
            input: e.target.value
        })
    }
    handleSelect = (e) => {
        this.setState({
            select: e.target.value
        })
    }
    handleClick = () => {
        console.log('search')
        axios.get(`/api/friend/list/0?name=${this.state.select}&input=${this.state.input}`).then(res => {
            this.setState({
                friends: res.data
            })
        })
        axios.get(`/api/count/users?name=${this.state.select}&input=${this.state.input}`).then(res => {
            this.setState({
                count: Number(res.data[0].count)
            })
        })
    }
    handleReset = () => {
        this.setState({
            input: '',
            select: ''
        }, () => {
            this.handleClick()
        })
    }

    pageChange = (page) => {
        let offset = page * 8 - 8
        axios.get( `/api/friend/list/${offset}?name=${this.state.select}&input=${this.state.input}`).then(res => {
            this.setState({
                friends: res.data
            })
        })
        this.setState({
          current: page
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
                        { el.friend ? 
                        <Button2 onClick={()=> this.removeFriend(el.id)}>Remove Friend</Button2> :
                        <Button3 onClick={()=> this.addFriend(el.id)}>Add Friend</Button3> }
                    </div>
                </Friend>
            )
        })
        return (
            <Page>
                <Nav/>
                <Body>
                    <Container>
                        <br/>
                        <select name="" id="" value={this.state.select} onChange={this.handleSelect}>
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
                        <input type="text" value={this.state.input} onChange={this.handleInput}/>
                        <button onClick={this.handleClick}>Search</button>
                        <button onClick={this.handleReset}>Reset</button>
                        <br/>
                        <div>
                            {friendsDisplay}
                        </div>
                        <Pagination pageSize={8} onChange={this.pageChange} current={this.state.current} total={this.state.count} />
                    </Container>
                </Body>
                
            </Page>
        )
    }
}
export default Search