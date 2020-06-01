import React from 'react'
import './mainHeading.css'
import imgLaptop from '../../assets/img/laptop.png'
import Nav from '../nav/Nav'
const MainHeading = ( ) => {
  return(
    <header className='main-heading'>
        <Nav />
        <div className='hero-bg'></div>
        <div className='hero'>
          <div className='hero-content'>
            <h1 className='title'>
              Invest in <span>Bitcoin</span>
              <br />
              Bitcoin <span>Trading</span>
            </h1>
            <p className='para'>
              Use modern progressive technologies of Bitcoin to earn money
            </p>

            <form>
              <input type='text' placeholder='Enter your name' />
              <input type='submit' value='get started' />
            </form>
          </div>

          <div className='hero-img'>
            <img src={imgLaptop} alt='laptop' />
          </div>
        </div>
    </header>
  )
}

export default MainHeading
