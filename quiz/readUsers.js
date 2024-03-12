const express = require('express')
const router = express.Router();

router.get('/usernames', (req, res) => {
  let usernames = req.users.map(function(user) {
    return {id: user.id, username: user.username};
  });
  res.send(usernames);
});

app.get('/username/:name', (req, res) => {
  let name = req.params.name
  let foundUser = req.users.find((user) => user.username == name)
  if (foundUser)
    res.send(foundUser)
  else 
  res.send({error: "User not found"})
})