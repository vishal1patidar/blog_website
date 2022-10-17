import "./public/styles.css"
import { useState } from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios";

function Register() {

    const [ registerData, setRegisterData] = useState({
        name : "",
        email : "",
        password : "",
        c_password : ""
    });


    function change(event){
        const name = event.target.name;
        const value = event.target.value;
        setRegisterData( (prev)=>{
            return {
                ...prev,
                [name] : value
            }
        } )

    }


    function handleClick(event){
        axios.post("/register",registerData).then( res=>{
            //userData = res.data;
            console.log(res.data);
        } )
        //navigate("/profile")

        setRegisterData({
            name : "",
            email : "",
            password : "",
            c_password : ""
        })

        event.preventDefault();

    }



    return (
        <div>
            <center>
                <div className="home" >
                <center> <br/><h1><u>Sign Up</u></h1>
            </center>
    
        <center>
        
        <br/><br/>
        <input  name="name" placeholder="Name" onChange={change} value = {registerData.name}/>  <br/><br/>
        <input name = "email" placeholder="Email" onChange={change} value = {registerData.email}/> <br/><br/>
        <input name = "password" placeholder = "Password" onChange={change} value = {registerData.password}/> <br/><br/>
        <input name="c_password" placeholder="Confirm Password" onChange={change} value = {registerData.c_password} /> <br/><br/>
        <button className="btn" type="submit" onClick={handleClick}> submit </button>
        <br/><p>or</p><br/>
    
    <a href = "/login"> <button className="btn2">Sign In</button></a>
    
</center>
  
 </div>
</center>
        </div>
    );
}

export default Register;