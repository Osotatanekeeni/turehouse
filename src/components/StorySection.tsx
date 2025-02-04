import React from 'react'
import StoryImage from "../images/StoryImage.png";

export default function StorySetion() {
return  (
    <div className='flex px-20 pt-20'>
    {/* Write-up Section */}
    <div className='flex w-2/3 flex-col justify-center gap-8 rounded-tr-lg text-greenText' >
            <p className='w-3/4 text-left text-2xl font-medium tracking-widest' style={{ fontFamily: "Urbanist"}}>At <span className="text-tureGreen" style={{ fontFamily: "Playfair Display"}}>TUREHOUSE</span>, we believe furniture is more than just decor - it's a part of your story</p>
            <p className='w-3/4 text-lg tracking-wider' style={{ fontFamily: "Urbanist"}}>With over 25 years of experience in the art of furniture making, we specialize in creating pieces that combine functionality with timeless design. From handpicked materials to meticulous craftsmanship, every piece is built to last and enhance your living space.</p>
            <div className='flex'>
                {/* <div> */}
                <h4 className='border-b-2 border-tureGreen text-left text-tureGreen tracking-widest'>READ FULL STORY</h4>
                {/* </div> */}
            </div>
        </div>
        {/* Image Section */}
        <div className='flex w-1/2 justify-center rounded-tl-lg'>
            <img src={StoryImage} alt='sitting arrangement' />
        </div>
        
        </div>
)
}