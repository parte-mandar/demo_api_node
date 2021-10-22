const express = require('express')
const router = express.Router()
const Signup = require('../models/admin_signup')

// Get all in database
router.get('/', async(req,res) => {
    try{
        const admin = await Signup.find()
        res.json(admin)
    }
    catch(err){
        res.send(err)
    }
})

// post data in database
router.post('/', async(req,res) => {
    const admin = new Signup({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })

    try{
        const a1 = await admin.save()
        res.json(a1)
    }
    catch(err){
        res.send(err)
    }
})

// Delete phone number from database
router.delete('/', async(req,res) => {
    try{
        const a1 = await Signup.deleteOne({username: req.body.username});
        res.json(a1)
    }
    catch(err){
        res.send(err)
    }
})

module.exports = router;