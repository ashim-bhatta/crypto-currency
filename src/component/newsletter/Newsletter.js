import React, { useState } from 'react'
import './newsletter.css'
import { BsArrowRight } from 'react-icons/bs';

const Newsletter = ( ) => {
  const [isFous, setIsFocus] = useState(false)
  return(
    <div className='newsletter'>
      <h2 className='newsletter-title'>
        Subscribe to our Newsletter
      </h2>
      <p className='para newsletter-p'>
        Sign up for our weekly industry updates, insider perspectives and in-depth market analysis.
      </p>
      <form>
        <input
          className='newsletter-form-text'
          onFocus={() => setIsFocus(!isFous)}
          type='text'
          placeholder='Enter your email'
          onFocusOut={() => setIsFocus(!isFous)}
        />
        <button className={isFous?"newsletter-form-submit animate-btn":"newsletter-form-submit"}> <BsArrowRight className='icon-arrow'/></button>
      </form>
    </div>
  )
}

export default Newsletter
