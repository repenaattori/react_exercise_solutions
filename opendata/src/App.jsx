import axios from "axios";
import { useState } from "react";
import { get, set } from "react-hook-form";

function App() {

  //https://restful-api.dev/
  const [name, setName] = useState('');
  const [id, setId] = useState('');

  async function getData(){

    try{
      const response = await axios('https://api.restful-api.dev/objects/'+id);
      const data = response.data;
      response.s
      setName(data.name);
    }catch(e){
      setName('ERROR! NO DEVICE FOUND!!')
    }
  }

  return (
      <div>
        <input type="text" value={id} onChange={e => setId(e.target.value)}/>
        <button onClick={getData}>OK</button>
        <h1>{name}</h1>
      </div>
  )
}

function AxiosTask2(){
  const [devices, setDevices] = useState([]);

  async function getData(){
    const response = await axios('https://api.restful-api.dev/objects');
    const devices = response.data;
    setDevices(devices);
  }

  let sum = 0;

  //Some of the prices where with capilal letter "Price" so this won't count all
  for (const d of devices) {
    if(d.data?.price){
      console.log(d.data.price);
      sum += Number(d.data.price);
    }
  }

  return (
    <div>
      <button onClick={getData}>OK</button>
      <h3>Sum of prices is {sum.toFixed(2)}</h3>
      <ul>
        {
          devices.map(device => <li key={device.id}>{device.name}</li>)
        }
      </ul>
    </div>
)

}


function MultipleUsers(){

  
  const [users, setUsers] = useState([]);

  async function getUsers(){
    const response = await axios.get('https://reqres.in/api/users?page=2');
    const jsonBody = response.data;

    const myUsers = jsonBody.data.map(user => ({id: user.id, fname: user.first_name, lname: user.last_name}));


    setUsers(myUsers);
  }

  return(
    <div>
      <button onClick={getUsers}>OK</button>
      <ul>
        {
          users.map(user => <li key={user.id}>{user.fname} {user.lname}</li>)
        }
      </ul>
    </div>
  )
}



export default App
