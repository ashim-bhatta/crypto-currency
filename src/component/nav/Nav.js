import React, { useState, useEffect } from 'react'

import { FaUser } from 'react-icons/fa'

import './nav.css'

import logo from '../../assets/img/logo.png'
const Nav = ( ) => {
  const [ isNavOpen, setIsNavOpen ] = useState(false)
  const [ menuItems, setMenuItems ] = useState([
    'solution',
    'features',
    'news',
    'about',
    'contact'
  ])

  useEffect(()=>{
    console.log(isNavOpen);
  },[isNavOpen])
  return(
    <>
      <nav>
          <div className='logo'>
              <img src={logo} alt='brand logo' />
          </div>
          <div className='des-menu'>
            <ul className='des-menu-items'>
                {
                  menuItems.map((item) => {
                    return(
                      <li className='des-menu-item' key={item}>
                          <a className='des-menu-item-link'>
                              {item}
                          </a>
                      </li>
                    )
                  })
                }
                <li className='des-menu-item-btn'>
                    Sign Up Free
                </li>
            </ul>
          </div>
          <div className='mob-icon'>
              <div className='user-icon'>
                  <FaUser className='sign-icon' />
              </div>
              <div className='mob-menu-toggle' onClick={() => setIsNavOpen(!isNavOpen)}>
                  <div className='line'></div>
                  <div className='line'></div>
                  <div className='line'></div>
              </div>
          </div>
      </nav>
      <div className={isNavOpen?'mob-menu open':'mob-menu'}>
        <ul className='mob-menu-items'>
            {
              menuItems.map((item) => {
                return(
                  <li className='mob-menu-item' key={item}>
                      <a className='mob-menu-item-link'>
                          {item}
                      </a>
                  </li>
                )
              })
            }

        </ul>
      </div>
    </>
  )
}

export default Nav
