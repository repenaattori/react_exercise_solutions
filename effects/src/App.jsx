import axios from "axios"
import { useEffect, useState } from "react";

function App() {

  const [device, setDevice] = useState(null);
  const [id, setId] = useState(1);

  //Fetching device on mount and every time the id changes
  useEffect(()=>{    
    axios.get('https://api.restful-api.dev/objects/'+id)
      .then( resp => setDevice(resp.data) )
  }, [id]);

  //Starting interval only on mount
  useEffect(()=>{
    setInterval(()=>{
      setId(prev => prev+1);
    }, 1000);
  },[]);

  //Question mark after device for calling name only if the device is not null (conditional chaining)
  //(otherwise returning null)
  //Prevents error in the first render.
  return (
    <div>
      <h2>{device?.name}</h2> 
    </div>
  )
}

export default App
