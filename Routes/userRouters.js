const express = require('express');
// const database = require('../database')
const User = require('../model/registration');

const router = express.Router();

router.get('/world', (req, res) =>{
    res.send("Heloo")
})
router.post('/insert', async (req,res) => { 
    console.log("insered data")
    console.log("requested data", req.body)
    let create = await User.create(req.body);
    
    console.log("created data")
    res.json(create)

}) 


module.exports = router;