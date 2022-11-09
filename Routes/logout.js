const express = require('express');
const router = express.Router();
const Profile = require('../Models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post("", (req,res)=>{
    try{
        console.log(req.body)
        if(req.body.logout == "true"){
            res.clearCookie('jwt');
            res.send("done");
        }
    }
    catch(err){
        console.log(err)
    }
} )

module.exports = router;