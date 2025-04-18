import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import CardCarousel from '../components/LandingCompo/CardCarousel';

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

      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Foreground Content */}
      <div className="relative z-10 px-5 md:px-11">
        {/* Navbar */}
        <nav className="flex justify-between items-center py-4">
          <img src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png" alt="logo" className="hidden md:block md:w-40" />
          <img src="/images/logoN.png" alt="logo" className="block md:hidden w-7" />
          <div className="flex gap-4">
            <button className="flex items-center text-white bg-black justify-center border rounded-full p-1 w-32">
              English <IoIosArrowDown />
            </button>
            <button className="border rounded-full p-1 w-24">
              Sign In
            </button>
          </div>
        </nav>

        {/* Carousel */}
        <CardCarousel onImageChange={setBgImage} />
      </div>
    </div>
  );
};

export default LandingPage;
