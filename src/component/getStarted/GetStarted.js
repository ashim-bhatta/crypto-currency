import React, { useState } from 'react'
import { MdAccountBalanceWallet } from 'react-icons/md';
import { IoLogoBitcoin } from 'react-icons/io';
import { FaBitcoin } from 'react-icons/fa';

import './getStarted.css'
const GetStarted = ( ) => {
  const [ getStarted ] = useState([
    {
      icons : <MdAccountBalanceWallet class="icon-feature" />,
      title : 'Create Your Wallet',
    },
    {
      icons : <IoLogoBitcoin class="icon-feature" />,
      title : 'Manage Your Wallet',
    },
    {
      icons : <FaBitcoin class="icon-feature" />,
      title : 'Create Your Wallet',
    }
  ])
  return(
    <div className='features getStarted-bg'>
      <div className='features-title'>
          <h2>Get Started With Bitcoin</h2>
          <p className='para get-started-p'>
            Start learning about Bitcoin with interactive tutorials. It’s fun, easy, and takes only a few minutes!
          </p>
      </div>

      <div className='feature-list get-started-bg'>
          {
            getStarted.map((a) =>{
              return(
                <div className='feature' key={a.title}>
                    <div className='feature-icon'>
                      {a.icons}
                    </div>

                    <div className='feature-content'>
                        <h3 className='feature-title'>
                          {a.title}
                        </h3>
                        <p className='para'>
                          Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
              )
            })
          }
      </div>
    </div>
  )
}

export default GetStarted
