import Header from "./Header";
import {Route, Routes} from "react-router-dom";
import { useState } from "react";
import Profile from "./Profile";
import Search from "./Search";
import Friends from "./friends"
import SeeProfile from "./SeeProfile"

import Register from "./Register";
import Login from "./Login";

function App() {
  

  const [islogin, setIsLogin] = useState(false);
  const [ userData, setUserData] = useState({
    name : "",
    email : "",
    arr : [],
  });
  const [searchData, setSearchData] = useState([]);

function loggedIn(){
  console.log("login called")
  setIsLogin(true);
}

function set_login_data(userData){
  console.log("recived in app ")
  setUserData(userData);
  console.log(userData)
}

function set_search_data(data){
  console.log("recived in app ")
  setSearchData(data);
  console.log(userData)
}


  console.log(islogin);
  return (
    <div>      
        <Header />        
        <Routes>
          <Route path="/profile" element = { islogin ? <Profile userData = {userData} /> : <Login loggedIn = {loggedIn} setUserData = {set_login_data} /> } />
          <Route path="/login" element = {<Login loggedIn = {loggedIn} setUserData = {set_login_data} />} />
          <Route path="/register" element = {<Register/>} />
          <Route path="/search"  element = {<Search data = {searchData} />} />  
          <Route path="/friends"  element = {<Friends />} />  
          <Route path="/seeProfile"  element = {<SeeProfile />} />  
          <Route exact path = "" element = {<Register />} />
        </Routes>
        
    </div>
  );
}

export default App;
