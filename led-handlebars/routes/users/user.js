const express = require('express')

const router = express.Router()

router.get('/register', (req,res) => {
  res.render('register', {

  })
})

router.get('/login', (req,res) => {
  res.render('login', {
    title: "",
    style: '<link href="css/login.css" rel="stylesheet">'
  })
})

module.exports = router;
