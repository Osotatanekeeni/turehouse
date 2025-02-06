import React from 'react'
import BarrelChair from '../images/BarrelChair.png'
import Furnitures from "../images/Furnitures.png"

export default function HighlightSection() {
  return (
    <div>
        <div className='flex flex-col px-4 pt-20 md:flex-row md:px-20'>
        {/* Image Section */}
        <div className='flex w-full justify-center rounded-tl-lg bg-white md:w-1/2'>
            <img src={BarrelChair} alt='Barrel Chair' />
        </div>
        {/* Write-up Section */}
        <div className='flex w-full flex-col justify-center gap-8 rounded-tr-lg bg-brown p-4 text-white md:w-2/3 md:p-20' >
            <h2 className='w-full text-center text-3xl font-medium tracking-widest md:w-2/3 md:text-left' style={{ fontFamily: "Playfair Display"}}>BARREL CHAIR WITH WOODEN LEGS</h2>
            <p className='w-full text-lg tracking-wider md:w-2/3' style={{ fontFamily: "Urbanist"}}>Sink into the embrace of our elegant barrel chair, designed to blend style and functionality effortlessly. The plush, curved upholstery offers exceptional comfort, while the sturdy wooden legs provide a touch of natural charm. Whether you're decorating a modern living room or creating a cozy reading nook, this chair is the perfect balance of luxury and durability.</p>
            <div className='flex'>
                {/* <div> */}
                <h4 className='border-b-2 border-white text-center tracking-widest md:text-left'>SHOP THIS LOOK</h4>
                {/* </div> */}
            </div>
        </div>
    </div>
    <div className='rounded-b-lg'>
        <img className='w-full px-4 md:px-20' src={Furnitures} alt='Furnitures' />
    </div>
    </div>
  )
}
