import React, {Component} from 'react';
import Nav from './../Nav/Nav';
import styled from 'styled-components';
import axios from 'axios';
import swal from 'sweetalert2';

const Page = styled.div`
    background: #f2f2f2;
    height: 100vh;
`
const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`
const Container = styled.div`
    border-radius: 2px;
    background-color: #ffffff;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.2);
    width: 60%;
    height: 135px;
    border: 1px black solid;
    margin-bottom: 30px;
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
const Container2 = styled.div`
    border-radius: 2px;
    background-color: #ffffff;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.2);
    width: 60%;
    height: 350px;
    border: 1px black solid;
    display: flex;
`
const Box1 = styled.div`
    width: 50%;
    margin-top: 15px;
    > h5 {
        margin-bottom: 0;
        margin-top: 4px;
        font-weight: normal;
    }
    > select {
        width: 130px;
    }
    > input {
        border-color: orange;
    }
`
const Box2 = styled.div`
    width: 50%;
    margin-top: 15px;
    > h5 {
        margin-bottom: 0;
        margin-top: 4px;
        font-weight: normal;
    }
    > select {
        width: 130px;
    }
`
const Button = styled.button`
    border-radius: 1px;
    background-image: radial-gradient(circle at 50% -46%, #737373, #403d39);
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.2);
    border: none;
    padding: 6px 15px;
    color: white;
    margin-right: 10px;
`
const Button2 = styled.button`
    border-radius: 1px;
    background-image: radial-gradient(circle at 50% 0, #ffffff, #f1eceb);
    border: solid 1px #ccc3c3;
    padding: 5px 15px;
`
const Box = styled.div`

`

class Profile extends Component {
    constructor(){
        super()
        this.state = {
            info: [],
            pic: '',
            firstName: '',
            lastName: '',
            gender: '',
            hairColor: '',
            eyeColor: '',
            hobby: '',
            birthday: '',
            birthMonth: '',
            birthYear: ''
        }
    }

    componentDidMount(){
        axios.get('/api/dashUsers').then(res => {
            this.setState({
                info: res.data[0]
            })
        })
    }

    handleFirst = (e) => {
        this.setState({
            firstName: e.target.value
        })
    }
    handleLast = (e) => {
        this.setState({
            lastName: e.target.value
        })
    }
    handleGender = (e) => {
        this.setState({
            gender: e.target.value
        })
    }
    handleHairCo = (e) => {
        this.setState({
            hairColor: e.target.value
        })
    }
    handleEyeCo = (e) => {
        this.setState({
            eyeColor: e.target.value
        })
    }
    handleHobby= (e) => {
        this.setState({
            hobby: e.target.value
        })
    }
    handleBirthday = (e) => {
        this.setState({
            birthday: e.target.value
        })
    }
    handleBirthMo = (e) => {
        this.setState({
            birthMonth: e.target.value
        })
    }
    handleBirthYear = (e) => {
        this.setState({
            birthYear: e.target.value
        })
    }

    updateProfile = () => {
        const {firstName, lastName, gender, hairColor, eyeColor, hobby, birthday, birthMonth, birthYear} = this.state;
        swal({
            title: 'Birthday Fields Required',
            text: "You won't be able to update with out it!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, update it!',
            cancelButtonText: 'Let me go fix that'
          }).then((result) => {
            if (result.value) {
                axios.patch('/api/user/patch', {firstName, lastName, gender, hairColor, eyeColor, hobby, birthday, birthMonth, birthYear}).then(res => {  
                    // this.props.history.push('/')
                })
              swal(
                'Updated!',
                'Your profile has been updated',
                'success'
              )
            }
          })
        
    }
    handleCancel = () => {
        this.setState({
            pic: '',
            firstName: '',
            lastName: '',
            gender: '',
            hairColor: '',
            eyeColor: '',
            hobby: '',
            birthday: '',
            birthMonth: '',
            birthYear: ''
        })
    }


