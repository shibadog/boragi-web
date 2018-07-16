const express = require('express');
const Login = require('../api/login');
const router = express.Router();

router.post('/login', function(req, res, next) {
  const param = req.body;

  if (!param.characterName) res.status(500).send('error1');
  if (!param.password) res.status(500).send('error2');
  res.header('Content-Type', 'application/json; charset=utf-8');

  Login.exec(param.characterName, param.password).then(response => {
    res.send(response);
  }).catch(err => {
    console.log(err);
    // next(err);
    res.status(500).send('error3');
  });
});

module.exports = router;
