import { MdOutlineShoppingBag } from "react-icons/md";

interface IFurnitureCard {
    firstColor: string;
    secondColor: string;
    thirdColor: string;
    fourthColor?: string;
    itemName: string;
    itemPrice: string;
    image: string;
}
function FurnitureCard({firstColor, secondColor, thirdColor, fourthColor, itemName, itemPrice, image}: IFurnitureCard) {
  return (
    <div className='flex size-full flex-col justify-end rounded-2xl' style={{ fontFamily: 'Urbanist' }}>
        {/* Image Section */}
        <div className='flex h-full flex-col justify-between rounded-t-lg bg-grey p-4'>
            <div className=" flex justify-end -space-x-2 p-2">
                <div className={`size-8 rounded-full ${firstColor}`}></div>
                <div className={`size-8 rounded-full ${secondColor}`}></div>
                <div className={`size-8 rounded-full ${thirdColor}`}></div> 
                <div className={`size-8 rounded-full ${fourthColor}`}></div>
            </div>
            <div className='flex items-center justify-center'>
                <img width={250} height={250} src={image} alt={itemName} />
            </div>
        </div>
        {/* Description Section */}
        <div className='flex items-center justify-between rounded-b-lg border-2 p-4'>
            <div>
            <h3 className='text-left text-2xl font-light tracking-widest text-furnitureDarkGreen'>{itemName}</h3>
            <p className='text-left text-lg font-bold tracking-wider text-furnitureDarkGreen'>₦{itemPrice}</p>
            </div>
        
            <div>
                <MdOutlineShoppingBag size={25} />
            </div>
        </div>
    </div>
  )
}

export default FurnitureCard