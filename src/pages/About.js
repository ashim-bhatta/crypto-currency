import React from 'react'
import SecHeader from '../component/secheader/SecHeader'
import AboutBitcoin from '../component/aboutBitcoin/AboutBitcoin'
import OurTeam from '../component/ourTeam/OurTeam'
import User from '../component/user/User'
import Newsletter from '../component/newsletter/Newsletter'
import Footer from '../component/footer/Footer'

const About = ( ) => {
  return(
    <div className='about'>
      <SecHeader pgTitle='About US'/>
      <OurTeam />
      <AboutBitcoin/>
      <User />
      <Footer />
    </div>
  )
}
export default About;
