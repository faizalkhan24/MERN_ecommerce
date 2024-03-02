import React from 'react'
import MainCarosal from '../HomeCarosal/MainCarosal'
import HomeSectionCarosel from '../Components/HomeSectionCarosel/HomeSectionCarosel'
import {men_kurta} from '../Data/Men/men_kurta'
import{women_dress} from '../Data/Women/women_dress'
import { mensShoes } from '../Data/shoes'
import { men_shirt } from '../Data/Men/men_shirt'
import { saree } from '../Data/Saree/page1'
const HomePage = () => {
  return (
    <div>
        <MainCarosal/>
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
          <HomeSectionCarosel data={men_kurta} sectionName={"Men's Kurtas"}/>
          <HomeSectionCarosel data={mensShoes} sectionName={"Men's Shoes"}/>
          <HomeSectionCarosel data={men_shirt} sectionName={"Men's Shirt"}/>
          <HomeSectionCarosel data={women_dress} sectionName={"Women' Dress"}/>
          <HomeSectionCarosel data={saree} sectionName={"Women's Saree"}/>
        </div>  
    </div>
  )
}

export default HomePage