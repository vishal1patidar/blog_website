const express = require('express');
const router = express.Router();
const Profile = require('../Models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.get("", async (req,res)=>{
    const cookie = await req.cookies.jwt;
    console.log(cookie);
    
    var verified;

    if(cookie)
    {
        verified = await jwt.verify(cookie , "password");
        const userData = await Profile.findById(verified.id)
        res.json( {userData : userData} );
    }
    
    else {
        console.log("cookie not present");
        res.json( {userData : "Not Present"} )
    }


} )

module.exports = router;