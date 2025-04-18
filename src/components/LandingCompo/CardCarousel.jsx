// src/components/Carousel.jsx
import { useState, useEffect, useRef } from "react";
import { carouselData } from "../../data/carouselData";
import { TiMediaPlay } from "react-icons/ti";

export default function Carousel({ onImageChange }) {
    const [index, setIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [progress, setProgress] = useState(0);
    // const [autoPlay, setAutoPlay] = useState(true);
    const progressRef = useRef(null);
    const slide = carouselData[index];

    useEffect(() => {
        if (onImageChange) {
            onImageChange(carouselData[index].image);
        }
    }, [index]);


const nextSlide = () => {
    setIndex((prev) => (prev + 1) % carouselData.length);
    // resetProgress();
};


const prevSlide = () => {
    setIndex((prev) => (prev - 1 + carouselData.length) % carouselData.length);
};

const resetProgress = () => {
    setProgress(0);
    setIsPlaying(false);
    clearInterval(progressRef.current);
};

const startProgress = () => {
    setIsPlaying(true);
    setAutoPlay(false);
    progressRef.current = setInterval(() => {
        setProgress((prev) => {
            if (prev >= 100) {
                clearInterval(progressRef.current);
                nextSlide();
                return 0;
            }
            return prev + 1;
        });
    }, 50);
};

const goToSlide = (i) => {
    setIndex(i);
    resetProgress();
};

// useEffect(() => {
//     if (isPlaying) {
//         const interval = setInterval(() => {
//             nextSlide();
//         }, 5000); // autoplay every 5 seconds
//         return () => clearInterval(interval);
//     }
// }, [index, autoPlay]);
    useEffect(() => {
        let interval
        if(isPlaying){
            interval = setInterval(() => {
                setProgress((prev) => {
                    if(prev >= 100){
                        setIndex((prevIndex) => (prevIndex +1) % carouselData.length)
                        return 0
                    }
                    return prev + 1
                })
            }, 50)
        }
        return () => clearInterval(interval)
    }, [isPlaying, index])

    // const goToSlide = (i) => {
    //     setIndex(i)
    //     setProgress(0)
    // }

// useEffect(() => {
//     return () => clearInterval(progressRef.current); 
// }, []);

    return (
        <div
            className="relative w-full h-[500px] bg-black text-white rounded-xl overflow-hidden transition-all duration-500 ease-in-out"
            style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent p-10 flex flex-col justify-center gap-3">
                <h3 className="text-red-500 font-bold">N SERIES</h3>
                <h1 className="text-4xl font-bold">{slide.title}</h1>
                <p className="text-sm text-gray-300">
                    {slide.genre}
                </p>
                <p className="max-w-md text-sm">{slide.description}</p>

                <div className="flex items-center gap-3 mt-4">
                    <input
                        type="email"
                        placeholder="Email address"
                        className="bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full w-64 outline-none"
                    />
                    <button className="bg-red-600 px-5 py-2 rounded-full font-semibold flex items-center gap-2">
                        Get Started
                        <span><TiMediaPlay className="text-xl"/></span>
                    </button>
                </div>

                

                {/* <div className="w-full bg-white/20 h-2 mt-3 rounded overflow-hidden">
                    <div
                        className="bg-red-600 h-full transition-all duration-100 linear"
                        style={{ width: `${progress}%` }}
                    />
                </div> */}

                {/* <div className="flex justify-center items-center gap-2 mt-6">
                    <button
                        onClick={startProgress}
                        className="text-2xl text-gray-300 rounded-full w-fit"
                    >
                        {isPlaying ? <TiMediaPlay/> : <TiMediaPlay/>}
                    </button>
                    {
                        carouselData.map((_, i) => (
                            <div
                            key={i}
                            onClick={() => goToSlide(i)}
                            className={`w-4 h-2 rounded-full cursor-pointer transition-all duration-300 ${
                                i === index ? "bg-red-500 w-8 " : "bg-white/30"
                            }`} 
                            ></div>
                    ))}
                </div> */}

                <div className="mt-6 flex justify-center items-center gap-2">
                    <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="text-2xl text-gray-300 rounded-full w-fit"
                    >
                        {isPlaying ? <TiMediaPlay /> : <TiMediaPlay />}
                    </button>

                    {carouselData.map((_, i) => (
                        <div
                        key={i}
                        onClick={() => goToSlide(i)}
                        className="w-8 h-2 rounded-full bg-white/30 relative overflow-hidden cursor-pointer"
                        >
                        {i === index && (
                            <div
                            className="absolute top-0 left-0 h-full bg-red-600 transition-all duration-100"
                            style={{ width: `${progress}%` }}
                            />
                        )}
                        </div>
                    ))}
                </div>
            </div>

            <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 text-white px-3 py-1 rounded-full"
            >
                ‹
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 text-white px-3 py-1 rounded-full"
            >
                ›
            </button>
        </div>
    );
}
