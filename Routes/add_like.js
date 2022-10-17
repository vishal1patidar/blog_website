const express = require('express');
const mongoose = require('mongoose');
const { deleteOne } = require('../Models');
const router = express.Router();
const Profile = require('../Models');

router.get("", async (req,res)=>{
    
    
});

router.post("",async (req,res)=>{
    const { visitor_email, host_email, index } = req.body;
    console.log(req.body);
    const response = await Profile.findOne({email : host_email});
    await Profile.deleteOne({email : host_email});
    //const new_data = response.arr[0].email_liked;
    console.log(response)
    const array = response.arr[index].email_liked.push(visitor_email);
    const user = new Profile({name : response.name, email : response.email, password : response.password ,friends : response.friends, arr :response.arr});
    await user.save();

    //console.log(arr);


    //console.log(response);
})

module.exports = router;
