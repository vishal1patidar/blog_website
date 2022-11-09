const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Profile = require('../Models');

router.get("", (req,res)=>{
    res.send("ram")
    
});

router.post("",async (req,res)=>{
    const {email , obj} = req.body;
    console.log(req.body)
    
    await Profile.updateOne({email: email}, { $pull :{arr : obj} } )   
})

module.exports = router;