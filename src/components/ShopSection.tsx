import { useState } from 'react'
import FurnitureCard from './FurnitureCard'
import DoubleVase from "../images/DoubleVase.png";
import Dresser from "../images/Dresser.png";
import EllaQueenSizedBed from "../images/EllaQueenSizedBed.png";
import LivingRoomVase from "../images/LivingRoomVase.png";
import LshapedSofa from "../images/LshapedSofa.png";
import SideStool from "../images/SideStool.png";
import SleeperSofa from "../images/SleeperSofa.png";
import StandingFramedMirror from "../images/StandingFramedMirror.png";
import TeeLivingRoomSofa from "../images/TeeLivingRoomSofa.png";

export default function ShopSection() {
    const [allProductClicked, setAllProductClicked] = useState(true);
    const [livingRoomClicked, setLivingRoomClicked] = useState(false);
    const [diningClicked, setDiningClicked] = useState(false);
    const [officeClicked, setOfficeClicked] = useState(false);
    const [outdoorClicked, setOutdoorClicked] = useState(false);
    const [mirrorsClicked, setMirrorsClicked] = useState(false);

    const handleAllProductsClicked = () => {
        setAllProductClicked(true);
        setLivingRoomClicked(false);
        setDiningClicked(false);
        setOfficeClicked(false);
        setOutdoorClicked(false);
        setMirrorsClicked(false);
    }

    const handleLivingRoomClicked = () => {
        setAllProductClicked(false);
        setLivingRoomClicked(true);
        setDiningClicked(false);
        setOfficeClicked(false);
        setOutdoorClicked(false);
        setMirrorsClicked(false);
    }

    const handleDiningClicked = () => {
        setAllProductClicked(false);
        setLivingRoomClicked(false);
        setDiningClicked(true);
        setOfficeClicked(false);
        setOutdoorClicked(false);
        setMirrorsClicked(false);
    }

    const handleOfficeClicked = () => {
        setAllProductClicked(false);
        setLivingRoomClicked(false);
        setDiningClicked(false);
        setOfficeClicked(true);
        setOutdoorClicked(false);
        setMirrorsClicked(false);
    }

    const handleOutdoorClicked = () => {
        setAllProductClicked(false);
        setLivingRoomClicked(false);
        setDiningClicked(false);
        setOfficeClicked(false);
        setOutdoorClicked(true);
        setMirrorsClicked(false);
    }

    const handleMirrorClicked = () => {
        setAllProductClicked(false);
        setLivingRoomClicked(false);
        setDiningClicked(false);
        setOfficeClicked(false);
        setOutdoorClicked(false);
        setMirrorsClicked(true);
    }
  return (
    <div className='px-4 py-10 md:px-20'>
        <p className='py-5 tracking-widest'>Shop</p>
        {/* buttons div */}
        <div className='pb-10'>
            {/* Left buttons */}
            <div className='flex gap-4 overflow-x-auto'>
            <button onClick={handleAllProductsClicked} className={`relative rounded-xl  p-3 tracking-widest ${allProductClicked ? "bg-caribbeanCurrent text-white" : "border-2 border-caribbeanCurrent bg-white text-black hover:bg-caribbeanCurrent hover:text-white"}`}>All Products</button>
            <button onClick={handleLivingRoomClicked} className={`relative rounded-xl  p-3 tracking-widest ${livingRoomClicked ? "bg-caribbeanCurrent text-white" : "border-2 border-caribbeanCurrent bg-white text-black hover:bg-caribbeanCurrent hover:text-white"}`}>Living Room</button>
            <button onClick={handleDiningClicked} className={`relative rounded-xl  p-3 tracking-widest ${diningClicked ? "bg-caribbeanCurrent text-white" : "border-2 border-caribbeanCurrent bg-white text-black hover:bg-caribbeanCurrent hover:text-white"}`}>Dining</button>
            <button onClick={handleOfficeClicked} className={`relative rounded-xl  p-3 tracking-widest ${officeClicked ? "bg-caribbeanCurrent text-white" : "border-2 border-caribbeanCurrent bg-white text-black hover:bg-caribbeanCurrent hover:text-white"}`}>Office</button>
            <button onClick={handleOutdoorClicked} className={`relative rounded-xl  p-3 tracking-widest ${outdoorClicked ? "bg-caribbeanCurrent text-white" : "border-2 border-caribbeanCurrent bg-white text-black hover:bg-caribbeanCurrent hover:text-white"}`}>Outdoor</button>
            <button onClick={handleMirrorClicked} className={`relative rounded-xl  p-3 tracking-widest ${mirrorsClicked ? "bg-caribbeanCurrent text-white" : "border-2 border-caribbeanCurrent bg-white text-black hover:bg-caribbeanCurrent hover:text-white"} `}>Mirrors & Vases</button>
            </div>

            {/* Right button */}
            <div>

            </div>
        </div>

        {/* Items section */}
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {(allProductClicked || livingRoomClicked) && (
        <>
        <div className='transition-transform duration-300 hover:scale-105'>
        <FurnitureCard 
            firstColor='bg-white' 
            secondColor='bg-furnitureGreen' 
            thirdColor='bg-furnitureGrey' 
            fourthColor='bg-furnitureBrown' 
            itemName='Tee Living room Sofa' 
            itemPrice='265,000' 
            image={TeeLivingRoomSofa} 
        />
        </div>
        <div className='transition-transform duration-300 hover:scale-105'>
        <FurnitureCard firstColor='bg-furnitureDarkGreen' secondColor='bg-furnitureDarkGrey' thirdColor='bg-white' fourthColor='bg-furnitureOrange' itemName='Sleeper Sofa' itemPrice='560,000' image={SleeperSofa} />
        </div>
        <div className='transition-transform duration-300 hover:scale-105'>
        <FurnitureCard firstColor='bg-furnitureDarkGreen' secondColor='bg-furniturePink' thirdColor='bg-white' fourthColor='bg-furnitureGreen' itemName='Tats Queen-sized Bed' itemPrice='390,000' image={DoubleVase}/>
        </div>
        <div className='transition-transform duration-300 hover:scale-105'>
        <FurnitureCard firstColor='bg-furnitureDarkGreen' secondColor='bg-furniturePink' thirdColor='bg-white' fourthColor='bg-furnitureGreen' itemName='Tats Queen-sized Bed' itemPrice='390,000' image={LshapedSofa}/>
        </div>
        <div className='transition-transform duration-300 hover:scale-105'>
                <FurnitureCard firstColor='bg-furnitureDarkGreen' secondColor='bg-furniturePink' thirdColor='bg-white' fourthColor='bg-furnitureGreen' itemName='Tats Queen-sized Bed' itemPrice='390,000' image={SideStool}/>
                </div>
        </>
    )}

                {(allProductClicked || mirrorsClicked) && (
                    <div className='transition-transform duration-300 hover:scale-105'>
                        <FurnitureCard firstColor='bg-white' secondColor='bg-furnitureGreen' thirdColor='bg-furnitureBrown' fourthColor='bg-furnitureRed' itemName='Standing Framed Mirror' itemPrice='65,000' image={StandingFramedMirror} />
                        </div>
                )}
                {(allProductClicked) && (
                    <>
                    <div className='transition-transform duration-300 hover:scale-105'>
                    <FurnitureCard firstColor='bg-furnitureDarkGreen' secondColor='bg-furniturePink' thirdColor='bg-white' fourthColor='bg-furnitureGreen' itemName='Tats Queen-sized Bed' itemPrice='390,000' image={EllaQueenSizedBed}/>
                    </div>
                
                    <div className='transition-transform duration-300 hover:scale-105'>
                <FurnitureCard firstColor='bg-furnitureDarkGreen' secondColor='bg-furniturePink' thirdColor='bg-white' fourthColor='bg-furnitureGreen' itemName='Tats Queen-sized Bed' itemPrice='390,000' image={Dresser}/>
                </div>
                <div className='transition-transform duration-300 hover:scale-105'>
                <FurnitureCard firstColor='bg-furnitureDarkGreen' secondColor='bg-furniturePink' thirdColor='bg-white' fourthColor='bg-furnitureGreen' itemName='Tats Queen-sized Bed' itemPrice='390,000' image={LivingRoomVase}/>
                    </div>
                    </>
                )}
                
            </div>


    </div>
  )
}
