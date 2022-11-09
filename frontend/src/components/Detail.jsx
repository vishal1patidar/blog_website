import React from "react";

function Detail(props){
    return <div className="details">

        <button className="btn" onClick={props.handleClick_search}> Search People </button> 
        <button className="btn " onClick={props.handleClick_friends}>My Friends </button>
        
        <button className="btn" onClick={props.handleClick_logout}> Logout </button>

        <p > Name : {props.name} <br />
         Email : {props.email} </p>
    </div>

}

export default Detail;