import React from 'react'
import NewsletterImage from "../images/Newsletter.png"

function SubscribeSection() {
  return (
    <div className='flex items-center justify-around pt-10'>
        <img src={NewsletterImage} />
    </div>
  )
}

export default SubscribeSection