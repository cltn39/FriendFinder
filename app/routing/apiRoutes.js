const friendData = require("../data/friends");

module.exports = (app) => {
    app.get('/api/tables', (req, res) => {
        res.json(friendData);
    });

    app.post('/api/tables', (req, res) => {
        res.json(friendData);
    });

    app.post('/api/clear', (req,res) => {
        // empty out the data
        friendData.length = 0;

        res.json({ ok: true });
    });
};