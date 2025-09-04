import React from 'react'
import Card from './components/Card'
import CardID from './components/CardID'

const data = [
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
]

function App() {
  return (
    <div className='min-h-screen max-w-80 my-[81px] flex justify-center items-center w-full md:max-w-[622px] xl:max-w-[829px]'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 w-full'>
        <CardID color='var(--purple-600)' />
        {data.map((item) => (
          <Card timeframe="daily" title={item.title} image={item.image} color={item.color} timeframe={item.timeframe} />
        ))}
      </div>
    </div>
  )
}

export default App