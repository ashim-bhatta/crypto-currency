import React from 'react'
import MainHeading from '../component/mainHeading/MainHeading'
import AboutBitcoin from '../component/aboutBitcoin/AboutBitcoin'
import Feature from '../component/features/Feature'
import GetStarted from '../component/getStarted/GetStarted'
import OurTeam from '../component/ourTeam/OurTeam'


const Home = ( ) => {
  return(
    <>
      <MainHeading />
      <AboutBitcoin />
      <Feature />
      <GetStarted />
      <OurTeam />
    </>
  )
}

export default Home
