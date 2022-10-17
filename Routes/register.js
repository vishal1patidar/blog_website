const express = require('express');
const router = express.Router();
const Profile = require('../Models');
const bcrypt = require('bcryptjs')

router.get("", (req,res)=>{
    
})

router.post("", async (req,res)=>{

    const { name, email, password, c_password } = req.body;

    if(name =="" || email == "" || password == "" || c_password == ""){        
        return res.status(422).json({error : "Plz fill all fields"});
    }
    
    try {
        const emailExist = await Profile.find({email : email});

        if(emailExist.length >=1){
            return res.status(422).json({error : "email already exists"});
        }

        if(password != c_password){
            return res.status(422).json({error : "Password not match"});
        }
        
        const hash_password = await bcrypt.hash(password,12);

        const user = new Profile({name,email,password : hash_password})
        console.log(user);
        await user.save();
        return res.status(201).json({message : "User register Successfuly"});
    }
    catch(err){
        console.log(err)
    }

});

module.exports = router;
