import React, { useState} from "react";
import "./public/my_profile.css"
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import Detail from "./components/Detail";
import Send_Data from "./Send_Data";
import { useNavigate, useLocation } from "react-router-dom";

//const userData = {name : "him", email : "h.com" , arr : [{title : "1", content : "con"}]};

function Profile() {
  const {state} = useLocation();
  const userData = state.userData;
  const islog = state.islog;
  const [arr, setArr] = useState(userData.arr);
  const [detail,setDetail] = useState( { name : userData.name, email : userData.email } );
  
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

  const navigate = useNavigate();
  function handleClick_search(){
    navigate("/search",{state:{email : userData.email}})
  }

  function handleClick_friends(){
    navigate("/friends",{state:{email : userData.email}})
  }

  return (
    <div >
      
      <Detail 
      name = {detail.name} 
      email = {detail.email} 
      handleClick_search = {handleClick_search} 
      handleClick_friends = {handleClick_friends}/>

      <br/>

      
      <CreateArea click={click_new_post} />    
      
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
          />
        } )
      }
      </div>
      
      
    </div>
  );
}

export default Profile;
