import React from 'react'
import { Reasons } from '../../data/carouselData'

const CardReason = () => {
    return (
        <div className='grid grid-cols-4 border'>
            {
                Reasons.map((reason, id) => (
                    <div key={reason.id} className=''>
                        <h1>{reason.title}</h1>
                        <p>{reason.Descriptions}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default CardReason