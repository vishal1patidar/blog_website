import React, { useState} from "react";
import Note from "./components/Note";

import Detail from "./components/Detail";

import { useNavigate, useLocation } from "react-router-dom";

//const userData = {name : "him", email : "h.com" , arr : [{title : "1", content : "con"}]};

function SeeProfile() {
  const {state} = useLocation();
  const userData = state.userData;
  const {name ,email , arr} = userData;
  
  function del(){
    
  }

  return (
    <div>
      
      <Detail name = {name} email = {email} />
      <br/>
      <br/>
      <h3>Blogs</h3>
      {
        arr.map( (ele,ind)=>{
          return <Note
            key = {ind}
            id = {ind}
            title = {ele.title}
            content = {ele.content}
            del = {del}
          />
        } )
      }
      
      
    </div>
  );
}

export default SeeProfile;
