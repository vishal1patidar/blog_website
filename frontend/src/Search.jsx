import Card from "./components/Card_search";
import {useLocation} from "react-router-dom";
import {useState, useEffect} from "react";

function Search(){

    const [data, setData] = useState([]);
    const {state} = useLocation();
    const email = state.email;
    
    function callCard(ele, ind){
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
    }, []);
    return <div>{data.map( callCard ) }</div>



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