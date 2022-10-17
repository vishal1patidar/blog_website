import React from "react";

function Note(props) {

  function click(){
    console.log("click")
    props.del(props.id) 
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick = {click} >DELETE</button>
    </div>
  );
}

export default Note;
