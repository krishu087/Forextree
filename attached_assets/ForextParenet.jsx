import React from 'react'
import Navbar from './Navbar'
import PropFirmComparison from './PropFirmComparison'
import Firstview from './Firstview'
import Footer from './Footer'
import Sub from './Sub'
import CompareNow from './CompareNow'
import Courses from './courses'
import PipsCalculator from './PipsCalculator'
import News from './News'


function ForextParenet() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-black to-gray-900 pt-7 text-white text-3xl font-bold relative">
    <Navbar/>
    <Firstview/>
    
    <PropFirmComparison/>
    {/* <PipsCalculator/> */}
    <News/>
    <Courses/>
    <Footer/>

    </div>
  )
}

export default ForextParenet
