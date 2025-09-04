import React from 'react'
import ellipses from '/public/images/icon-ellipsis.svg'

export default function Card({ image, title, timeframe, color }) {
  return (
        <div className="" style={{ backgroundColor: color }}>
            <div className=''>
                <img src={image} alt={title} />
            </div>
            <div className=''>
                <div className=''>
                  <h3 className='text-white text-preset-5-medium'>{title}</h3>
                  <img src={ellipses} alt={title} />
                </div>
                <div className=''>
                  <p className='text-white text-preset-1'>{timeframe.current}hrs</p>
                  <p className='text-white text-preset-6'>Last Week - {timeframe.previous}hrs</p>
                </div>
            </div>
    </div>
  )
}
