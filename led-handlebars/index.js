var express = require('express');
var exphbs  = require('express-handlebars');
var path = require('path')
var app = express();

const indexRoute = require('./routes/index')
const usersRoute = require('./routes/users/user')
const apiRoute = require('./routes/api/api')
const adminRoute = require('./routes/admin/admin')

app.get('/', (req,res) => {
    res.redirect('/home')
})

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRoute)
app.use('/api', apiRoute)
app.use('/users', usersRoute)
app.use('/admin', adminRoute)

app.listen(8080);