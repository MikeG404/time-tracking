import React from 'react'
import ellipses from '/public/images/icon-ellipsis.svg'

export default function Card({ image, title, timeframe, color }) {
  return (
        <div className="flex flex-col rounded-2xl min-h-[160px] -z-20" style={{ backgroundColor: color }}>
            <div className='flex justify-ends relative h-[38px] -z-10 overflow-hidden'>
                <img className='absolute -top-2 right-4' src={image} alt={title} />
            </div>
            <div className='flex flex-col bg-blue-950 rounded-2xl p-6 gap-2 h-[122px] md:h-[160px] md:p-4'>
                <div className='flex justify-between items-center'>
                  <h3 className='text-white text-preset-5-medium'>{title}</h3>
                  <img src={ellipses} alt={title} />
                </div>
                <div className='flex items-center md:flex-col md:items-start md:gap-2'>
                  <p className='text-white text-preset-3 flex-1'>{timeframe.current}hrs</p>
                  <p className='text-white text-preset-6'>Last Week - {timeframe.previous}hrs</p>
                </div>
            </div>
    </div>
  )
}
