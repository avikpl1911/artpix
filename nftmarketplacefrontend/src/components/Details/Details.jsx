import axios from 'axios'
import React, { forwardRef, useEffect, useState } from 'react'


const Details = forwardRef((props, ref) => {
    
    const [user,setUser] = useState({})
    
    useEffect(()=>{
        setUser(JSON.parse(localStorage.getItem('user')))
    },[])
    
    const handlebuy = ()=>{
        console.log(props.asset)
        const res = axios.post("http://localhost:2000/buy",{
            userid: user._id,
            assetid: props.asset._id,
            ownerid: props.asset.Owner
        },{
            headers: {
                'Content-Type': 'application/json'  // Important for JSON data
            }
        })

        if(res.status==200){
            window.location.reload()
        }
    }
   
    const handlelist = async ()=>{
        console.log(JSON.stringify(props.asset._id))
        const response = await axios.post("http://localhost:2000/list", {
            id: props.asset._id
        }, {
            headers: {
                'Content-Type': 'application/json'  // Important for JSON data
            }
        })

        if(response.status ==200) {
            window.location.reload()
        }
    }


    return (
        <div>
            <dialog id="my_modal_3" ref={ref} className="modal">
                <div className="modal-box glass backdrop-blur h-screen">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className='text-4xl pixfont'>
                         {props?.asset?.name}
                    </div>
                    <img className='mt-4 rounded-md h-56' src={`http://localhost:2000/asset/${props?.asset?.file}`}
                        alt="" />
                    <div class="flex items-center my-4">
                    <img src={`http://localhost:2000/profile/${props?.data?.profileImg}`} alt="BAYC" class="h-8 w-8 border border-white rounded-full mr-2" />
                
                    <p class="text-gray-400 text-[12px] pixfont">
                        Created by <a href="https://opensea.io/collection/boredapeyachtclub" target="_black" rel="no-opener"
                            class="text-white font-bold pixfont ">{props?.data?.username}</a>
                    </p>
                  
                   </div>
                    <div className='text-2xl pixfont'>
                        Description
                    </div>
                    <div className='text-sm pixfont'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                    </div>
                   {props?.asset?.Owner==user?._id ?  <button className="btn btn-active btn-neutral mt-4" onClick={handlelist}>{props?.asset?.listed ? "unlist" : "list"}</button> : 
                   <button className="btn btn-active btn-neutral mt-4" onClick={()=>{
                    
                    handlebuy()

                   }}>Buy</button>}
                   
                </div>
            </dialog>
        </div>
    )
})

export default Details