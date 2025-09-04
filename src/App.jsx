import React from 'react'
import Card from './components/Card'

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
    <div className='h-screen flex items-center justify-center'>
      <div className='grid-container'>
        {data.map((item) => (
          <Card timeframe="daily" title={item.title} image={item.image} color={item.color} timeframe={item.timeframe} />
        ))}
      </div>
    </div>
  )
}

export default App