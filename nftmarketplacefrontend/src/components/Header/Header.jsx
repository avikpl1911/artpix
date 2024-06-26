import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

function Header() {

    const [sbar, setSbar] = useState(true)
   const [sear,setSear] = useState("")
   const navigate = useNavigate()
    return (
        <div>

            <div className=" fixed z-50 w-full">
                <div className='navbar bg-base-100 backdrop-blur'>
                    <div className="navbar-start">
                        <div className="dropdown z-50">
                            <div tabIndex={0} role="button" className="btn btn-ghost backdrop-blur lg:hidden z-50"
                                onClick={() => {
                                    setSbar(true)
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className=" backdrop-blur menu menu-sm dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52 "

                            >
                                <li><a>Item 1</a></li>
                                <li>
                                    <a

                                    >Parent</a>
                                    <ul className="p-2 z-50">
                                        <li className='z-50'><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </li>
                                <li><a>Item 3</a></li>
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-2xl pixfont">ArtPix</a>
                    </div>
                    <div className="navbar-center hidden  lg:flex">
                        <ul className="menu  menu-horizontal px-1">
                            <li><a>Item 1</a></li>
                            <li>
                                <details>
                                    <summary
                                        onClick={() => {
                                            setSbar(true)
                                        }}
                                    >Parent</summary>
                                    <ul className="p-2">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </details>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <div className="navbar-end " onClick={() => {
                            setSbar(false)
                        }} >
                        <button className="btn btn-ghost btn-circle mx-8">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                        {/* <a className="" >Button</a> */}
                    </div>
                    {/*  search */}
                    {/* search-end */}


                    <div className="dropdown dropdown-end end" onClick={() => {
                        setSbar(true)
                    }}>
                        <div tabIndex={0} role="button" className="backdrop-blur btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="backdrop-blur mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                             
                                </a>
                            </li>
                  
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
                <div className={`join z-40 ${sbar && "hidden"} w-full backdrop-blur`}>
                    <div className='w-full'>
                        <div className='w-full'>
                            <input className="input input-bordered join-item w-full" value={sear}
                            onChange={(e)=>{
                                setSear(e.target.value)
                            }}
                            placeholder="Search" />
                        </div>
                    </div>
                    <select className="select select-bordered join-item">
                        
                        <option selected>Art</option>
                        <option>User</option>
                        
                    </select>
                    <div className="indicator">

                        <button className="btn join-item" onClick={()=>{
                            navigate(`/search/${sear}`)
                        }}>Search</button>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Header