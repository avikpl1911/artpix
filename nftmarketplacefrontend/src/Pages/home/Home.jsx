import React, { useEffect, useReducer, useRef, useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import Card from '../../components/card/Card';
import "./home.css"
import Header from '../../components/Header/Header';
import Details from '../../components/Details/Details';
import  axios  from 'axios';
function Home() {

    const [currasset,setCurrasset] = useState({})
    const [res,setres] = useState(false)

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
  


    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 4 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 767, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    const det = useRef(null)
    
    const [dat,setDat] = useState([])
     
     const handlehome = async ()=>{
          const res = await axios.get("http://localhost:2000/home");
          console.log(res.data)
          var arr = []
          for(var i = 0 ; i < res.data.randomUniqueObjects.length ; i++){
             arr.push(res.data.randomUniqueObjects[i].assetid)
          }
         
          const response  = await axios.post("http://localhost:2000/mutiasset",{
            arr: arr
          },{
            headers: {
                'Content-Type': 'application/json'  // Important for JSON data
            }
        })

        setDat(response.data.documents)

          
     }

    useEffect(()=>{
      handlehome()
    },[])

    return (
        <>
            <Header />

            <Carousel
                className='pt-20 z-10'
                responsive={responsive}
                autoPlay={true}
                swipeable={true}
                draggable={true}
                arrows={isMobile ? false : true}
                infinite={true}
                partialVisible={false}
  
            >   
                {dat.map((d)=>{
                    return(
                        <div key={d._id} onClick={()=>{
                            det.current.showModal()  
                            processdata(d)
                            }}><Card asset={d} /></div>
                    )
                      
                })}
               
                
            </Carousel>

            <p className='pixfont text-5xl ml-4'>Popular Pix</p>

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
        </>
    )
}

export default Home