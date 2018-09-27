require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const axios = require('axios');
const controller = require('./controller');


const app = express();
app.use(bodyParser.json());

//destruct Process.Env
const {
    SERVER_PORT,
    SESSION_SECRET,
    REACT_APP_DOMAIN,
    REACT_APP_CLIENT_ID,
    CLIENT_SECRET,
    CONNECTION_STRING
} = process.env;

//massive
massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('db connected')
})

//sessions
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

app.get('/auth/callback', async (req, res)=> {
    console.log('help')
    let payload = {
        client_id: REACT_APP_CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: req.query.code,
        grant_type: 'authorization_code',
        redirect_uri: `http://${req.headers.host}/auth/callback`
    }
    let tokenRes = await axios.post(`https://${REACT_APP_DOMAIN}/oauth/token`, payload);
    let userRes = await axios.get(`https://${REACT_APP_DOMAIN}/userinfo?access_token=${tokenRes.data.access_token}`)
    console.log(11111, userRes.data)
    
    // let user_robot = (`https://robohash.org/${Math.floor(Math.random() * 999)}`);

    const db = req.app.get('db');
    const {sub, given_name, family_name, gender} = userRes.data;
   
    let foundUser = await db.find_user([sub])
    if(foundUser[0]) {
        req.session.user = foundUser[0];
    } else {
        let createdUser = await db.create_user([sub, given_name, family_name, gender]);
        req.session.user = createdUser[0];
    }
    res.redirect('/#/');
})

app.get('/api/user-data', (req, res) => {
    if(req.session.user){
        res.status(200).send(req.session.user)
    } else {
        res.status(401).send('Go log in')
    }
})

//-->> endpoints <<--
//AUTH
// app.get('/api/auth.login')
// app.get('/api/auth/setUser')
// app.get('/api/auth/authenticated')
app.post('/api/auth/logout', controller.logout)
//FREIND
app.get('/api/friend/list/:page', controller.searchFriends) // will switch for the limit and offset
app.post('/api/friend/add', controller.addFriend)
app.post('/api/friend/remove', controller.removeFriend)
app.get('/api/count/users', controller.countUsers) // counts the users
//USER
app.patch('/api/user/patch', controller.updateUser)
app.get('/api/dashUsers', controller.getUsers)

//RECOMMENDED
app.get('/api/recommended', controller.getEveryone)
app.post('/api/recommended/add', controller.addRecFriend)


const port = process.env.SERVER_PORT || 3076;
app.listen(port, ()=> {
    console.log(`Sever is up and running on ${port}`)
})