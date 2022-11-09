import Card from "./components/Card_search";
import {useLocation} from "react-router-dom";
import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios";

function Search(){

    const [data, setData] = useState([]);
    const [friend_data, setFriendData] = useState([]);
    const {state} = useLocation();
    const email = state.email;
    
    function callCard(ele, ind){

        let isfriend = false;
        friend_data.map( (already_friend)=>{
            if(already_friend == ele.email){
                isfriend = true;
                return ;
            }
        } )

        if(!isfriend)
        return <Card 
        key = {ind} 
        name = {ele.name} 
        email = {ele.email}  
        myEmail = {email}
        />
    }

    useEffect( () => { 
        async function fetchData() {
            try {
                const res = await fetch('/search'); 
                const userData = await res.json();
                setData(userData);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();

        async function fetch_friend_Data() {
            try {
                axios.post("/friends",{email : email}).then( async  res=>{
                    console.log(res.data);
                    setFriendData(res.data.friends);
                } )                
            } catch (err) {
                console.log(err);
            }
        }
        fetch_friend_Data();


    }, []);

    const navigate = useNavigate();
    function handleClick(){

    }

    return <div>
         
         <div className="details">
        <button className="btn" onClick={ ()=>{navigate("/profile")} } > Back </button>
        {/*<button className="btn " onClick={ ()=>{navigate("/friends")} }  > My Friends </button>*/}
    </div>

        {
        data.map( callCard )
         }
        </div>



    /*
async function create(){

        async function fetch_data(){
            const res = await fetch("/search");
            const data  = await res.json();
            return ["a","a","a","a"]
        }

        fetch_data().then( (data)=>{
           return <div>
             {data.map( (ele, ind)=>{
                return <Card key = {ind} name = "ram" email = "ram" />
            } )} 
        </div> })
    }

   
    return <div>
        <h1> Connect with new people </h1>
       {Promise.all(create())}
    </div>
*/
}

export default Search;