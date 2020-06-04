import React from 'react'
import SecHeader from '../component/secheader/SecHeader'
import News from '../component/news/News'
import Footer from '../component/footer/Footer'
import Newsletter from '../component/newsletter/Newsletter'

const NewsPage = ( ) => {
  return(
    <div className='about'>
      <SecHeader pgTitle='News'/>
      <News />
      <Newsletter />
      <Footer />
    </div>
  )
}
export default NewsPage;
