import { useState } from "react";
import "./public/styles.css";
import {useNavigate} from "react-router-dom"
import axios from "axios";

function Login(props) {

    const [ loginData, setLoginData] = useState({
        email : "",
        password : "",
    });
    
    //console.log(props.a);
    function change(event){
        const name = event.target.name;
        const value = event.target.value;
        setLoginData( (prev)=>{
            return {
                ...prev,
                [name] : value
            }
        } )

    }


    
    const navigate = useNavigate();
    async function handleClick(){
        let userData ;
        const log_data = loginData;
        setLoginData({
            email : "",
            password : "",
        })
        const res = await axios.post("/login",log_data);
        

        const {name , email, arr} = res.data.user;
        userData = { name : name, email : email, arr : arr };
        console.log(userData);
        props.loggedIn()

        
        
        navigate("/profile", {state:{userData : userData, islog : true}})
    }

    return (
        <div>
            <center>
            <div className="home">
            <center> <br/>
                <h1><u>Sign In</u></h1><br/>
                <p><u>
                       
                    </u></p>
            </center>

            <center>
                
                    <br/><br/>

                    <p>Email -- </p><input name="email" onChange={change} value = {loginData.email}/><br/><br/>
                    <p>Password: -- </p><input name="password" onChange={change} value = {loginData.password}/><br/><br/>

                    <button className="btn btn-primary" onClick = {handleClick}>Sign In</button>
                
                
                <p>OR</p>
                <a href="/register"> <button className="btn"> Sign Up</button> </a>

            </center>

        </div>
        </center>
        </div>
    );
}

export default Login;