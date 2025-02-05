import React from 'react'
import HeroImage from '../images/hero.png'

export default function HeroSection() {
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
        <div className='relative z-10 flex flex-row items-center justify-between p-4 px-40 pt-8'>
            <div className='w-full'>
            <ul className='flex gap-3 tracking-wider text-white' style={{ fontFamily: 'Urbanist' }}>
                <li className=''>HOME</li>
                <li>PRODUCTS</li>
                <li>CONTACT US</li>
            </ul>
            </div>

            <div className='w-full'>
                <h1 className='text-center text-4xl font-medium tracking-widest text-white'>TUREHOUSE</h1>
            </div>

            <div className='flex w-full justify-end'>
                <ul className='flex justify-end gap-3 tracking-wider text-white' style={{ fontFamily: 'Urbanist' }}>
                    <li>LOG IN</li>
                    <li>CART (0)</li>
                </ul>
            </div>
            
        </div>
        {/* <h1 className="relative z-10">BODY</h1> */}
        <div className='px-40'>
        <hr className='relative z-10 w-full px-20'/>
        </div>

        <div className='relative flex w-full flex-col gap-3 p-20 text-white'>
            <h2 className='text-center text-6xl font-semibold leading-snug tracking-widest'>Discover Timeless <br /> Furniture for <br /> Your Home</h2>
            <p className='text-center text-xl leading-loose tracking-widest'>Explore modern, elegant designs tailored to your lifestyle</p>
            
        </div>
        <div className='flex justify-center transition-transform duration-300 hover:scale-105'>
        <button className='relative rounded-xl bg-caribbeanCurrent p-3 px-8 tracking-widest text-white hover:border-caribbeanCurrent hover:bg-white hover:text-black'>Shop Now</button>
        </div>

        
        
    </div>
    </>
  )
}
