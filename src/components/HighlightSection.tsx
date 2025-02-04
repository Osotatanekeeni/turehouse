import React from 'react'
import BarrelChair from '../images/BarrelChair.png'
import Furnitures from "../images/Furnitures.png"

export default function HighlightSection() {
  return (
    <div>
        <div className='flex px-20 pt-20'>
        {/* Image Section */}
        <div className='flex w-1/2 justify-center rounded-tl-lg bg-white'>
            <img src={BarrelChair} alt='Barrel Chair' />
        </div>
        {/* Write-up Section */}
        <div className='flex w-2/3 flex-col justify-center gap-8 rounded-tr-lg bg-brown p-20 text-white' >
            <h2 className='w-2/3 text-left text-3xl font-medium tracking-widest' style={{ fontFamily: "Playfair Display"}}>BARREL CHAIR WITH WOODEN LEGS</h2>
            <p className='w-2/3 text-lg tracking-wider' style={{ fontFamily: "Urbanist"}}>Sink into the embrace of our elegant barrel chair, designed to blend style and functionality effortlessly. The plush, curved upholstery offers exceptional comfort, while the sturdy wooden legs provide a touch of natural charm. Whether you're decorating a modern living room or creating a cozy reading nook, this chair is the perfect balance of luxury and durability.</p>
            <div className='flex px-5'>
                {/* <div> */}
                <h4 className='border-b-2 border-white text-left tracking-widest'>SHOP THIS LOOK</h4>
                {/* </div> */}
            </div>
        </div>
    </div>
    <div className='rounded-b-lg'>
        <img className='w-full px-20' src={Furnitures} alt='Furnitues' />
    </div>
    </div>
  )
}
