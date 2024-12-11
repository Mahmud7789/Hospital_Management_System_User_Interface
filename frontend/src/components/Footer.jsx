import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate()
    return (
        <div className='md:mx-10 px-5 bg-gray-100'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 pt-10 text-sm'>
                {/* ---- Left Section ----  */}
                <div>
                    <img onClick={() => { navigate(`/`); scrollTo(0, 0) }} className='mb-3 w-32 cursor-pointer' src={assets.logo} alt="" />
                    <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus unde blanditiis, voluptas exercitationem itaque quos nisi quam est harum sapiente animi vel architecto possimus placeat, perspiciatis in rem quidem accusamus.</p>
                </div>
                {/* ---- Center Section ----  */}
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li onClick={() => { navigate(`/`); scrollTo(0, 0) }} className='cursor-pointer'>Home</li>
                        <li onClick={() => { navigate(`/about`); scrollTo(0, 0) }} className='cursor-pointer'>About Us</li>
                        <li onClick={() => { navigate(`/contact`); scrollTo(0, 0) }} className='cursor-pointer'>Contact</li>
                        <li onClick={() => { navigate(`/privacy`); scrollTo(0, 0) }} className='cursor-pointer'>Privacy policy</li>
                    </ul>
                </div>
                {/* ---- Right Section ----  */}
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <div className='flex gap-2'>
                            <img className='w-5' src={assets.phone_icon} alt="" />
                            <li>Phone: 01817358597</li>
                        </div>
                        <div className='flex gap-2'>
                            <img className='w-5' src={assets.email_icon} alt="" />
                            <li>Email: rsmsp@gmail.com</li>
                        </div>
                    </ul>
                </div>
            </div>
            {/* ----- Copyright text ---- */}
            <div>
                <hr />
                <p className='py-5 text-sm text-center bg-gray-100'>&copy; Copyright 2024@ Golam Mahmud -  All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer