const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://hima707ch:7073928944@himanshu.rdk9j5d.mongodb.net/Blogger?retryWrites=true&w=majority",{useNewUrlParser : true});
//mongoose.connect("mongodb://localhost:27017/Blogger",{useNewUrlParser : true});


// Moongoose frame

const user_schema = mongoose.Schema({
    name: {
        type:String,
        require : true
        },
    email: {
        type:String,
        unique : true,
        require : true
        },
    password: {
        type:String,
        require : true
        },
    friends : {
        type : Array,
    },
    arr : Array

});

const Profile = mongoose.model("profiles", user_schema);

module.exports = Profile;  
