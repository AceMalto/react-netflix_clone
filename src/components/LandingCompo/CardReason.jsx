import React from 'react'
import { Reasons } from '../../data/carouselData'

const CardReason = () => {
    return (
        <div className='flex flex-col items-center md:flex-row justify-center gap-3 mt-5 px-5'>
            {
                Reasons.map((reason, id) => (
                    <div key={reason.id} className='bg-black/30 border border-gray-800 rounded-2xl p-5 md:w-80 h-44'>
                        <h1 className='font-bold text-md md:text-lg'>{reason.title}</h1>
                        <p className='text-sm'>{reason.Descriptions}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default CardReason