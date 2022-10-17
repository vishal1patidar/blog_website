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

  function loggedIn(){
    console.log("login called")
    setIsLogin(true);
  }

  console.log(islogin);
  return (
    <div>      
        <Header />        
        <Routes>
          <Route path="/profile" element = { islogin ? <Profile/> : <Login loggedIn = {loggedIn} /> } />
          <Route path="/login" element = {<Login loggedIn = {loggedIn}  />} />
          <Route path="/register" element = {<Register/>} />
          <Route path="/search"  element = {<Search />} />  
          <Route path="/friends"  element = {<Friends />} />  
          <Route path="/seeProfile"  element = {<SeeProfile />} />  
          <Route exact path = "" element = {<Register />} />
        </Routes>
        
    </div>
  );
}

export default App;
