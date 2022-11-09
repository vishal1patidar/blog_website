import Card from "./components/Card_friends";
import {useLocation} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"

function Friends(){

    const [data, setData] = useState([]);
    const {state} = useLocation();
    const email = state.email;
    
    function callCard(ele, ind){
        return <Card 
        key = {ind} 
        //name = {ele.name} 
        email = {ele}  
        myEmail = {email}
        />
    }

    useEffect( () => { 
        async function fetchData() {
            try {
                axios.post("/friends",{email : email}).then( async  res=>{
                    console.log(res.data);
                    setData(res.data.friends);
                } )                
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);
    
    const navigate = useNavigate();
    console.log(data)
    return <div>

        <div className="details">
        <button className="btn" onClick={ ()=>{navigate("/profile")} } > Back </button>
        {/*<button className="btn "  onClick={ ()=>{navigate("/search")} } > Search New </button>*/}
    </div>

        <h1> Your Friends </h1>
        {data.map( callCard )}
    </div>
}

export default Friends;