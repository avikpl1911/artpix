import React from 'react'

function Profile() {
    return (
        <div className='relative'>

            <div className='flex flex-column backdrop-blur z-50'>
                <div className="drawer drawer-end z-50">
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
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

                        
                        <div className='z-10'>
                <div className='w-full glass p-10'>
                    <img className='mx-auto w-72 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKYd9Ybdsn4nIQNF5hlL1me7oD83Rg4FQ_Vw&usqp=CAU" alt="" />
                    <p className='text-center text-mono text-5xl mt-5 pixfont'>Richard Fox</p>
                </div>



                <p className='pixfont pt-16 text-5xl pl-5'>Your Assets</p>
                <div className='pt-12'>
                    <div className="overflow-x-scroll">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src="https://daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Hart Hagerty</div>
                                                <div className="text-sm opacity-50">United States</div>
                                            </div>
                                        </div>
                                    </td>
                                    
                                    <th>
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </th>
                                </tr>
                                {/* row 2 */}
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src="https://daisyui.com/tailwind-css-component-profile-3@56w.png" alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Brice Swyre</div>
                                                <div className="text-sm opacity-50">China</div>
                                            </div>
                                        </div>
                                    </td>
                                    
                                    <th>
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </th>
                                </tr>
                                {/* row 3 */}
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src="https://daisyui.com/tailwind-css-component-profile-4@56w.png" alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Marjy Ferencz</div>
                                                <div className="text-sm opacity-50">Russia</div>
                                            </div>
                                        </div>
                                    </td>
                                    
                                    <th>
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </th>
                                </tr>
                                {/* row 4 */}
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src="https://daisyui.com/tailwind-css-component-profile-5@56w.png" alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Yancy Tear</div>
                                                <div className="text-sm opacity-50">Brazil</div>
                                            </div>
                                        </div>
                                    </td>
                                    
                                    <th>
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </th>
                                </tr>
                            </tbody>


                        </table>
                    </div>
                </div>

            </div>


                    </div>
                    <div className="drawer-side w-full h-full z-50">
                        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay z-50"></label>
                        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content backdrop-blur z-50" >
                            {/* Sidebar content here */}
                            <li><button className="btn btn-neutral z-50 m-5 pt-4"><a href="">Neutral</a></button></li>
                            <li><button className="btn btn-neutral z-50 m-5 pt-4"><a href="">Neutral</a></button></li>
                            <li><button className="btn btn-neutral z-50 m-5 pt-4"><a href="">Neutral</a></button></li>
                        </ul>
                    </div>
                </div>

                <a className="btn btn-ghost text-3xl pixfont absolute z-[-9999] right-0">ArtPix</a>
            </div>
           

        </div>
    )
}

export default Profile