import axios from "axios";
import { useState } from "react";
import "./card_styles.css"

function Card(props) {

  const [is_connect , setIsConnect] = useState(false);

let isconnected = false;
  function handle_connect(){
    console.log("clicked")
    const obj = {
      myEmail : props.myEmail,
      friend : props.email
    }
    
    setIsConnect(true);

    axios.post("/search",obj).then( async  res=>{
      console.log(res.data);
  } );
  }

    return (
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <img className="circle-img" /*src={props.img} */alt="Not Uploaded"  />
        </div>
        <div className="bottom">
          <p className="info"> Email : {props.email}</p>
        </div>
        {is_connect && <h3>Connected</h3> }
         {!is_connect &&  <button className="but btn" onClick={handle_connect} >Connect</button>}
      </div>
    );
  }
  
  export default Card;
  