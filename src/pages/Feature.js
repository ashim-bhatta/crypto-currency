import React from 'react'
import SecHeader from '../component/secheader/SecHeader'
import Feature from '../component/features/Feature'
import OurTeam from '../component/ourTeam/OurTeam'
import User from '../component/user/User'
import Newsletter from '../component/newsletter/Newsletter'
import Footer from '../component/footer/Footer'

const FeaturePage = ( ) => {
  return(
    <div className='about'>
      <SecHeader pgTitle='Feature'/>
      <Feature />
      <Footer />
    </div>
  )
}
export default FeaturePage;
