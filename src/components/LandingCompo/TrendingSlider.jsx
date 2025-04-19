import React, { useRef } from 'react'
import { TrendingData } from '../../data/carouselData'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const TrendingSlider = () => {
    const containerRef = useRef(null);

    const scrollLeft = () => {
        containerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = () => {
        containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };

    return (
        <div className='relative w-full px-10 my-6'>
            <button onClick={scrollLeft}
                className='absolute left-5 md:left-8 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full'>
                <FiChevronLeft size={24} />
            </button>

            <div ref={containerRef} className='flex items-center overflow-x-auto  space-x-4 scrollbar-hide px-3 py-5'>
                {
                    TrendingData.filter(item => item.image).map((item, i) => (
                        <div key={item.id} className="group relative flex-shrink-0 w-40 md:w-40">
                            <div
                            className="absolute top-2 left-2 md:-left-3 text-black text-6xl font-black z-10 group-hover:scale-105 group-hover:transition"
                                style={{
                                    textShadow: `
                                    -2px -2px 0 white,
                                    2px -2px 0 white,
                                    -2px  2px 0 white,
                                    2px  2px 0 white
                                    `
                                }}
                            >
                                {i + 1}
                            </div>

                            <img src={item.image} className="rounded-xl object-cover w-full h-72 group-hover:scale-105 group-hover:transition"/>
                        </div>
                    ))
                }
            </div>
            <button onClick={scrollRight} className="absolute right-5 md:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full">
                <FiChevronRight size={24} />
            </button>
        </div>
    )
}

export default TrendingSlider