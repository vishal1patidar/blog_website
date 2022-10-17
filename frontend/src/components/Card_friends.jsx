import axios from "axios";
import { useState } from "react";
import {useNavigate} from "react-router-dom"
import "./card_styles.css"

function Card(props) {

    const navigate = useNavigate();
  function handleClick_profile(){
    
    axios.post("/profile",{email:props.email}).then( async  res=>{
        const {name , email, arr} = res.data;
        const userData = { name : name, email : email, arr : arr };
        navigate("/seeProfile", {state:{userData : userData, my_email : props.myEmail}})
        console.log(name);
  } );
  }

    return (
      <div className="card">
        <div className="top">
          <h3 className="name" >{props.email}</h3>
          <img className="circle-img" /*src={props.img} */alt="Not Uploaded"  />
        </div>
        <div className="bottom"> 
          <p className="info"> </p>
        </div>
          <button className=" btn" onClick={handleClick_profile} >See Profile</button>
      </div>
    );
  }
  
  export default Card;
  