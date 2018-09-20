module.exports = {
    searchFriends: (req, res) => {
        const db = req.app.get('db');
        db.getFriends().then(friends => res.send(friends));
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
        db.update_user([firstName, lastName, gender, hairColor, eyeColor, hobby, birthday, birthMonth, birthYear, id]).then(newInfo => res.send(newInfo))
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
    }

}
