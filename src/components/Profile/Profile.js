import React, {Component} from 'react';
import Nav from './../Nav/Nav';
import styled from 'styled-components';


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
`
const Container2 = styled.div`
    border-radius: 2px;
    background-color: #ffffff;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.2);
    width: 60%;
    height: 350px;
    border: 1px black solid;
    display: flex;
    /* > h5 {
        margin-bottom: 0;
        margin-top: 4px;
        font-weight: normal;
    }
    > select {
        width: 130px;
    }
    > input {
        border-color: orange;
    } */
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

class Profile extends Component {
    constructor(){
        super()
        this.state = {
            firstName: '',
            lastName: ''
        }
    }

    render(){
        return (
            <Page>
                <Nav/>
                
                <Body>
                    <Container>
                        Name
                        <br/>
                        <Button>Update</Button>
                        <Button2>Cancel</Button2>
                    </Container>
                    <Container2>
                        <Box1>
                            <h5>First Name</h5>
                            <input type="text"/>
                            <h5>Last Name</h5>
                            <input type="text"/>
                            <h5>Gender</h5>
                                <select name="" id="">
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="dont">Dont assume my Gender</option>
                                </select>
                            <h5>Hair Color</h5>
                                <select name="" id="">
                                    <option value="brown">Brown</option>
                                    <option value="black">Black</option>
                                    <option value="red">Red</option>
                                    <option value="blonde">Blonde</option>
                                    <option value="gray">Gray</option>
                                    <option value="white">White</option>
                                </select>
                            <h5>Eye Color</h5>
                                <select name="" id="">
                                    <option value="green">Green</option>
                                    <option value="brown">Brown</option>
                                    <option value="blue">Blue</option>
                                    <option value="hazel">Hazel</option>
                                </select>
                        </Box1>
                        <Box2>
                            <h5>Hobby</h5>
                                <select name="" id="">
                                    <option value="hiking">Hiking</option>
                                    <option value="reading">Reading</option>
                                    <option value="swimming">Swimming</option>
                                    <option value="stealing">Stealing Stuff</option>
                                    <option value="netflixNchill">Netflix n' Chill</option>
                                    <option value="painting">Painting</option>
                                    <option value="buildingStuff">Building Things</option>
                                    <option value="shopping">Shopping</option>
                                    <option value="games">Video Games</option>
                                </select>
                            <h5>Birthday</h5>
                                <select name="" id="">
                                    <option value="">01</option>
                                    <option value="">02</option>
                                    <option value="">03</option>
                                    <option value="">04</option>
                                    <option value="">05</option>
                                    <option value="">06</option>
                                    <option value="">07</option>
                                    <option value="">08</option>
                                    <option value="">09</option>
                                    <option value="">10</option>
                                    <option value="">11</option>
                                    <option value="">12</option>
                                    <option value="">13</option>
                                    <option value="">14</option>
                                    <option value="">15</option>
                                    <option value="">16</option>
                                    <option value="">17</option>
                                    <option value="">18</option>
                                    <option value="">19</option>
                                    <option value="">20</option>
                                    <option value="">21</option>
                                    <option value="">22</option>
                                    <option value="">23</option>
                                    <option value="">24</option>
                                    <option value="">25</option>
                                    <option value="">26</option>
                                    <option value="">27</option>
                                    <option value="">28</option>
                                    <option value="">29</option>
                                    <option value="">30</option>
                                    <option value="">31</option>
                                </select>
                            <h5>Birth Month</h5>
                                <select name="" id="">
                                    <option value="jan">January</option>
                                    <option value="feb">February</option>
                                    <option value="march">March</option>
                                    <option value="april">April</option>
                                    <option value="may">May</option>
                                    <option value="june">June</option>
                                    <option value="july">July</option>
                                    <option value="august">August</option>
                                    <option value="sept">September</option>
                                    <option value="oct">October</option>
                                    <option value="nov">November</option>
                                    <option value="dec">December</option>
                                </select>
                            <h5>Birth Year</h5>
                                <select name="" id="">
                                    <option value="">2000</option>
                                    <option value="">1999</option>
                                    <option value="">1998</option>
                                    <option value="">1997</option>
                                    <option value="">1996</option>
                                    <option value="">1995</option>
                                    <option value="">1994</option>
                                    <option value="">1993</option>
                                    <option value="">1992</option>
                                    <option value="">1991</option>
                                    <option value="">1990</option>
                                    <option value="">1989</option>
                                    <option value="">1988</option>
                                    <option value="">1987</option>
                                    <option value="">1986</option>
                                    <option value="">1985</option>
                                    <option value="">1984</option>
                                    <option value="">1983</option>
                                    <option value="">1982</option>
                                    <option value="">1981</option>
                                    <option value="">1980</option>
                                    <option value="">1979</option>
                                    <option value="">1978</option>
                                    <option value="">1977</option>
                                    <option value="">1976</option>
                                    <option value="">1975</option>
                                    <option value="">1974</option>
                                    <option value="">1973</option>
                                    <option value="">1972</option>
                                    <option value="">1971</option>
                                    <option value="">1970</option>
                                </select>
                        </Box2>
                        
                    </Container2>
                </Body>
            </Page>
        )
    }
}
export default Profile