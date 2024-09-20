import React from 'react'
import Navbar from './components/Navbar/Navbar'
import LandingPage from './components/LandingPage/LandingPage'

const Layout = () => {
  return (
    <div className='h-full w-screen'>
          <Navbar/>
          <LandingPage/>
    </div>
  )
}

export default Layout
