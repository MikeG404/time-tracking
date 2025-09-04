import React from 'react'
import ellipses from '/public/images/icon-ellipsis.svg'

export default function Card({ image, title, timeframe, color }) {
  return (
        <div className="card-header relative grid-card rounded-2xl" style={{ backgroundColor: color }}>
            <div className='absolute top-0 right-0'>
                <img src={image} alt={title} />
            </div>
            <div className='card-content flex flex-col items-start gap-6 p-8 bg-blue-950 rounded-2xl max-w-[255px] w-full absolute bottom-0'>
                <div className='flex justify-between items-center w-full'>
                  <h3 className='text-white text-preset-5-medium'>{title}</h3>
                  <img src={ellipses} alt={title} />
                </div>
                <div className='flex flex-col gap-2'>
                  <p className='text-white text-preset-1'>{timeframe.current}hrs</p>
                  <p className='text-white text-preset-6'>Last Week - {timeframe.previous}hrs</p>
                </div>
            </div>
    </div>
  )
}
