import React, { useState } from 'react'
import HeroImage from '../images/hero.png'

export default function HeroSection() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
    {/* // Hero Section */}
    <div className="h-screen" style={{ fontFamily: 'Playfair Display' }}>
        {/* <div className='absolute left-0 top-0 z-0 size-full'> */}
        {/* <HeroImage  />
         */}
         <img src={HeroImage} alt='Hero Image' className='absolute z-0 size-full object-cover' />
         {/* <div className='absolute left-0 top-0 z-0 size-full bg-cover bg-center' style={{ backgroundImage: `url(${HeroImage})` }}></div> */}
        {/* </div> */}
        {/* Navigation */}
        <div className='relative z-10 flex flex-row items-center justify-between p-4 px-4 md:px-40 pt-8 w-full'>
            <div className='w-full'>
                <ul className='hidden lg:flex gap-3 tracking-wider text-white' style={{ fontFamily: 'Urbanist' }}>
                    <li>HOME</li>
                    <li>PRODUCTS</li>
                    <li>CONTACT US</li>
                </ul>
            </div>

            <div className='w-full'>
                <h1 className='text-center text-4xl font-medium tracking-widest text-white'>TUREHOUSE</h1>
            </div>

            <div className='flex w-full justify-end'>
                <ul className='hidden lg:flex justify-end gap-3 tracking-wider text-white' style={{ fontFamily: 'Urbanist' }}>
                    <li>LOG IN</li>
                    <li>CART (0)</li>
                </ul>
                <button className='lg:hidden text-white' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                    </svg>
                </button>
            </div>
        </div>

        {isMenuOpen && (
            <div className='relative z-10 flex flex-col items-center bg-black bg-opacity-75 p-4 lg:hidden'>
                <ul className='flex flex-col gap-3 tracking-wider text-white' style={{ fontFamily: 'Urbanist' }}>
                <li>HOME</li>
                    <li>PRODUCTS</li>
                    <li>CONTACT US</li>
                    <li>LOG IN</li>
                    <li>CART (0)</li>
                </ul>
            </div>
        )}

        <div className='px-4 md:px-40'>
            <hr className='relative z-10 w-full' style={{ color: 'grey' }} />
        </div>

        <div className='relative flex w-full flex-col gap-3 mt-10 md:mt-0 p-5 md:p-20 text-white'>
            <h2 className='text-center text-5xl md:text-6xl font-semibold leading-snug tracking-widest'>Discover Timeless <br /> Furniture for <br /> Your Home</h2>
            <p className='text-center text-lg md:text-xl leading-loose tracking-widest'>Explore modern, elegant designs tailored to your lifestyle</p>
        </div>
        <div className='flex justify-center transition-transform duration-300 hover:scale-105'>
            <button className='relative rounded-xl bg-caribbeanCurrent p-3 px-8 tracking-widest text-white hover:border-caribbeanCurrent hover:bg-white hover:text-black'>Shop Now</button>
        </div>

        
        
    </div>
    </>
  )
}
