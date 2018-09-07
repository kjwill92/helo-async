import React, {Component} from 'react';
import Nav from './../Nav/Nav';
import styled from 'styled-components';

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
    width: 350px;
    height: 135px;
    border: 1px black solid;
    margin-right: 30px;
    padding: 10px;
`
const Container2 = styled.div`
    border-radius: 2px;
    background-color: #ffffff;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.2);
    width: 550px;
    height: 135px;
    border: 1px black solid;
    padding: 10px;
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

        }
    }

    render(){
        return (
            <Page>
                <Nav/>
                <Body>
                    <Middle>
                        <Container>
                            User Profile Image and stuff
                            <Button>Edit Profile</Button>
                        </Container>
                        <Container2>
                            Welcome to Helo! Find recommended friends based on your similiarities, and even search for them by name.  The more you update your profile, the better recommendations we can make!
                        </Container2>
                    </Middle>
                    <Middle2>
                        Recommended Friends
                    </Middle2>
                </Body>
            </Page>
            
        )
    }
}
export default Dashboard