import React, { useRef } from 'react'
import { TrendingData } from '../../data/carouselData'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const TrendingSlider = () => {
    const containerRef = useRef(null)

    const scrollLeft = () => {
        containerRef.current.scrollBy({ left: -300, behavior: 'smooth'})
    }
    const scrollRight = () => {
        containerRef.current.scrollBy({ left: 300, behavior: 'smooth' })
    }
    
    return (
        <div>
            
        </div>
    )
}

export default TrendingSlider