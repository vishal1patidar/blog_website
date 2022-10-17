const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Profile = require('../Models');

router.get("", async (req,res)=>{
    const data = await Profile.find({},{name:1,email:1});
    res.send(data);
    
});

router.post("",async (req,res)=>{
   console.log("ram")
    const { myEmail , friend } = req.body;
    
    const isExist = await Profile.findOne({email : myEmail},{friends : 1});
    console.log(isExist)
    if(isExist.length > 0) return res.send("Already Connectd")

    console.log(friend)
   await Profile.updateOne({email : myEmail}, {$push : {friends : friend}})
})

module.exports = router;