const express = require('express')

const router = express.Router()

router.get('/home', (req, res) => {
    res.render('home', {
        title: "LED | Home",
        style: '<link href="css/home.css" rel="stylesheet">'
    });
})

module.exports = router;
