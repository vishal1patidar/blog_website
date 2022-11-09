import React, { useState } from "react";
import "../public/my_profile.css"

function CreateArea(props) {
  const [data, setData] = useState({
    index : props.arr_size + 1,
    title: "",
    content: "",
    email_liked : []
  });

  function change(event) {
    const name = event.target.name;
    const value = event.target.value;
    setData((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  }

  function click(event) {
    props.click(data);
    setData( (prev)=>{
      return {
        ...prev,
        title: "",
        content: "",
      }
    } );
  }

  return  <div className="compose_area" >
            <h3><center>Create New Blogs Here</center></h3>
                       <br/>
                <p>Title : </p> <input name="title"  onChange={change}/><br/>
                <br/>
                <p>Content : </p> <textarea name="content" rows="3" onChange={change}></textarea>
                <br/><br/>
                <center><button type="submit" className="btn" onClick={click}>Compose</button></center>
        
        </div>
          
}

export default CreateArea;


/*
    <div>

      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={change}
          value={data.title}
        />

        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={change}
          value={data.content}
        />

        <button onClick={click}>Add</button>
      </form>
    </div>
    */
  