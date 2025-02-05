import React, { useState } from 'react'

function PartnersSection() {
    const [activeTab, setActiveTab] = useState('tab1');
  return (
    <div className="mt-10 px-20 flex flex-col justify-center items-center gap-7">
        <div>
        <h1 className='tracking-widest text-2xl' style={{ fontFamily: "Playfair Display"}}>OUR TRUSTED PARTNERS</h1>
        </div>
        <div className="w-4/12">
        <p className='font-light tracking-widest text-center' style={{ fontFamily: "Urbanist"}}>We collaborate with renowned brands and industry innovators who share our passion for quality, craftmanship and sustainable design.
            Together, we create exceptional pieces that transform your living spaces.
        </p>
        </div>
        <div className="w-full flex justify-center">
        <div className="w-full flex justify-around gap-20">
          <button onClick={() => setActiveTab('tab1')} className={`p-10 ${activeTab === 'tab1' ? 'border-b-2 border-black w-1/2' : 'w-1/2'}`} style={{ fontFamily: "Urbanist"}}>greenwooddesigns</button>
          <button onClick={() => setActiveTab('tab2')} className={`p-10 font-bold ${activeTab === 'tab2' ? 'border-b-2 border-black w-1/2' : 'w-1/2'}`} style={{ fontFamily: "Playfair Display"}}>T & N</button>
          <button onClick={() => setActiveTab('tab3')} className={`p-10 ${activeTab === 'tab3' ? 'border-b-2 border-black w-1/2' : 'w-1/2'}`} style={{ fontFamily: "Urbanist"}}>elite</button>
          <button onClick={() => setActiveTab('tab4')} className={`p-10 ${activeTab === 'tab4' ? 'border-b-2 border-black w-1/2' : 'w-1/2'}`} style={{ fontFamily: "Unlock"}}>Urbanwood</button>
        </div>
      </div>
      <div className="w-full mt-4">
        {activeTab === 'tab1' && 
            <div className='flex flex-col gap-4 items-center'>
                <h1 className='font-bold tracking-widest text-3xl' style={{ fontFamily: "Playfair Display"}}>THE ART OF FINE CRAFTMANSHIP</h1>
                <p className='tracking-widest font-light text-center w-1/2'>WHERE CRAFTMANSHIP MEETS INNOVATION, EVERY ELEMENT OF OUR FURNITURE TELLS A STORY OF EXCELLENCE</p>
                <p className='tracking-wider font-light text-center w-3/4'>At TUREHOUSE, we believe that furniture isn’t just functional—it’s an experience. Every stitch, curve, and finish is thoughtfully designed and meticulously executed to ensure you receive a product that’s not only beautiful but built to last. Our team of skilled artisans and designers work together to transform high-quality materials into timeless pieces that enhance your home and lifestyle</p>
            </div>
        }
        {activeTab === 'tab2' && 
            <div className='flex flex-col gap-4 items-center'>
                <h1 className='font-bold tracking-widest text-3xl' style={{ fontFamily: "Playfair Display"}}>INNOVATIVE DESIGNS</h1>
                <p className='tracking-widest font-light text-center w-1/2'>PUSHING THE BOUNDARIES OF DESIGN TO CREATE UNIQUE AND FUNCTIONAL PIECES</p>
                <p className='tracking-wider font-light text-center w-3/4'>At T & N, we are committed to innovation and creativity. Our designs are a blend of modern aesthetics and practical functionality, ensuring that each piece not only looks stunning but also serves a purpose. Our team of designers and craftsmen work tirelessly to bring you furniture that is both beautiful and practical, enhancing your living spaces in every way possible.</p>
            </div>
        }
        {activeTab === 'tab3' && 
            <div className='flex flex-col gap-4 items-center'>
                <h1 className='font-bold tracking-widest text-3xl' style={{ fontFamily: "Playfair Display"}}>ELITE QUALITY</h1>
                <p className='tracking-widest font-light text-center w-1/2'>COMMITMENT TO EXCELLENCE IN EVERY DETAIL</p>
                <p className='tracking-wider font-light text-center w-3/4'>Elite is synonymous with quality and excellence. Our furniture is crafted with the utmost care and precision, using only the finest materials. We believe that quality is not just a feature, but a standard. Our dedication to excellence ensures that every piece of furniture we create is of the highest quality, providing you with products that are durable, beautiful, and timeless.</p>
            </div>
        }
        {activeTab === 'tab4' && 
            <div className='flex flex-col gap-4 items-center'>
                <h1 className='font-bold tracking-widest text-3xl' style={{ fontFamily: "Playfair Display"}}>URBANWOOD</h1>
                <p className='tracking-widest font-light text-center w-1/2'>BLENDING URBAN STYLE WITH NATURAL ELEMENTS</p>
                <p className='tracking-wider font-light text-center w-3/4'>Urbanwood combines the best of urban design with the beauty of natural materials. Our furniture is designed to bring a touch of nature into your home, creating a harmonious balance between modern living and the natural world. Each piece is crafted with care, using sustainable materials and innovative techniques to create furniture that is both stylish and eco-friendly.</p>
            </div>
        }
      </div>
    </div>
  )
}

export default PartnersSection