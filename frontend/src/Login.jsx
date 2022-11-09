import { useState } from "react";
import "./public/styles.css";
import {useNavigate, NavLink} from "react-router-dom"
import axios from "axios";

function Login(props) {

    const [ loginData, setLoginData] = useState({
        email : "",
        password : "",
    });
    const [status, setStatus] = useState("");
    
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
        
        const log_data = loginData;
        setLoginData({
            email : "",
            password : "",
        })
        
        await axios.post("/login",log_data).then( async (res)=>{
            //console.log(res);
            const {log, message} = res.data;
            if(log === true){
                const {email, name , arr } = res.data.user;
                const userData = { name : name, email : email, arr : arr };
                navigate("/profile");
            }
            const mes = res.data.message;
        setStatus(mes);
        //console.log(res);
        } )
    }

    return (
        <div>
            <center>
            <div className="home">
            <center> <br/>
                <h1><u>Sign In</u></h1><br/>
                <p><u>
                       {status}
                    </u></p>
            </center>

            <center>
                
                    <br/><br/>
                    <p>Email -- </p><input name="email" onChange={change} value = {loginData.email}/><br/><br/>
                    <p>Password: -- </p><input name="password" onChange={change} value = {loginData.password}/><br/><br/>

                    <button className="btn btn-primary" onClick = {handleClick}>Sign In</button>
                
                
                <p>OR</p>
                <NavLink to = "/login"> <button className="btn2">Sign In</button> </NavLink>

            </center>

        </div>
        </center>
        </div>
    );
}

export default Login;
