import axios from "axios";

async function Send_Data(url,data){
    axios.post(url,data).then( async  res=>{
        console.log(res.data);
    } )
    /*
    const res = await fetch(url,{
      method : "POST",
      headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      */
  }

  export default Send_Data;
