const express = require('express');
const router = express.Router();
const Profile = require('../Models');
const bcrypt = require('bcryptjs');

router.get("", (req,res)=>{
    res.send({mes : "1"})
});

router.post("", async (req,res)=>{
    try{
    const {email , password} = req.body;

    if(email == "" || password == ""){
        return res.json({message : "Empty fields", log : false})
    }

    const userExist = await Profile.find({email : email});

    if(userExist.length >= 1){
        const isMatch =  await bcrypt.compare(password, userExist[0].password);
        if(isMatch){
            //res.json({message : "user sign in successfuly"});
            //res.send({name : "him", email : "h.com" , arr : [{title : "1", content : "con"}]})
            res.json({message : "", user : userExist[0], log : true})
            //console.log(userExist);
        }
        else{
            return res.json({message : "Invalid Password", log : false})
        }
    }else{
        return res.json({message : "Email not exist", log : false})
    }
}
catch(err){
    console.log(err);
}

});



module.exports = router;
