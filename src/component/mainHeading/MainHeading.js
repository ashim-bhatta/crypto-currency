import React from 'react'

import './mainHeading.css'
import laptop from '../../assets/img/laptop.png'
const MainHeading = ( ) => {
  return(
    <header className='main-heading'>
      <div className='des-hero-bg'></div>
        <div className='hero-content'>
            <div className='a'>
              <div className='hero-bg'></div>
                <h1 className='hero-heading'>
                    Invest in <span>Bitcoin</span>
                    <br />
                    Bitcoin Trading
                </h1>
                <p className='brand-description'>
                  Use modern progressive technologies of Bitcoin to earn money
                </p>

                <form className='hero-form'>
                    <input
                      type='text'
                      placeholder='Enter your email'
                    />
                    <input type='submit' value='get started' className='btn main-btn'/>
                </form>
            </div>
            <div className='hero-main-img'>
                <img src={laptop} />
            </div>
        </div>
    </header>
  )
}

export default MainHeading
