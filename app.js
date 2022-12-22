const express = require('express')
const register = require("./Routes/register");
const login = require("./Routes/login");
const new_post = require("./Routes/new_post");
const delete_arr_ele = require("./Routes/delete_arr_ele");
const search = require("./Routes/search");
const friends = require("./Routes/friends")
const profile = require("./Routes/profile")
const add_like = require("./Routes/add_like")
const load = require('./Routes/load');
const logout = require('./Routes/logout')
const bodyParse = require("body-parser");
const parser = require('cookie-parser')
const cors = require('cors');

const app = express();
app.use(cors({ origin: true }));
app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json())
app.use(parser());

app.use("/register", register);
app.use("/login", login);
app.use("/new_post", new_post);
app.use("/delete_arr_ele", delete_arr_ele);
app.use("/search", search);
app.use("/friends", friends);
app.use("/add_like", add_like);
app.use("/profile",profile);
app.use("/load", load);
app.use("/logout", logout );

if(process.env.NODE_ENV = "production"){
    const path = require('path')

    app.get('/',(req,res)=>{
        app.use(express.static(path.resolve(__dirname,'frontend','build')))
        res.sendFile(path.resolve(__dirname,'frontend','build','index.html'))
    })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log("server is running on port 5000");
})
