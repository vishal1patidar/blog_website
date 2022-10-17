const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Profile = require('../Models');

router.get("", async (req,res)=>{
    // const data = await Profile.find({},{name:1,email:1});
    // res.send(data);
    
});

router.post("",async (req,res)=>{
   console.log("ram")
    const { email } = req.body;
    console.log(email)
   const data = await Profile.findOne({email : email})
   res.send(data);
})

module.exports = router;