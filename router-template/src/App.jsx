import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form"
import './App.css';
import { createBrowserRouter, RouterProvider, useNavigate, useParams } from "react-router-dom";

//1. Create a new compoment called MainPage. Add e.g. just header there containint something.
//2. Create routing for existing UserInfo and MainPage components. The corresponding paths are /login and /home
//3. Add navigation so that clicking the Login button navigates to the Home page.
//4. Pass the username as a parameter to the home and the home shows header "Welcome username!"
//5. Finally add a logout button to the home page. The button navigates back to the login page.

const router = createBrowserRouter([
  {path: '/login', element: <UserInfo/>},
  {path: '/home/:uname?', element: <MainPage/>},
]);

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

function MainPage(){

  const {uname} = useParams();
  const nav = useNavigate();

  return(
    <div>
      <h1>Welcome {uname}!!!</h1>
      <Button variant="contained" onClick={()=>nav('/login')}>Logout</Button>
    </div>
  );
}

function UserInfo(){

  const {register, handleSubmit} = useForm();

  const nav = useNavigate();

  //This function is called when submitting the form
  //Data contains username and password in an object
  function submitUser(data){
    nav('/home/'+data.username);
  }

  return(
    <form onSubmit={handleSubmit(submitUser)} className="form">
      <TextField label='Username' {...register('username')} variant="filled"/><br/>
      <TextField label='Password' {...register('password')} variant="filled"  type="password"/><br/>
      <Button type="submit" variant="contained">Login</Button>
    </form>
  )
}

export default App
