import React, { useState } from 'react'
import "./addasset.css"

function Addasset() {

    const [imageUrl, setImageUrl] = useState(null);
    return (
        <div
            className='h-screen w-svw'>

            <div
                className='w-72 h-80 mx-auto mt-44 '
            >


                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        fill="none"
                        stroke="#ccc"
                        transform="scale(-1 1)"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14.264 15.938l-1.668-1.655c-.805-.798-1.208-1.197-1.67-1.343a2 2 0 00-1.246.014c-.458.155-.852.563-1.64 1.379L4.045 18.28m10.22-2.343l.341-.338c.806-.8 1.21-1.199 1.671-1.345a2 2 0 011.248.015c.458.156.852.565 1.64 1.382l.836.842m-5.736-.555l4.011 4.018m0 0c-.357.044-.82.044-1.475.044H7.2c-1.12 0-1.68 0-2.108-.218a2 2 0 01-.874-.874 1.845 1.845 0 01-.174-.628m14.231 1.676a1.85 1.85 0 00.633-.174 2 2 0 00.874-.874C20 18.48 20 17.92 20 16.8v-.307M4.044 18.28C4 17.922 4 17.457 4 16.8V7.2c0-1.12 0-1.68.218-2.108a2 2 0 01.874-.874C5.52 4 6.08 4 7.2 4h9.6c1.12 0 1.68 0 2.108.218a2 2 0 01.874.874C20 5.52 20 6.08 20 7.2v9.293M17 9a2 2 0 11-4 0 2 2 0 014 0z"
                        ></path>
                    </svg>
                    <input type="text" className="grow" placeholder="Asset Name" />
                </label>
                <label for="file" class="custum-file-upload mx-auto mt-2 glass" onChange={(e) => {


                    setImageUrl(URL.createObjectURL(e.target.files[0]))
                }}>

                    {imageUrl ?
                        (<>
                            <img src={imageUrl} alt="Selected File" />
                        </>) :
                        (<>
                            <div class="icon">
                                <svg viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" fill=""></path> </g></svg>
                            </div>
                            <div class="text">
                                <span>Click to upload Asset</span>
                            </div>
                            <input id="file" type="file" />
                        </>)}


                </label>
                {imageUrl!=null && (
                    <div className='w-full'>
                        <div className='mx-auto w-fit pt-2'>
                            <button className="btn btn-success mr-1" onClick={() => {

                            }}>Accept</button>
                            <button className="btn btn-error ml-1"
                                onClick={() => {
                                    setImageUrl(null)
                                }}
                            >Cancel</button>
                        </div>
                    </div>
                )}


            </div>

        </div>
    )
}

export default Addasset