import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Header = () => {

    const navigate = useNavigate();
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>
        {/* Left Side  */}
        <div className='md:1/2 flex flex-col items-start justyfy-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
            <p className='text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight md:leading-tight lg:leading-tight'>
                RSMSP Health Care <br/> Your Health Is <br/> Our Priority

            </p>
            <div className='flex my-2 flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
                <img className='w-28' src={assets.group_profiles} alt="" />
                <p>
                    Simply browse through our extensive list of trusted<br className='hidden sm:block'/> doctors, schedule your appointment hassle-free.
                </p>
            </div>
            <button onClick={() => { navigate('/login'); scrollTo(0, 0) }} className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm  m-auto md:m-0 hover:scale-105 transition-all duration-300 '>
                    Book appointment <img className='w-3' src={assets.arrow_icon} alt="" />
            </button>
        </div>
        {/* Right Side  */}
        <div className='md:w-1/2 relative'>
            <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="" />
        </div>
    </div>
  )
}

export default Header