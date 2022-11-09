import React, { useState} from "react";
import Note from "./components/Note";
import "./public/my_profile.css"
import Detail from "./components/Detail";
import { useNavigate, useLocation } from "react-router-dom";

//const userData = {name : "him", email : "h.com" , arr : [{title : "1", content : "con"}]};

function SeeProfile() {
  const {state} = useLocation();
  const userData = state.userData;
  const visitor_email = state.my_email;
  const {name ,email , arr} = userData;

  const navigate = useNavigate();
  return (
    <div>
      
      <div className="details">
        <button className="btn" onClick={ ()=>{navigate("/profile")} } >My Profile</button>
        <p > Name : {name} <br />
         Email : {email} </p>
    </div>
      <br/>
      <br/>
      
      <div className="allblog" style={{float : "none"}}>
      <h3>Blogs</h3>
      {
        arr.map( (ele,ind)=>{
          return <Note
          key = {ind}
            id = {ind}
            title = {ele.title}
            content = {ele.content}
            del = {()=>{}}
            email_liked = {ele.email_liked}
            host_email = {userData.email}
            visitor_email = {visitor_email} 
          />
        } )
      }
      </div>
      
      
    </div>
  );
}

export default SeeProfile;
