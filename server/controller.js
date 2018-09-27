module.exports = {
    searchFriends: async (req, res) => {
        const db = req.app.get('db');
        const page = req.params.page;
        const info = req.session.user.id;
        let users = [];
        const {name, input} = req.query;
        console.log(req.query)
        if(name === 'firstName'){
            users = await db.filtered_first([input, info, page])
        } else if(name === 'lastName'){
            users = await db.filtered_last([input, info, page])
        } else {
            users = await db.getAllUsers([info, page])
        }
            db.find_friends_id([info]).then(friends => {
                let todos = users.map((user, i) => {
                    friends.forEach((friend, i) => {
                        if(user.id === friend.friends_id){
                            user.friend = true
                        }
                    })
                    return user
                })
                res.send(todos)
            });
    },
    getUsers: (req, res) => {
        const db = req.app.get('db');
        const info = req.session.user.id
        db.get_users([info]).then(userInfo => res.status(200).send(userInfo))
    },
    updateUser: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.session.user;
        const {firstName, lastName, gender, hairColor, eyeColor, hobby, birthday, birthMonth, birthYear} = req.body;
        console.log(req.body)
        db.update_user([firstName, lastName, gender, hairColor, eyeColor, hobby, birthday, birthMonth, birthYear, id]).then(newInfo => {
            console.log(12345, newInfo)
            res.send(newInfo)})
    },
    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    },
    //same as getUsers -> ask beth about this to keep my code dry
    getEveryone: (req, res) => {
        const db = req.app.get('db');
        const info = req.session.user.id;
        db.get_everyone([info]).then(everyone => res.status(200).send(everyone))
    },
    addRecFriend: (req, res) => {
        const db = req.app.get('db');
        const info = req.session.user.id;
        const {friendID} = req.body;
        //user_id
        db.add_friend([info, friendID]).then(friendInfo => res.status(200).send(friendInfo))
    },
    addFriend: (req, res) => {
        const db = req.app.get('db');
        const info = req.session.user.id;
        const {friendID} = req.body;
        db.add_searchFriend([info, friendID]).then(allUsers => {
            res.sendStatus(200)
        })
    },
    removeFriend: (req, res) => {
        const db = req.app.get('db');
        const info = req.session.user.id;
        const {friendID} = req.body;
        db.remove_friend([info, friendID]).then(allUsers => {
            res.sendStatus(200)
        })
    },
    countUsers: (req, res) => {
        const db = req.app.get('db');
        const info = req.session.user.id;
        const {name, input} = req.query;
        if(name === 'firstName'){
            db.count_first([info, input]).then(count => res.send(count))
        } else if(name === 'lastName'){
            db.count_last([info, input]).then(count => res.send(count))
        } else {
            db.count_users([info]).then(count => res.send(count))
        }
    }
    

}
