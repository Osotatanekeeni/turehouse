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
        <div className='relative z-10 flex w-full flex-col items-center justify-between p-4 pt-8 md:flex-row md:px-40'>
            <div className='flex w-full items-center justify-between'>
                <h1 className='text-4xl font-medium tracking-widest text-white'>TUREHOUSE</h1>
                <button className='text-white md:hidden' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                    </svg>
                </button>
            </div>
            <div className={`w-full md:flex md:items-center md:justify-between ${isMenuOpen ? 'block' : 'hidden'}`}>
                <ul className='flex flex-col gap-3 tracking-wider text-white md:flex-row' style={{ fontFamily: 'Urbanist' }}>
                    <li>HOME</li>
                    <li>PRODUCTS</li>
                    <li>CONTACT US</li>
                </ul>
                <ul className='mt-4 flex flex-col justify-end gap-3 tracking-wider text-white md:mt-0 md:flex-row' style={{ fontFamily: 'Urbanist' }}>
                    <li>LOG IN</li>
                    <li>CART (0)</li>
                </ul>
            </div>
        </div>

        <div className='px-4 md:px-40'>
            <hr className='relative z-10 w-full' style={{ color: 'grey' }} />
        </div>

        <div className='relative flex w-full flex-col gap-3 p-20 text-white'>
            <h2 className='text-center text-4xl font-semibold leading-snug tracking-widest md:text-6xl'>Discover Timeless <br /> Furniture for <br /> Your Home</h2>
            <p className='text-center text-xl leading-loose tracking-widest'>Explore modern, elegant designs tailored to your lifestyle</p>
            
        </div>
        <div className='flex justify-center transition-transform duration-300 hover:scale-105'>
        <button className='relative rounded-xl bg-caribbeanCurrent p-3 px-8 tracking-widest text-white hover:border-caribbeanCurrent hover:bg-white hover:text-black'>Shop Now</button>
        </div>

        
        
    </div>
    </>
  )
}
