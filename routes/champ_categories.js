const express = require('express')
const router = express.Router()
const Categories = require('../models/champ_categories')

// Get all in database
router.get('/', async(req,res) => {
    try{
        const user = await Categories.find()
        res.json(user)
    }
    catch(err){
        res.send(err)
    }
})

// post data in database
router.post('/', async(req,res) => {
    const category = new Categories({
        categoryId: 2,
        categoryName: req.body.categoryName
    })

    try{
        const a1 = await category.save()
        res.json(a1)
    }
    catch(err){
        res.send(err)
    }
})

// post data in database
router.patch('/:categoryName', async(req,res) => {

    try{
        const category = await Categories.findOne({"categoryName": req.params.categoryName})
        if(category == null){
            res.send("No such category")
        }
        else{
            category.categoryName = req.body.categoryName
            category.lastModified = Date.now()
            const a1 = await category.save()
            res.json(a1)
        }
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