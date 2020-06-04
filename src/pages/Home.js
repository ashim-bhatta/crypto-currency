import React from 'react'
import MainHeading from '../component/mainHeading/MainHeading'
import AboutBitcoin from '../component/aboutBitcoin/AboutBitcoin'
import Feature from '../component/features/Feature'
import GetStarted from '../component/getStarted/GetStarted'
import OurTeam from '../component/ourTeam/OurTeam'
import User from '../component/user/User'
import News from '../component/news/News'
import Newsletter from '../component/newsletter/Newsletter'
import Footer from '../component/footer/Footer'

const Home = ( ) => {
  return(
    <>
      <MainHeading />
      <AboutBitcoin />
      <Feature />
      <GetStarted />
      <OurTeam />
      <User />
      <News />
      <Newsletter />
      <Footer />
    </>
  )
}

export default Home
