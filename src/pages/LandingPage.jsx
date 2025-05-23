import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import CardCarousel from '../components/LandingCompo/CardCarousel';
import TrendingSlider from '../components/LandingCompo/TrendingSlider';
import CardReason from '../components/LandingCompo/CardReason';
import DropDownModel from '../components/LandingCompo/DropDownModel';
import Footer from '../components/Footer';

const LandingPage = () => {
    const [bgImage, setBgImage] = useState("");

    return (
        <div className="relative w-full min-h-screen overflow-hidden font-sans text-white">
        {/* Background Image */}
        <div
            className="absolute inset-0 bg-cover bg-center blur-md transition-all duration-500"
            style={{
            backgroundImage: `url(${bgImage})`,
            zIndex: 0,
            }}
        />
        <div className="absolute inset-0 bg-black/50 z-0"></div>
            <div className="relative z-10 px-5 md:px-11">
                <nav className="flex justify-between items-center py-4">
                    <img src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png" alt="logo" className="hidden md:block md:w-40" />
                    <img src="/images/logoN.png" alt="logo" className="block md:hidden w-7" />
                    <div className="flex gap-4">
                        <button className="flex items-center text-white bg-black justify-center rounded-full p-1 w-32">
                        English <IoIosArrowDown />
                        </button>
                        <button className="bg-white text-black font-medium rounded-full p-1 w-24">
                        Sign In
                        </button>
                    </div>
                </nav>
                <CardCarousel onImageChange={setBgImage} />
            </div>
            
            <div className='relative mt-5 md:mt-5 mb-10'>
                <h1 className='font-bold text-xl pl-14 md:px-20 md:text-3xl'>Trending Now</h1>
                <TrendingSlider/>

                <div>
                    <h1 className='font-bold text-xl pl-14 md:px-20 md:text-3xl'>More Reasons to Join</h1>
                    <CardReason />
                </div>
                <div className='md:mt-10'>
                    <h1 className='font-bold text-xl pl-14 md:px-20 md:text-3xl'>Frequently Asked Questions</h1>
                    <DropDownModel />
                </div>
            </div>
            <div className='relative md:mt-10'>
                <Footer />
            </div>
        </div>
    );
};

export default LandingPage;
