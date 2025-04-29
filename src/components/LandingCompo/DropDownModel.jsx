import React, { useState } from 'react'
import { Plus, X } from "lucide-react"
import { Questions } from '../../data/carouselData'

const DropDownModel = () => {

    const [ openIndex, setOpenIndex ] = useState(null)
    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className="w-full mx-auto my-10 px-24">
            {Questions.map((faq, index) => (
                <div key={index} className="border-b border-gray-700">
                    <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full flex justify-between items-center p-6 bg-gray-800 hover:bg-gray-700 text-left"
                    >
                        <span className="text-xl text-white">{faq.title}</span>
                        {openIndex === index ? (
                        <X className="w-6 h-6 text-white" />
                        ) : (
                        <Plus className="w-6 h-6 text-white" />
                        )}
                    </button>
                    
                    {openIndex === index && (
                        <div className="p-6 bg-gray-900 text-gray-300 text-md">
                        {faq.description}
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default DropDownModel