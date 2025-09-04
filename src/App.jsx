import React from 'react'
import Card from './components/Card'

function App() {
  return (
    <div className='h-screen flex items-center justify-center bg-navy-950'>
      <div className='w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-4'>
        <Card timeframe="daily" title="Work" />
        <Card timeframe="weekly" title="Play" />
        <Card timeframe="monthly" title="Study" />
        <Card timeframe="daily" title="Exercise" />
        <Card timeframe="weekly" title="Social" />
        <Card timeframe="monthly" title="Self Care" />
      </div>
    </div>
  )
}

export default App