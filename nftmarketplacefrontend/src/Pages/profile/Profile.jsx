import React, { useEffect, useRef, useState } from 'react'
import Explore from './subpage/Explore'
import "./profile.css"
import Addasset from './subpage/Addasset'
import axios from 'axios'
function Profile() {
    const [sb , setSb] = useState("ma")
    const drawer = useRef(null)
    const [user,setUser] = useState(null)
    const [assets,setAssets] = useState([])
    
    
    const checkStorage = ()=>{
       const parse = JSON.parse(localStorage.getItem("user"))
       setUser(parse)
       allassetinfo(parse)
       
    }


    const allassetinfo = async (userinfo)=>{
        console.log("hello")
        const response = await axios.post(`http://localhost:2000/userasset`,{
            id: userinfo._id
        },
        {
            headers: {
                'Content-Type': 'application/json'  // Important for JSON data
            }
        }
        )

       setAssets(response.data.documents)           
    }

    useEffect(()=>{
        checkStorage()  
    },[])

    useEffect(()=>{
        console.log(user)
    },[user])
    return (
        <div className='relative'>

            <div className='flex flex-column backdrop-blur z-50'>
                <div className="drawer drawer-end z-50">
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" ref={drawer} />
                    <div className="drawer-content z-50">
                        {/* Page content here */}
                    
                        <label htmlFor="my-drawer-4" className="drawer-button btn backdrop-blur">
                            <div
                                title="Add New"
                                className="group cursor-pointer outline-none hover:rotate-90 duration-300"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="50px"
                                    height="50px"
                                    viewBox="0 0 24 24"
                                    class="stroke-slate-400 fill-none group-hover:fill-slate-800 group-active:stroke-slate-200 group-active:fill-slate-600 group-active:duration-0 duration-300"
                                >
                                    <path
                                        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                                        stroke-width="1.5"
                                    ></path>
                                    <path d="M8 12H16" stroke-width="1.5"></path>
                                    <path d="M12 16V8" stroke-width="1.5"></path>
                                </svg>
                            </div>

                        </label>
                        
                        {sb=="aa" && (<Addasset user={user} setUser={setUser}/>)}
                        {sb=="ma" && (<Explore user={user} assets={assets}  setUser={setUser}/>)}
                        {/* <Explore /> */}
                      

                    </div>
                    <div className="drawer-side w-full h-full z-50">
                        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay z-50"></label>
                        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content backdrop-blur z-50" >
                            {/* Sidebar content here */}
                            <li><button className="btn btn-neutral z-50 m-5 pt-4" onClick={()=>{
                                setSb("ma")
                                drawer.current.checked = false
                            }}>
                                <div className='assetvg pr-2'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="15"
                                        height="15"
                                        fill="none"
                                        stroke="#cccccc"
                                        strokeLinejoin="round"
                                        strokeWidth="12"
                                        viewBox="0 0 192 192"
                                    >
                                        <path d="M30 152V40a10 10 135 0110-10h112a10 10 45 0110 10v112a10 10 135 01-10 10H40a10 10 45 01-10-10z"></path>
                                        <path d="M97.5 86.5H162L86.5 162V97.5a11 11 135 0111-11z"></path>
                                    </svg>
                                </div>

                                <a className='manageasset'>Manage Assets</a>

                            </button></li>
                            <li><button className="btn btn-neutral z-50 m-5 pt-4"
                             onClick={()=>{
                                setSb("aa")
                                drawer.current.checked = false
                            }}>
                            
                                <div className="flex flex-row">
                                    <div className='pb-16 pr-12'>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill="#cccccc"
                                                fillRule="evenodd"
                                                d="M3 14.25a.75.75 0 01.75.75c0 1.435.002 2.436.103 3.192.099.734.28 1.122.556 1.399.277.277.665.457 1.4.556.754.101 1.756.103 3.191.103h6c1.435 0 2.436-.002 3.192-.103.734-.099 1.122-.28 1.399-.556.277-.277.457-.665.556-1.4.101-.755.103-1.756.103-3.191a.75.75 0 011.5 0v.055c0 1.367 0 2.47-.116 3.337-.122.9-.38 1.658-.982 2.26-.602.602-1.36.86-2.26.982-.867.116-1.97.116-3.337.116h-6.11c-1.367 0-2.47 0-3.337-.116-.9-.122-1.658-.38-2.26-.982-.602-.602-.86-1.36-.981-2.26-.117-.867-.117-1.97-.117-3.337V15a.75.75 0 01.75-.75z"
                                                clipRule="evenodd"
                                                opacity="0.5"
                                            ></path>
                                            <path
                                                fill="#cccccc"
                                                fillRule="evenodd"
                                                d="M12 2.25a.75.75 0 01.553.244l4 4.375a.75.75 0 11-1.107 1.012l-2.696-2.95V16a.75.75 0 01-1.5 0V4.932l-2.696 2.95a.75.75 0 01-1.108-1.013l4-4.375A.75.75 0 0112 2.25z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </div>

                                    <a>Add Asset</a>
                                </div>
                            </button></li>
                            <li><button className="btn btn-neutral z-50 m-5 pt-4">
                                <div className="flex flex-row">
                                    <div className='pb-16 pr-2'>
                                        <svg
                                            className=''
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="15"
                                            height="15"
                                            viewBox="0 0 20 20"
                                        >
                                            <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                                                <g fill="#cccccc" transform="translate(-140 -2159)">
                                                    <g transform="translate(56 160)">
                                                        <path d="M100.563 2017H87.438c-.706 0-1.228-.697-.961-1.338 1.236-2.964 4.14-4.662 7.523-4.662 3.384 0 6.288 1.698 7.524 4.662.267.641-.255 1.338-.961 1.338m-10.646-12c0-2.206 1.832-4 4.083-4 2.252 0 4.083 1.794 4.083 4s-1.831 4-4.083 4c-2.251 0-4.083-1.794-4.083-4m14.039 11.636c-.742-3.359-3.064-5.838-6.119-6.963 1.619-1.277 2.563-3.342 2.216-5.603-.402-2.623-2.63-4.722-5.318-5.028-3.712-.423-6.86 2.407-6.86 5.958 0 1.89.894 3.574 2.289 4.673-3.057 1.125-5.377 3.604-6.12 6.963-.27 1.221.735 2.364 2.01 2.364h15.892c1.276 0 2.28-1.143 2.01-2.364"></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>

                                    <a>Profile settings</a>
                                </div>


                            </button></li>
                        </ul>
                    </div>
                </div>

                <a className="btn btn-ghost text-3xl pixfont absolute z-[-9999] right-0">ArtPix</a>
            </div>


        </div>
    )
}

export default Profile