import React from "react"
import imgAbout from '../../assets/img/about-img.png'
import './aboutBitcoin.css'
const AboutBitcoin = ( ) => {
  return(
    <div className='about-bitcoin'>
      <div className='about-content'>
        <h2 className='section-title'>
          What is Bitcoin?
        </h2>
        <p className='main-para'>
          Bitcoin is an innovative payment network and a new kind of money.
        </p>

        <p className='para about-p'>
          Bitcoin is one of the most important inventions in all of human history. For the first time ever, anyone can send or receive any amount of money with anyone else, anywhere on the planet, conveniently and without restriction. It’s the dawn of a better, more free world.
        </p>
        <button className='main-btn about-btn'>
          get started
        </button>
      </div>
      <div className='about-img'>
          <img src={imgAbout} alt="image showing Bitcoin" />
      </div>

    </div>
  )
}

export default AboutBitcoin
