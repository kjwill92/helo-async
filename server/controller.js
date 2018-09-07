module.exports = {
    searchFriends: (req, res) => {
        const db = req.app.get('db');
        db.getFriends().then(friends => res.send(friends));
    }
}