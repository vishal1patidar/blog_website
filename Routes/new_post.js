const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Profile = require('../Models');

router.get("", (req,res)=>{
    res.send("ram")
    
});

router.post("",async (req,res)=>{
    console.log(req.body);
    const { email , data } = req.body;
    await Profile.updateOne({email: email}, { $push : {arr : data} } )   
})

module.exports = router;