    render(){
        return (
            <Page>
                <Nav/>
                
                <Body>
                    <Container>
                        <img src={this.state.info.image} alt=""/>
                        <div>
                            <h3>{this.state.info.first_name}</h3>
                            <h3>{this.state.info.last_name}</h3>
                        </div>
                        <br/>
                        <Box>
                            <Button onClick={this.updateProfile}>Update</Button> 
                            <Button2 onClick={this.handleCancel}>Cancel</Button2>
                        </Box>
                    </Container>
                    <Container2>
                        <Box1>
                            <h5>First Name</h5>
                            <input type="text" onChange={this.handleFirst} value={this.state.firstName}/>
                            <h5>Last Name</h5>
                            <input type="text" onChange={this.handleLast} value={this.state.lastName}/>
                            <h5>Gender</h5>
                                <select name="" id="" onChange={this.handleGender} value={this.state.gender}>
                                    <option value="select">select...</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="dont">Dont assume my Gender</option>
                                </select>
                            <h5>Hair Color</h5>
                                <select name="" id="" onChange={this.handleHairCo} value={this.state.hairColor}>
                                    <option value="select">select...</option>
                                    <option value="brown">Brown</option>
                                    <option value="black">Black</option>
                                    <option value="red">Red</option>
                                    <option value="blonde">Blonde</option>
                                    <option value="gray">Gray</option>
                                    <option value="white">White</option>
                                </select>
                            <h5>Eye Color</h5>
                                <select name="" id="" onChange={this.handleEyeCo} value={this.state.eyeColor}>
                                    <option value="select">select...</option>
                                    <option value="green">Green</option>
                                    <option value="brown">Brown</option>
                                    <option value="blue">Blue</option>
                                    <option value="hazel">Hazel</option>
                                </select>
                        </Box1>
                        <Box2>
                            <h5>Hobby</h5>
                                <select name="" id="" onChange={this.handleHobby} value={this.state.hobby}>
                                    <option value="select">select...</option>
                                    <option value="hiking">Hiking</option>
                                    <option value="reading">Reading</option>
                                    <option value="swimming">Swimming</option>
                                    <option value="stealing stuff">Stealing Stuff</option>
                                    <option value="netflix&chill">Netflix n' Chill</option>
                                    <option value="painting">Painting</option>
                                    <option value="building things">Building Things</option>
                                    <option value="shopping">Shopping</option>
                                    <option value="video games">Video Games</option>
                                </select>
                            <h5>Birthday</h5>
                                <select name="" id="" onChange={this.handleBirthday} value={this.state.birthday}>
                                    <option value="select">select...</option>
                                    <option value="01">01</option>
                                    <option value="02">02</option>
                                    <option value="03">03</option>
                                    <option value="04">04</option>
                                    <option value="05">05</option>
                                    <option value="06">06</option>
                                    <option value="07">07</option>
                                    <option value="08">08</option>
                                    <option value="09">09</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                    <option value="31">31</option>
                                </select>
                            <h5>Birth Month</h5>
                                <select name="" id="" onChange={this.handleBirthMo} value={this.state.birthMonth}>
                                    <option value="select">select...</option>
                                    <option value="january">January</option>
                                    <option value="february">February</option>
                                    <option value="march">March</option>
                                    <option value="april">April</option>
                                    <option value="may">May</option>
                                    <option value="june">June</option>
                                    <option value="july">July</option>
                                    <option value="august">August</option>
                                    <option value="september">September</option>
                                    <option value="october">October</option>
                                    <option value="november">November</option>
                                    <option value="december">December</option>
                                </select>
                            <h5>Birth Year</h5>
                                <select name="" id="" onChange={this.handleBirthYear} value={this.state.handleBirthYear}>
                                    <option value="select">select...</option>
                                    <option value="2000">2000</option>
                                    <option value="1999">1999</option>
                                    <option value="1998">1998</option>
                                    <option value="1997">1997</option>
                                    <option value="1996">1996</option>
                                    <option value="1995">1995</option>
                                    <option value="1994">1994</option>
                                    <option value="1993">1993</option>
                                    <option value="1992">1992</option>
                                    <option value="1991">1991</option>
                                    <option value="1990">1990</option>
                                    <option value="1989">1989</option>
                                    <option value="1988">1988</option>
                                    <option value="1987">1987</option>
                                    <option value="1986">1986</option>
                                    <option value="1985">1985</option>
                                    <option value="1984">1984</option>
                                    <option value="1983">1983</option>
                                    <option value="1982">1982</option>
                                    <option value="1981">1981</option>
                                    <option value="1980">1980</option>
                                    <option value="1979">1979</option>
                                    <option value="1978">1978</option>
                                    <option value="1977">1977</option>
                                    <option value="1976">1976</option>
                                    <option value="1975">1975</option>
                                    <option value="1974">1974</option>
                                    <option value="1973">1973</option>
                                    <option value="1972">1972</option>
                                    <option value="1971">1971</option>
                                    <option value="1970">1970</option>
                                </select>
                        </Box2>
                        
                    </Container2>
                </Body>
            </Page>
        )
    }
}
export default Profile