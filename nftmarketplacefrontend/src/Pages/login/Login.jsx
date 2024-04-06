import React, { useState } from 'react'
import "./login.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Login() {

     const [email,setEmail] = useState("");
     const [password,setPassword] = useState("")
     const navigate = useNavigate()
    const handleSubmit = async ()=>{
        const response = await axios.post("http://localhost:2000/login",{
            email: email,
            password: password
        },{
            headers: {
                'Content-Type': 'application/json'  
            }
        })

        if(response.data.status==1){
            console.log(response.data.error)
        }else{
             localStorage.setItem("status",0)
             localStorage.setItem("user",JSON.stringify(response.data.finduser))
             navigate("/")
        }
    }
     
    return (
        <div>
            <div className='pixfont text-center  m-10 font-mono text-5xl bg-gradient-to-r from-teal-300 via-indigo-400 to-purple-400 inline-block text-transparent bg-clip-text'>
            <img src="https://iili.io/Jw1CeRV.png" alt="Jw1CFMg.md.jpg" border="0"></img>
            Art Market.
            </div>
       <div className='absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2'>
               <p className='text-5xl pixfont mb-52'>Login</p>
                <div className='w-80 glass h-80 p-1 rounded-md'>
                    <label className="input input-bordered flex items-center gap-2 m-6 pixfont">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input type="email " className="grow" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
                    </label>
                    
                    <label className="input input-bordered flex items-center gap-2 m-6 pixfont" >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                        <input type="password" className="grow" onChange={(e)=>{setPassword(e.target.value)}}/>
                    </label>
                    <button
                    onClick={()=>{
                        handleSubmit()
                    }}
                    className=" pixfont text-2xl btn btn-wide w-3/5 absolute bottom-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2">Sign In</button>
                </div>
            </div>
   
        </div>

    )
}

export default Login