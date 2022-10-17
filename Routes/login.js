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
        return res.status(422).json({error : "Empty fields"})
    }

    const userExist = await Profile.find({email : email});

    if(userExist.length >= 1){
        const isMatch =  await bcrypt.compare(password, userExist[0].password);
        if(isMatch){
            //res.json({message : "user sign in successfuly"});
            //res.send({name : "him", email : "h.com" , arr : [{title : "1", content : "con"}]})
            res.send({message : "recived", user : userExist[0]})
            //console.log(userExist);
        }
        else{
            return res.status(422).json({error : "Invalid Password"})
        }
    }else{
        return res.status(422).json({error : "Email not exist"})
    }
}
catch(err){
    console.log(err);
}

});



module.exports = router;
