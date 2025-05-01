import React from 'react'
import { FaAngleRight, FaCaretDown } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='bg-black px-20 pb-10'>
            <div className='pt-5 space-y-4'>
                <h3 className='text-center'>Ready to watch? Enter your email to create or restart your membership</h3>
                <div className='flex justify-center items-center space-x-3'>
                    <input type="text" className='p-2 md:w-[500px] outline-none text-white bg-black border border-white' placeholder='Email Address'/>
                    <div className=''>
                        <button className='flex items-center justify-center bg-red-600 py-2 px-5'>
                            Get Started <FaAngleRight/>
                        </button>
                    </div>
                </div>
            </div>

            <div className='space-y-7 text-base text-[#B3A8A8]'>
                <h3 className=' underline'>Questions? Contact us.</h3>
                <div className=' grid grid-cols-4 gap-4 '>
                    <p className=' underline'>FAQ</p>
                    <p className=' underline'>Investor</p>
                    <p className=' underline'>Ways to watch</p>
                    <p className=' underline'>Corporate Information</p>
                    <p className=' underline'>Only on Netflix</p>
                    <p className=' underline'>Help Center</p>
                    <p className=' underline'>Jobs</p>
                    <p className=' underline'>Terms of Use</p>
                    <p className=' underline'>Contact us</p>
                    <p className=' underline'>Account</p>
                    <p className=' underline'>Redeem Gift Cards</p>
                    <p className=' underline'>Privacy</p>
                    <p className=' underline'>Speed Test</p>
                    <p className=' underline'>Media Center</p>
                    <p className=' underline'>Buy Gift Cards</p>
                    <p className=' underline'>Cookie Preferences</p>
                    <p className=' underline'>Legal Notices</p>
                </div>
                <div className=''>
                    <button className='flex items-center px-10 py-2 bg-[#0F0F0F] border rounded-sm'>
                        English <FaCaretDown/>
                    </button>
                </div>
                <h4>Netflix Philippines</h4>
            </div>
        </div>
    )
}

export default Footer