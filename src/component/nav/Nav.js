import React, { useState } from 'react'
import './nav.css'
import imgLogo from '../../assets/img/logo.png'
import { NavLink} from 'react-router-dom'

// icon
import { FaUser } from "react-icons/fa";
const Nav = ( ) => {
  const [ menuItems ] = useState([
    'home',
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
                      <NavLink to={menuItem} className='des-menu-link'>
                            {menuItem}
                      </NavLink>
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
                    <NavLink to={menuItem} className='mob-menu-link'>
                      <li className='mob-menu-item' key={menuItem}>

                          {menuItem}
                        </li>
                    </NavLink>
                )
              })
            }
        </ul>
      </div>
    </>
  )
}

export default Nav
