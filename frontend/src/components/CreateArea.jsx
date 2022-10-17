import React, { useState } from "react";

function CreateArea(props) {
  const [data, setData] = useState({
    title: "",
    content: ""
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
    setData({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
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
  );
}

export default CreateArea;
