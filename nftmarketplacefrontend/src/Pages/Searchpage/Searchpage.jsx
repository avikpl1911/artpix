import React, { useEffect, useRef, useState } from 'react'
import Header from '../../components/Header/Header'
import { useParams } from 'react-router-dom'
import Details from '../../components/Details/Details';
import Card from '../../components/card/Card';
import axios from "axios"
function Searchpage() {
    const { find } = useParams();
    console.log(find)
    const [currasset,setCurrasset] = useState({})
    
    const [res,setres] = useState(false)
    const det = useRef(null)
    
    const finddata =async ()=>{
        const res = await axios.get(`http://localhost:2000/find/${find}`)
        setDat(res.data)
    }

    useEffect(()=>{
        finddata()
    },[])


    const [detdat,setDetdat] = useState({
        username:"",
        listedAssets:[],
        profileImg:""
    })
        
    const [dat,setDat] = useState([])

    const processdata =async (asset)=>{
        const response = await axios.get(`http://localhost:2000/publicuser/${asset.OriginalOwner}`).then(setres(true))
      //   const res = await axios.get(`http://localhost:2000/islisted/${asset._id}`)
        console.log(response.data)
        setDetdat(response.data)
        setCurrasset(asset)  
      }
  
    
  return (
    <div>
        <Header/>
        <p className='pixfont text-5xl ml-4 pt-20'>Search Results</p>

            <div className='w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-10 gap-x-14 mt-10 mb-5'>
            {dat.map((d)=>{
                    return(
                        <div key={d._id} onClick={()=>{
                        det.current.showModal()  
                        processdata(d)
                        }}><Card asset={d} /></div>
                    )
                      
                })}
            </div>
            <Details asset={currasset} data={detdat} ref={det} />
    </div>
  )
}

export default Searchpage