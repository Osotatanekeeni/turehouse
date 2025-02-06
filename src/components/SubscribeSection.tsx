import NewsletterImage from "../images/Newsletter.png"

function SubscribeSection() {
  return (
    <div className='flex items-center justify-around px-4 pt-10 md:px-0'>
        <img src={NewsletterImage} />
    </div>
  )
}

export default SubscribeSection