import React from 'react'
import MainHeading from '../component/mainHeading/MainHeading'
import AboutBitcoin from '../component/aboutBitcoin/AboutBitcoin'
import Feature from '../component/features/Feature'
import GetStarted from '../component/getStarted/GetStarted'

const Home = ( ) => {
  return(
    <>
      <MainHeading />
      <AboutBitcoin />
      <Feature />
      <GetStarted />
    </>
  )
}

export default Home
