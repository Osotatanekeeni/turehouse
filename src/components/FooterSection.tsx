import React from 'react'

function FooterSection() {
  return (
    <div className=" mt-20 bg-tureGreen text-white py-10 px-4 md:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 mb-10">
        <div>
          <h2 className="text-lg tracking-widest font-semibold mb-4 w-3/4" style={{ fontFamily: "Playfair Display"}}>CUSTOM COMFORT, REDEFINED</h2>
        </div>
        <div>
          <h2 className="text-lg font-medium mb-4 tracking-widest" style={{ fontFamily: "Playfair Display"}}>STORE</h2>
          <ul className='tracking-wider' style={{ fontFamily: "Urbanist"}}>
            <li className="mb-2">Home</li>
            <li className="mb-2">About</li>
            <li className="mb-2">Contact</li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-medium mb-4" style={{ fontFamily: "Playfair Display"}}>SHOP</h2>
          <ul className='tracking-wider' style={{ fontFamily: "Urbanist"}}>
            <li className="mb-2">All</li>
            <li className="mb-2">Collections</li>
            <li className="mb-2">Bestsellers</li>
            <li className="mb-2">Featured</li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-medium mb-4" style={{ fontFamily: "Playfair Display"}}>COLLECTIONS</h2>
          <ul className='tracking-wider' style={{ fontFamily: "Urbanist"}}>
            <li className="mb-2">Vase</li>
            <li className="mb-2">Furniture</li>
            <li className="mb-2">Mirrors</li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-medium mb-4" style={{ fontFamily: "Playfair Display"}}>HELP</h2>
          <ul className='tracking-wider' style={{ fontFamily: "Urbanist"}}>
            <li className="mb-2">Contact Us</li>
            <li className="mb-2">Accounts & Login</li>
            <li className="mb-2">Privacy Policy</li>
            <li className="mb-2">Refund Policy</li>
            <li className="mb-2">FAQs</li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-medium mb-4" style={{ fontFamily: "Playfair Display"}}>Socials</h2>
          <ul className='tracking-wider' style={{ fontFamily: "Urbanist"}}>
            <li className="mb-2">Facebook</li>
            <li className="mb-2">Instagram</li>
            <li className="mb-2">Twitter</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-9xl tracking-extra-wide font-bold" style={{ fontFamily: "Playfair Display"}}>
        TureHouse
      </div>
    </div>
  )
}

export default FooterSection