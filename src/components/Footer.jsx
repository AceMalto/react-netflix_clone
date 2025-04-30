import React from 'react'

const Footer = () => {
    return (
        <div className='bg-black'>
            <div className='pt-5 space-y-4'>
                <h3 className='text-center'>Ready to watch? Enter your email to create or restart your membership</h3>
                <div className='space-x-3 text-center'>
                    <input type="text" className='p-2 w-96 outline-none text-white bg-black border border-white' placeholder='Email Address'/>
                    <button className='bg-red-600'>
                        Get Started 
                    </button>
                </div>
            </div>

            <div>
                <h3 className=' underline'>Questions? Contact us.</h3>
                <div className=' grid grid-rows-5'>
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
            </div>
        </div>
    )
}

export default Footer