import React, { useState } from 'react'
import Card from './components/Card'
import CardID from './components/CardID'

const data = {
  daily: [
    {
      title: 'Work',
      image: '/images/icon-work.svg',
      color: 'var(--orange-300)',
      timeframe: {
        current: 5,
        previous: 7,
      },
    },
    {
      title: 'Play',
      image: '/images/icon-play.svg',
      color: 'var(--blue-300)',
      timeframe: {
        current: 1,
        previous: 2,
      },
    },
    {
      title: 'Study',
      image: '/images/icon-study.svg',
      color: 'var(--red-400)',
      timeframe: {
        current: 0,
        previous: 1,
      },
    },
    {
      title: 'Exercise',
      image: '/images/icon-exercise.svg',
      color: 'var(--green-400)',
      timeframe: {
        current: 1,
        previous: 1,
      },
    },
    {
      title: 'Social',
      image: '/images/icon-social.svg',
      color: 'var(--purple-700)',
      timeframe: {
        current: 1,
        previous: 3,
      },
    },
    {
      title: 'Self Care',
      image: '/images/icon-self-care.svg',
      color: 'var(--yellow-300)',
      timeframe: {
        current: 0,
        previous: 1,
      },
    },
  ],
  weekly: [
    {
      title: 'Work',
      image: '/images/icon-work.svg',
      color: 'var(--orange-300)',
      timeframe: {
        current: 32,
        previous: 36,
      },
    },
    {
      title: 'Play',
      image: '/images/icon-play.svg',
      color: 'var(--blue-300)',
      timeframe: {
        current: 10,
        previous: 8,
      },
    },
    {
      title: 'Study',
      image: '/images/icon-study.svg',
      color: 'var(--red-400)',
      timeframe: {
        current: 4,
        previous: 7,
      },
    },
    {
      title: 'Exercise',
      image: '/images/icon-exercise.svg',
      color: 'var(--green-400)',
      timeframe: {
        current: 4,
        previous: 5,
      },
    },
    {
      title: 'Social',
      image: '/images/icon-social.svg',
      color: 'var(--purple-700)',
      timeframe: {
        current: 5,
        previous: 10,
      },
    },
    {
      title: 'Self Care',
      image: '/images/icon-self-care.svg',
      color: 'var(--yellow-300)',
      timeframe: {
        current: 2,
        previous: 2,
      },
    },
  ],
  monthly: [
    {
      title: 'Work',
      image: '/images/icon-work.svg',
      color: 'var(--orange-300)',
      timeframe: {
        current: 103,
        previous: 128,
      },
    },
    {
      title: 'Play',
      image: '/images/icon-play.svg',
      color: 'var(--blue-300)',
      timeframe: {
        current: 23,
        previous: 29,
      },
    },
    {
      title: 'Study',
      image: '/images/icon-study.svg',
      color: 'var(--red-400)',
      timeframe: {
        current: 13,
        previous: 19,
      },
    },
    {
      title: 'Exercise',
      image: '/images/icon-exercise.svg',
      color: 'var(--green-400)',
      timeframe: {
        current: 11,
        previous: 18,
      },
    },
    {
      title: 'Social',
      image: '/images/icon-social.svg',
      color: 'var(--purple-700)',
      timeframe: {
        current: 21,
        previous: 23,
      },
    },
    {
      title: 'Self Care',
      image: '/images/icon-self-care.svg',
      color: 'var(--yellow-300)',
      timeframe: {
        current: 7,
        previous: 11,
      },
    },
  ],
}

function App() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('weekly')

  return (
    <div className='min-h-screen p-4 flex justify-center items-center'>
      <div 
        className='
          grid 
          grid-cols-1 
          md:grid-cols-3
          xl:grid-cols-4
          gap-6 
          w-full 
          max-w-sm
          md:max-w-4xl
          xl:max-w-6xl'
        >
        <CardID 
          color='var(--purple-600)' 
          selectedTimeframe={selectedTimeframe}
          onTimeframeChange={setSelectedTimeframe}
        />
        {data[selectedTimeframe].map((item, index) => (
          <Card 
            key={index}
            title={item.title} 
            image={item.image} 
            color={item.color} 
            timeframe={item.timeframe}
            selectedTimeframe={selectedTimeframe}
          />
        ))}
      </div>
    </div>
  )
}

export default App