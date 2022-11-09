import React, { useState} from "react";
import "./public/my_profile.css"
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import Detail from "./components/Detail";
import Send_Data from "./Send_Data";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect} from "react";
import axios from "axios";

//const userData = {name : "him", email : "h.com" , arr : [{title : "1", content : "con"}]};

function Profile() {  

  const [userData, setUserData] = useState({
    name : "",
    email : "",
    arr : []
  });

  const [arr, setArr] = useState([]);
  const [detail,setDetail] = useState( { } );
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect( ()=>{
    async function fun(){
      const res = await fetch("/load");
      const data = await res.json();
      
      if(data.userData == "Not Present"){
        console.log("cookie not present")
        navigate("/login");
      }

      setUserData({
        name : data.userData.name,
        email : data.userData.email,
        arr : data.userData.arr
      });
      //console.log(userData.arr);
      setArr(data.userData.arr);
      setDetail({
        name : data.userData.name, 
        email : data.userData.email
      })
      setLoading(false);
       }   

       fun();

  }, [] );
      
     
  //const {state} = useLocation();
  //const userData = props.userData;
  //console.log(userData);
  //const islog = state.islog;
  
  
  function click_new_post(data) {

    setArr((prev) => {
      return [...prev, data];
    });

    const new_data = {
      email : detail.email,
      data : data
    }

    const url = "/new_post";
    Send_Data(url,new_data);

  }

  function del(id){

    Send_Data("/delete_arr_ele", {email : detail.email, obj : arr[id]} )

    console.log("delet")
    setArr(
      (prev)=>{
        return prev.filter( (ele,ind)=>{
          return ind !== id
        } )
      }
    )
  }

  
  function handleClick_search(){
    navigate("/search",{state:{email : userData.email}})
  }

  function handleClick_friends(){
    navigate("/friends",{state:{email : userData.email}})
  }

  async function handleClick_logout(){
    const logout = {logout : "true"};
    const res = await axios.post("/logout", logout);
    console.log(res.data);
    navigate("/login");
  }

  if(!loading)
   return (
    <div >
      
      <Detail 
      name = {detail.name} 
      email = {detail.email} 
      handleClick_search = {handleClick_search} 
      handleClick_friends = {handleClick_friends}
      handleClick_logout = {handleClick_logout}/>

      <br/>

      
      <CreateArea click={click_new_post} arr_size = {arr.length} />    
      
      <div className="allblog">
        <h1> Your Blogs</h1>
      {
        arr.map( (ele,ind)=>{
          return <Note
            key = {ind}
            id = {ind}
            title = {ele.title} 
            content = {ele.content}
            del = {del}
            email_liked = {ele.email_liked}
            host_email = {userData.email}
            visitor_email = {userData.email}            
          />
        } )
      }
      </div>      
    </div>
  );
  else return <h1>Loading</h1>
}

export default Profile;
