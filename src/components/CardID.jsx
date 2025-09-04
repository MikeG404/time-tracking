import React from 'react'
import avatar from '/public/images/image-jeremy.png'

export default function CardID({ color }) {
  return (
    <div className='flex flex-col gap-6 bg-blue-950 rounded-2xl md:col-span-3 xl:col-span-1 xl:row-span-2'>
        <div className='id-content flex flex-row items-center gap-6 rounded-2xl p-8 xl:flex-col xl:items-start xl:gap-10 xl:p-8' style={{ backgroundColor: color }}>
            <div className='w-16 h-16'>
                <img src={avatar} alt='avatar' className='border-2 border-white rounded-full' />
            </div>
            <div className='id-content-text'>
                <h1 className='text-white text-preset-6'>Report for</h1>
                <h2 className='text-white text-preset-4'>Jeremy Robson</h2>
            </div>
        </div>
        <nav className='flex flex-row justify-evenly pb-6 gap-4 xl:flex-col xl:items-start xl:pl-8'>
            <button className='text-white text-preset-5-regular'>Daily</button>
            <button className='text-white text-preset-5-regular'>Weekly</button>
            <button className='text-white text-preset-5-regular'>Monthly</button>
        </nav>
    </div>
  )
}
