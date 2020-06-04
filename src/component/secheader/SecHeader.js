import React from 'react'
import Nav from '../nav/Nav'
import './secHeader.css'
const SecHeader = ( props ) => {
  return(
    <div className='sec-header'>
      <div className='sub-hero-bg'></div>
      <Nav />
      <div className='sub-header-content'>
        <div className='sub-header-title'>
          <h3>{props.pgTitle}</h3>
        </div>
        <div className='page-path'>
          <h4> Home <span> > {props.pgTitle}</span></h4>
        </div>
      </div>
    </div>
  )
}

export default SecHeader
