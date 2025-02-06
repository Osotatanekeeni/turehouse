import FurnitureCard from './FurnitureCard'
import BobbySingleSofa from "../images/BobbySingleSofa.png";
// import DoubleVase from "../images/DoubleVase.png";
// import Dresser from "../images/Dresser.png";
import EllaQueenSizedBed from "../images/EllaQueenSizedBed.png";
// import LivingRoomVase from "../images/LivingRoomVase.png";
// import LshapedSofa from "../images/LshapedSofa.png";
import LuxuryBedsideStool from "../images/LuxuryBedsideStool.png";
// import SideStool from "../images/SideStool.png";
import SleeperSofa from "../images/SleeperSofa.png";
import StandingFramedMirror from "../images/StandingFramedMirror.png";
import TeeLivingRoomSofa from "../images/TeeLivingRoomSofa.png";


function BestsellerSection() {
  return (
    <div>
        {/* Bestsellers section */}
        <div className='px-4 py-10 md:px-20'>
            <div className='flex flex-col gap-3 p-10'>
                <h2 className='text-center text-4xl font-medium tracking-widest text-darkGreen' style={{ fontFamily: 'Playfair Display' }}>OUR BESTSELLERS</h2>
            </div>
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            <div className='transition-transform duration-300 hover:scale-105'>
                <FurnitureCard 
                    firstColor='bg-white' 
                    secondColor='bg-furnitureGreen' 
                    thirdColor='bg-furnitureGrey' 
                    fourthColor='bg-furnitureBrown' 
                    itemName='Tee Living room Sofa' 
                    itemPrice='265,000' 
                    image={TeeLivingRoomSofa} />
                </div>
                <div className='transition-transform duration-300 hover:scale-105'>
                <FurnitureCard firstColor='bg-white' secondColor='bg-furnitureDarkGreen' 
                thirdColor='bg-furnitureOrange' fourthColor='bg-furnitureRed' 
                itemName='Bobby Single Sofa' itemPrice='65,000' image={BobbySingleSofa} />
                </div>
                <div className='transition-transform duration-300 hover:scale-105'>
                <FurnitureCard firstColor='bg-furnitureDarkGreen' secondColor='bg-furnitureDarkGrey' thirdColor='bg-white' fourthColor='bg-furnitureOrange' itemName='Sleeper Sofa' itemPrice='560,000' image={SleeperSofa} />
                </div>
                <div className='transition-transform duration-300 hover:scale-105'>
                <FurnitureCard firstColor='bg-white' secondColor='bg-furnitureGreen' thirdColor='bg-furnitureBrown' fourthColor='bg-furnitureRed' itemName='Standing Framed Mirror' itemPrice='65,000' image={StandingFramedMirror} />
                </div>
                <div className='transition-transform duration-300 hover:scale-105'>
                <FurnitureCard firstColor='bg-white' secondColor='bg-furnitureDarkGreen' thirdColor='bg-furnitureDarkGrey' fourthColor='bg-furnitureLightBlue' itemName='Luxury Bedside Stool' itemPrice='125,000' image={LuxuryBedsideStool}/>
                </div>
                <div className='transition-transform duration-300 hover:scale-105'>
                <FurnitureCard firstColor='bg-furnitureDarkGreen' secondColor='bg-furniturePink' thirdColor='bg-white' fourthColor='bg-furnitureGreen' itemName='Tats Queen-sized Bed' itemPrice='390,000' image={EllaQueenSizedBed}/>
                </div>
            </div>
            </div>
            <div className='flex justify-center pb-20'>
                {/* <div> */}
                <h4 className='border-b-2 border-caribbeanCurrent p-2 text-center tracking-widest text-caribbeanCurrent'>SHOP BEST SELLERS</h4>
                {/* </div> */}
            </div>
    </div>
  )
}

export default BestsellerSection
