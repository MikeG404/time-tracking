import React from 'react'

export default function Card({ image, title, timeframe }) {
  return (
        <div className='card-header relative bg-amber-300 aspect-square w-64 rounded-2xl'>
            <div className='absolute top-0 left-0'>
                <img src={image} alt={title} />
            </div>
            <div className='card-content flex flex-col items-start gap-6 p-8 bg-blue-950 rounded-2xl max-w-[255px] w-full h-full max-h-[199px] absolute bottom-0'>
                <h3 className='text-white text-preset-5-medium'>{title}</h3>
                <div className='flex flex-col gap-2'>
                  <p className='text-white text-preset-1'>36hrs</p>
                  <p className='text-white text-preset-6'>Last Week - 36hrs</p>
                </div>
            </div>
    </div>
  )
}
