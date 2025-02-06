import StoryImage from "../images/StoryImage.png";

export default function StorySetion() {
return  (
    <div className='flex flex-col-reverse px-4 pt-20 md:flex-row md:px-20'>
    {/* Write-up Section */}
    <div className='flex w-full flex-col justify-center gap-8 rounded-tr-lg text-greenText md:w-2/3' >
            <p className='w-full text-left text-2xl font-medium tracking-widest md:w-3/4' style={{ fontFamily: "Urbanist"}}>At <span className="text-tureGreen" style={{ fontFamily: "Playfair Display"}}>TUREHOUSE</span>, we believe furniture is more than just decor - it's a part of your story</p>
            <p className='w-full text-lg tracking-wider md:w-3/4' style={{ fontFamily: "Urbanist"}}>With over 25 years of experience in the art of furniture making, we specialize in creating pieces that combine functionality with timeless design. From handpicked materials to meticulous craftsmanship, every piece is built to last and enhance your living space.</p>
            <div className='flex'>
                {/* <div> */}
                <h4 className='border-b-2 border-tureGreen text-left tracking-widest text-tureGreen'>READ FULL STORY</h4>
                {/* </div> */}
            </div>
        </div>
        {/* Image Section */}
        <div className='flex w-full justify-center rounded-tl-lg md:w-1/2'>
            <img src={StoryImage} alt='sitting arrangement' />
        </div>
        
        </div>
)
}