const express = require('express')
const router = express.Router()
const Signup = require('../models/signup')

// Get all in database
router.get('/', async(req,res) => {
    try{
        const user = await Signup.find()
        res.json(user)
    }
    catch(err){
        res.send(err)
    }
})

// post data in database
router.post('/', async(req,res) => {
    const user = new Signup({
        countryCode: req.body.countryCode,
        phone: req.body.phone,
    })

    try{
        const a1 = await user.save()
        res.json(a1)
    }
    catch(err){
        res.send(false)
    }
})

// Delete phone number from database
router.delete('/', async(req,res) => {
    try{
        const a1 = await Signup.deleteOne({phone: req.body.phone});
        res.json(a1)
    }
    catch(err){
        res.send(err)
    }
})

module.exports = router;