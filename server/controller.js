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
        const info = req.session.user.id;
        const {firstName, lastName, gender, hairColor, eyeColor, hobby, birthday, birthMonth, birthYear} = req.body;
        console.log(req.body)
        db.update_user([firstName, lastName, gender, hairColor, eyeColor, hobby, birthday, birthMonth, birthYear, info]).then(newInfo => res.send(newInfo))
    },
    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    },
    //same as getUsers
    getEveryone: (req, res) => {
        const db = req.app.get('db');
        const info = req.session.user.id;
        db.get_everyone([info]).then(everyone => res.status(200).send(everyone))
    }
}
