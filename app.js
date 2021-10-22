const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/KGamify_test'

const app = express()

mongoose.connect(url, {useNewUrlParser: true})

const con = mongoose.connection

con.on('open', () => {
    console.log('Connected...!!!');
})

app.listen(9000, () => {
    console.log('Server Started');
})

app.get('/', async(req,res) => {
    try{
        res.send("Welcome to the KGamify test api..!!")
    }
    catch(err){
        res.send(err)
    }
})

app.use(express.json())

// route "signup"
const signup = require('./routes/signup')
app.use('/signup', signup)

// route "admin_signup"
const admin_signup = require('./routes/admin_signup')
app.use('/admin_signup', admin_signup)

// route "champ_categories"
const champ_categories = require('./routes/champ_categories')
app.use('/champ_categories', champ_categories)