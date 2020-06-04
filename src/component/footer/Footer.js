import React from 'react'
import imgLogo from '../../assets/img/logo.png'
import './footer.css'
const Footer = ( ) => {
  return(
    <div className='footer'>
      <div className='logo'>
        <img src={imgLogo} alt='logo image in footer' />
      </div>
      <ul className='footer-menu-items'>
        <li className='footer-menu-item'>
          DPA
        </li>
        <li className='footer-menu-item'>
          Terms of Use
        </li>
        <li className='footer-menu-item'>
          Privacy Policy
        </li>
        <li className='footer-menu-item'>
          support@company.com
        </li>
      </ul>
    </div>
  )
}

export default Footer
