import React, { useEffect, useState } from "react";
import "../public/my_profile.css"
import axios from "axios";

function Note(props) {

  const [like, setLike]  = useState(props.email_liked.length);
  const [isLiked, setIsLiked] = useState(false);

  function click(){
    console.log("click")
    props.del(props.id) 
  }

  function click_like(){
    setLike(like + 1);
    setIsLiked(true);

    axios.post("/add_like",{visitor_email : props.visitor_email, host_email : props.host_email, index : props.id })

  }

  function checkLike(email, arr){
    let ans = false;
    arr.map( (ele)=>{
      if(ele === email) {ans = true; return true;}
    } )
    if(ans) return true;
  }
//console.log(props.email_liked);
useEffect( ()=>{
  setIsLiked( checkLike(props.visitor_email, props.email_liked) )
}, []);


  return (
    <div className="blog">
      <h1>{props.title} </h1>
      <p>{props.content}</p>
      <button> {like} Likes </button>
      <button className="deletebutton" onClick = {click} >DELETE</button>
      {!isLiked ? <button className="likebutton" onClick={click_like} >LIKE</button> : <button className="likebutton" >LIKED</button>}
    </div>
  );
}

export default Note;
