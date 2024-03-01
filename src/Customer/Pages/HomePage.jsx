import React from 'react'
import MainCarosal from '../HomeCarosal/MainCarosal'
import HomeSectionCarosel from '../Components/HomeSectionCarosel/HomeSectionCarosel'

const HomePage = () => {
  return (
    <div>
        <MainCarosal/>
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
          <HomeSectionCarosel/>
          <HomeSectionCarosel/>
          <HomeSectionCarosel/>
          <HomeSectionCarosel/>
        </div>
    </div>
  )
}

export default HomePage