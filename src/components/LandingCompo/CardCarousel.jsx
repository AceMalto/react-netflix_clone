// src/components/Carousel.jsx
import { useState, useEffect, useRef, useMemo } from "react";
import { carouselData } from "../../data/carouselData";
import { TiMediaPlay } from "react-icons/ti";

export default function Carousel({ onImageChange }) {
    const [index, setIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [progress, setProgress] = useState(0);
    const slide = useMemo(() => carouselData[index], [index]); // useMemo to ensure sync

    useEffect(() => {
        let interval;
        if (isPlaying) {
            interval = setInterval(() => {
                setProgress((prev) => Math.min(prev + 1, 100));
            }, 50);
        }
        return () => clearInterval(interval);
    }, [isPlaying]);

    useEffect(() => {
        if (progress >= 100) {
            setIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
            setProgress(0);
        }
        if (onImageChange) {
            onImageChange(slide.image);
        }
    }, [progress, onImageChange]);

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % carouselData.length);
        setProgress(0);
    };

    const prevSlide = () => {
        setIndex((prev) => (prev - 1 + carouselData.length) % carouselData.length);
        setProgress(0);
    };

    const goToSlide = (i) => {
        setIndex(i);
        setProgress(0);
    };

    return (
        <div
            className="relative w-full h-[580px] bg-black text-white rounded-xl overflow-hidden transition-all duration-500 ease-in-out"
            style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            key={slide.id}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent p-10 flex flex-col justify-center gap-3">
                <h3 className="text-red-500 font-bold">N SERIES</h3>
                <h1 className="text-4xl font-bold">{slide.title}</h1>
                <p className="text-sm text-gray-300">{slide.genre}</p>
                <p className="max-w-md text-sm">{slide.description}</p>

                <div className="md:flex items-center space-y-2 md:space-y-0 md:gap-3 mt-4">
                    <input
                        type="email"
                        placeholder="Email address"
                        className="bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full w-64 outline-none"
                    />
                    <button className="bg-red-600 px-5 py-2 rounded-full font-semibold flex items-center justify-center w-64 md:w-52 gap-2">
                        Get Started
                        <span><TiMediaPlay size={24} /></span>
                    </button>
                </div>

                {/* Slide Progress Indicators */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex justify-center items-center gap-2">
                    <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="text-2xl text-gray-300 rounded-full w-fit"
                    >
                        <TiMediaPlay />
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

            {/* Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 text-white px-3 py-1 h-16 rounded-full"
            >
                ‹
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 text-white px-3 py-1 h-16 rounded-full"
            >
                ›
            </button>
        </div>
    );
}
