var friendData = require('../data/friends');

module.exports = app = () => {
  app.get('/api/friends', (req, res) => {
    res.json(friendData);
  });

  app.post('/api/friends', (req, res) => {
    console.log(req.body);
    if (friendData.length < 5) {
      friendData.push(req.body);
      res.json(true);
    };
  });
}