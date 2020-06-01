import React, { useState } from 'react'
import './nav.css'
import imgLogo from '../../assets/img/logo.png'

// icon
import { FaUser } from "react-icons/fa";
const Nav = ( ) => {
  const [ menuItems ] = useState([
    'solution',
    'features',
    'news',
    'about',
    'contact'
  ])
  const [ isMobMenu, setIsMovMenu ] = useState(false)
  return(
    <>
      <nav>

        {/* logo */}
          <div className='logo-container'>
            <img src={imgLogo}  alt='Brand Logo "crypto"'/>
          </div>

          {/* desktop menu */}
          <div className='des-menu'>
            <ul className="des-menu-items">
                {
                  menuItems.map((menuItem) =>{
                    return(
                      <li className='des-menu-item' key={menuItem}>
                          <a href='#' className='des-menu-link'>
                            {menuItem}
                          </a>
                      </li>
                    )
                  })
                }
                <li className='des-menu-btn'>
                  get started
                </li>
            </ul>
          </div>

          {/* mobile menu toggler and user btn */}
          <div className='mob-spceial'>
            <div >
              <FaUser  className='icon-user'/>
            </div>

            <div className={isMobMenu? 'mob-menu-toggler animated': "mob-menu-toggler"} onClick={() => setIsMovMenu(!isMobMenu)}>
              <div className='line'></div>
              <div className='line'></div>
              <div className='line'></div>
            </div>
          </div>
      </nav>


      {/* mobile menu */}
      <div className={isMobMenu? 'mob-menu open': "mob-menu"}>
        <ul className="mob-menu-items">
            {
              menuItems.map((menuItem) =>{
                return(
                  <li className='mob-menu-item' key={menuItem}>
                      <a href='#' className='mob-menu-link'>
                        {menuItem}
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
