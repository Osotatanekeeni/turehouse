import React, { useState } from 'react'

function PartnersSection() {
    const [activeTab, setActiveTab] = useState('tab1');
  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-7 px-4 md:px-20">
        <div>
        <h1 className='text-2xl tracking-widest' style={{ fontFamily: "Playfair Display"}}>OUR TRUSTED PARTNERS</h1>
        </div>
        <div className="w-full md:w-4/12">
        <p className='text-center font-light tracking-widest' style={{ fontFamily: "Urbanist"}}>We collaborate with renowned brands and industry innovators who share our passion for quality, craftmanship and sustainable design.
            Together, we create exceptional pieces that transform your living spaces.
        </p>
        </div>
        <div className="flex w-full justify-center">
        <div className="flex w-full justify-around gap-20 overflow-x-auto">
          <button onClick={() => setActiveTab('tab1')} className={`p-10 ${activeTab === 'tab1' ? 'w-full md:w-1/2 border-b-2 border-black' : 'w-full md:w-1/2'}`} style={{ fontFamily: "Urbanist"}}>greenwooddesigns</button>
          <button onClick={() => setActiveTab('tab2')} className={`p-10 whitespace-nowrap font-bold ${activeTab === 'tab2' ? 'w-full md:w-1/2 border-b-2 border-black' : 'w-full md:w-1/2'}`} style={{ fontFamily: "Playfair Display"}}>T & N</button>
          <button onClick={() => setActiveTab('tab3')} className={`p-10 ${activeTab === 'tab3' ? 'w-full md:w-1/2 border-b-2 border-black' : 'w-full md:w-1/2'}`} style={{ fontFamily: "Urbanist"}}>elite</button>
          <button onClick={() => setActiveTab('tab4')} className={`p-10 ${activeTab === 'tab4' ? 'w-full md:w-1/2 border-b-2 border-black' : 'w-full md:w-1/2'}`} style={{ fontFamily: "Unlock"}}>Urbanwood</button>
        </div>
      </div>
      <div className="mt-4 w-full">
        {activeTab === 'tab1' && 
            <div className='flex flex-col items-center gap-4'>
                <h1 className='text-center text-3xl font-bold tracking-widest' style={{ fontFamily: "Playfair Display"}}>THE ART OF FINE CRAFTMANSHIP</h1>
                <p className='w-full md:w-1/2 text-center font-light tracking-widest'>WHERE CRAFTMANSHIP MEETS INNOVATION, EVERY ELEMENT OF OUR FURNITURE TELLS A STORY OF EXCELLENCE</p>
                <p className='w-full md:w-3/4 text-center font-light tracking-wider'>At TUREHOUSE, we believe that furniture isn’t just functional—it’s an experience. Every stitch, curve, and finish is thoughtfully designed and meticulously executed to ensure you receive a product that’s not only beautiful but built to last. Our team of skilled artisans and designers work together to transform high-quality materials into timeless pieces that enhance your home and lifestyle</p>
            </div>
        }
        {activeTab === 'tab2' && 
            <div className='flex flex-col items-center gap-4'>
                <h1 className='text-center text-3xl font-bold tracking-widest' style={{ fontFamily: "Playfair Display"}}>INNOVATIVE DESIGNS</h1>
                <p className='w-full md:w-1/2 text-center font-light tracking-widest'>PUSHING THE BOUNDARIES OF DESIGN TO CREATE UNIQUE AND FUNCTIONAL PIECES</p>
                <p className='w-full md:w-3/4 text-center font-light tracking-wider'>At T & N, we are committed to innovation and creativity. Our designs are a blend of modern aesthetics and practical functionality, ensuring that each piece not only looks stunning but also serves a purpose. Our team of designers and craftsmen work tirelessly to bring you furniture that is both beautiful and practical, enhancing your living spaces in every way possible.</p>
            </div>
        }
        {activeTab === 'tab3' && 
            <div className='flex flex-col items-center gap-4'>
                <h1 className='text-center text-3xl font-bold tracking-widest' style={{ fontFamily: "Playfair Display"}}>ELITE QUALITY</h1>
                <p className='w-full md:w-1/2 text-center font-light tracking-widest'>COMMITMENT TO EXCELLENCE IN EVERY DETAIL</p>
                <p className='w-full md:w-3/4 text-center font-light tracking-wider'>Elite is synonymous with quality and excellence. Our furniture is crafted with the utmost care and precision, using only the finest materials. We believe that quality is not just a feature, but a standard. Our dedication to excellence ensures that every piece of furniture we create is of the highest quality, providing you with products that are durable, beautiful, and timeless.</p>
            </div>
        }
        {activeTab === 'tab4' && 
            <div className='flex flex-col items-center gap-4'>
                <h1 className='text-center text-3xl font-bold tracking-widest' style={{ fontFamily: "Playfair Display"}}>URBANWOOD</h1>
                <p className='w-full md:w-1/2 text-center font-light tracking-widest'>BLENDING URBAN STYLE WITH NATURAL ELEMENTS</p>
                <p className='w-full md:w-3/4 text-center font-light tracking-wider'>Urbanwood combines the best of urban design with the beauty of natural materials. Our furniture is designed to bring a touch of nature into your home, creating a harmonious balance between modern living and the natural world. Each piece is crafted with care, using sustainable materials and innovative techniques to create furniture that is both stylish and eco-friendly.</p>
            </div>
        }
      </div>
    </div>
  )
}

export default PartnersSection