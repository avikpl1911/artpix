import React, { useRef, useState } from 'react'
import { useNavigate } from "react-router-dom";
import "./signup.css"
import axios from "axios"

function Signup() {
    const modal = useRef(null)
    const [prof, setProfpic] = useState(null);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [file, setFile] = useState(null)
    const [error,seterror] = useState("")
    const navigate = useNavigate();
    const formData = new FormData();
    formData.append('file', file);

    const getBase64 = (fileoo) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(fileoo);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    };

    const handleSubmit = async () => {
        const base64Data = await getBase64(file);

        const response = await axios.post("http://localhost:2000/signup", {
            data: {
                email: email,
                username: username,
                password: password,
                img: base64Data
            }
        }, {
            headers: {
                'Content-Type': 'application/json'  // Important for JSON data
            }
        });
        console.log(response.data)
        if(response.data.status==1){
         seterror(response.data.error)
        }else{
         const strdata = JSON.stringify(response.data)
          localStorage.setItem("status",0)
          localStorage.setItem("user",JSON.stringify(response.data.savedUser))
          navigate("/")
        };
          

    }



    return (
        <div>
            <div className='pixfont text-center  m-10 font-mono text-5xl bg-gradient-to-r from-teal-300 via-indigo-400 to-purple-400 inline-block text-transparent bg-clip-text'>
                <img src="https://iili.io/Jw1CeRV.png" alt="Jw1CFMg.md.jpg" border="0"></img>
                Art Market.
            </div>
            <div className='absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2'>
                <p className='text-5xl pixfont mb-52'>Sign Up</p>
                <div className=' glass h-80 w-96 p-1 rounded-md'>
                    <label className="input input-bordered flex items-center gap-2 m-6 pixfont">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input type="text " className="grow" placeholder="Email"
                            onChange={(e) => { setEmail(e.target.value) }}
                        />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 m-6 pixfont">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                        <input type="text" className="grow" placeholder="Username"
                            onChange={(e) => { setUsername(e.target.value) }}
                        />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 m-6 pixfont" >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                        <input type="password" className="grow"
                            onChange={(e) => { setPassword(e.target.value) }}
                        />
                    </label>
                    <div>

                        <button
                            onClick={() => {
                                modal.current.showModal()
                            }}
                            className=" pixfont text-center px-auto text-2xl btn btn-wide w-3/5 absolute bottom-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2">Sign Up</button>
                    </div>


                    <dialog id="my_modal_1" ref={modal} className="modal">
                        <div className="modal-box glass backdrop-blur" >
                            <h3 className="font-bold text-lg">Select A Profile Picure</h3>
                            {prof ? (<>
                                <img src={prof} className='w-72 h-72 rounded-full mx-auto' alt="" />
                            </>) : (
                                <>
                                    <div className='w-72 h-72 glass rounded-full mx-auto'></div>
                                </>)}

                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    {/* <button className="btn">Close</button> */}
                                </form>

                                <input type="file" className="file-input file-input-bordered w-full max-w-xs"
                                    onChange={(e) => {
                                        setFile(e.target.files[0])
                                        setProfpic(URL.createObjectURL(e.target.files[0]))
                                    }}
                                />
                                <div className='btn' onClick={() => {
                                    handleSubmit();
                                }}>Submit</div>
                            </div>
                        </div>
                    </dialog>

                </div>
            </div>
            <div class={` absolute bottom-1 left-1/2 transform  -translate-x-1/2  ${error==""&&"hidden"}  max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700`} role="alert">
                <div class="flex p-4">
                    <div class="flex-shrink-0">
                        <svg class="flex-shrink-0 size-4 text-red-500 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                        </svg>
                    </div>
                    <div class="ms-3">
                        <p class="ml-3 text-sm w-48 text-gray-700 dark:text-gray-400">
                            {error}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup