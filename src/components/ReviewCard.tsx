import React from 'react'

interface IReviewCard {
    image: string;
    username: string;
    writeup: string;
}

function ReviewCard({image, username, writeup}:IReviewCard) {
  return (
        <div className='flex w-1/4 flex-col gap-4 transform transition-transform duration-300 hover:scale-105'>
        <img src={image} />
        <h3 className='text-lg font-semibold tracking-widest text-greenText' style={{ fontFamily: "Urbanist"}}>{username}</h3>
        <p className='w-96 font-light tracking-wider' style={{ fontFamily: "Urbanist"}}>{writeup}</p>
        <p>⭐️⭐️⭐️⭐️⭐️</p>
    </div>
  )
}

export default ReviewCard