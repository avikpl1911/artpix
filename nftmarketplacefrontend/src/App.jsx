import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Pages/login/Login';
import Home from './Pages/home/Home';
import Profile from './Pages/profile/Profile';
import Signup from './Pages/signup/Signup';
import Searchpage from './Pages/Searchpage/Searchpage';
import PrivateRoute from './components/privateroute/PrivateRoute';


function App() {
  const auth = localStorage.getItem("status")
  return (
    <BrowserRouter >
       <Routes>

       <Route element={<PrivateRoute isauth={auth} />}>
       <Route path='/'element={<Home/>}></Route>
       <Route path='/profile' element={<Profile/>}/>  
       <Route path='/search/:find' element={<Searchpage/>}/>
       </Route>
       


       <Route path='/login' element={<Login/>}/>
       <Route path='/signup' element={<Signup/>}/>
         
       </Routes>
    </BrowserRouter>
  );
}

export default App;
