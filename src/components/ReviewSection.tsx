import ReviewCard from './ReviewCard'
import Review1 from "../images/Review1.png"
import Review2 from "../images/Review2.png"
import Review3 from "../images/Review3.png"
function ReviewSection() {
  return (
    <div>
        <h1 className="px-4 pt-20 text-center text-3xl font-medium tracking-widest text-greenText md:px-20" style={{ fontFamily: "Playfair Display"}}>WHAT OUR CUSTOMERS SAY</h1>
        <div className='flex flex-col justify-between gap-4 px-4 pt-10 md:flex-row md:gap-0 md:px-20'>
        <ReviewCard image={Review1} username='Sarah T' writeup={"I purchased a Bed from You, and it has completely transformed my bedroom space. The craftsmanship is impeccable, and I love knowing it’s made from sustainable materials. Delivery was quick, and the team was so helpful!"} />
        <ReviewCard image={Review2} username='Kaycee' writeup={"The custom bookshelf I ordered is not only functional but a statement piece in my home. It’s exactly what I envisioned, My Cat Teddy Loves it too  and the quality exceeded my expectations. Thank you for such excellent service!"} />
        <ReviewCard image={Review3} username='Busco' writeup={"Our new Bed is perfect! It’s stylish, comfortable, and fits seamlessly with our home decor. I can’t imagine buying furniture anywhere else now"} />
    </div>
        </div>
  )
}

export default ReviewSection