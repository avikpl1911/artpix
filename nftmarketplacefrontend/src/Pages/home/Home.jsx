import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import Card from '../../components/card/Card';
import "./home.css"
import Header from '../../components/Header/Header';
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
            breakpoint: { max: 767, min: 464 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <>
            <Header />
            
            <Carousel
                className='pt-20 z-10'
                responsive={responsive}
                autoPlay={true}
                swipeable={true}
                draggable={true}
            
                infinite={true}
                partialVisible={false}

            >
                <Card />
                <Card />
                <Card />
                <Card />
            </Carousel>
            
            <p className='pixfont text-5xl ml-4'>Popular Pix</p>

            <div className='w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-10 gap-x-14 mt-10 mb-5'>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>

        </>
    )
}

export default Home