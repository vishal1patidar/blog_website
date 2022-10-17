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
    console.log(friend)
   await Profile.updateOne({email : myEmail}, {$push : {friends : friend}})
})

module.exports = router;