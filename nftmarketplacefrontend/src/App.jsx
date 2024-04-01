import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Pages/login/Login';
import Home from './Pages/home/Home';
import Profile from './Pages/profile/Profile';


function App() {

  return (
    <BrowserRouter >
       <Routes>
        <Route path='/'element={<Home/>}></Route>
         <Route path='/login' element={<Login/>}/>
         <Route path='/profile' element={<Profile/>}/>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
