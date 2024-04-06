import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import Details from '../../../components/Details/Details'

function Explore(props) {

 
    const [currdata,setcurrData] = useState({})
    const [currasset,setCurrasset] = useState({})
    const [res,setres] = useState(false)
    console.log(props.assets)
    const [detdat,setDetdat] = useState({
        username:"",
        listedAssets:[],
        profileImg:""
    })

    const processdata =async (asset)=>{
      const response = await axios.get(`http://localhost:2000/publicuser/${asset.OriginalOwner}`).then(setres(true))
    //   const res = await axios.get(`http://localhost:2000/islisted/${asset._id}`)
      console.log(response.data)
      setDetdat(response.data)
      setCurrasset(asset)  
    }



    const det = useRef(null)
    return (
        <div>



            <div className='z-10'>
                <div className='w-full glass p-10'>
                    {props.user && (<>
                        <img className='mx-auto w-72 rounded-full' src={`http://localhost:2000/profile/${props.user.profileImg}`} alt="" />
                        <p className='text-center text-mono text-5xl mt-5 pixfont'>{props.user.username}</p>
                    </>
                    )}

                </div>



                <p className='pixfont pt-16 text-5xl pl-10 pb-10'>Your Assets</p>

                <label className="input input-bordered flex items-center gap-2 w-fit ml-10">
                    <input type="text" className="" placeholder="Search" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                </label>

                <div className='pt-12'>
                    <div className="overflow-x-scroll">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>

                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {props.assets.map && props.assets.map((asset) => {
                                    return (

                                        <tr key={asset._id}>
                                            <th>

                                            </th>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={`http://localhost:2000/asset/${asset.file}`} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{asset.name}</div>
                                                        
                                                    </div>
                                                </div>
                                            </td>

                                            <th>
                                                <button className="btn btn-ghost btn-xs" onClick={()=>{
                                                  det.current.showModal()
                                                  processdata(asset)
                                                  
                                                }}
                                                >details</button>
                                            </th>
                                           
                                        </tr>
                                    )

                                })}

                                
                            </tbody>


                        </table>
                    </div>
                </div>
              <Details asset={currasset} data={detdat}  ref={det}/>
                
            </div>
            
        </div>
    )
}

export default Explore