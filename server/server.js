require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const controller = require('./controller');


const app = express();
app.use(bodyParser.json());
//massive
massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('db connected')
})

//-->> endpoints <<--
//AUTH
app.get('/api/auth.login')
app.get('/api/auth/setUser')
app.get('/api/auth/authenticated')
app.post('/api/auth/logout')
//FREIND
app.get('/api/friend/list', controller.searchFriends)
app.post('/api/friend/add')
app.post('/api/friend/remove')
//USER
app.patch('/api/user/patch/:id')
app.get('/api/user/list')
app.get('/api/user/search')
//RECOMMENDED
app.post('/api/recommended')
app.post('/api/recommended/add')


const port = process.env.SERVER_PORT || 3076;
app.listen(port, ()=> {
    console.log(`Sever is up and running on ${port}`)
})