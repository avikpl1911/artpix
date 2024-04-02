import React, { useReducer, useRef } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import Card from '../../components/card/Card';
import "./home.css"
import Header from '../../components/Header/Header';
import Details from '../../components/Details/Details';
function Home() {
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
                <div onClick={()=>{det.current.showModal()}}><Card /></div>
                <div onClick={()=>{det.current.showModal()}}><Card /></div>
                <div onClick={()=>{det.current.showModal()}}><Card /></div>
                <div onClick={()=>{det.current.showModal()}}><Card /></div>
            </Carousel>

            <p className='pixfont text-5xl ml-4'>Popular Pix</p>

            <div className='w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-10 gap-x-14 mt-10 mb-5'>
                <div onClick={()=>{det.currenturrent.showModal()}}><Card /></div>
                <div onClick={()=>{det.current.showModal()}}><Card /></div>
                <div onClick={()=>{det.current.showModal()}}><Card /></div>
                <div onClick={()=>{det.current.showModal()}}><Card /></div>
            </div>
            <Details ref={det} />
        </>
    )
}

export default Home