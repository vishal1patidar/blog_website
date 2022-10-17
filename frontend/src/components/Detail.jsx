import React from "react";

function Detail(props){
    return <div className="details">
        <p> Name : {props.name} </p>
        <p> Email : {props.email} </p>
    </div>

}

export default Detail;