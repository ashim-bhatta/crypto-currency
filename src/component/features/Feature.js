import React, { useState } from 'react'
import { FaMobileAlt } from "react-icons/fa";
import { AiOutlineSafety } from "react-icons/ai";
import { FaHeadset } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { GoSettings } from "react-icons/go";
import { BsArrowRepeat } from "react-icons/bs";

import './feature.css'

const Feature = ( ) =>{
  const [ featureList ] = useState([
    {
      icons : <FaMobileAlt class="icon-feature" />,
      title : 'Mobile Apps',
    },
    {
      icons : <AiOutlineSafety class="icon-feature" />,
      title : 'Safe & Secure',
    },
    {
      icons : <FaWallet class="icon-feature" />,
      title : 'Wallet',
    },
    {
      icons : <FaHeadset class="icon-feature" />,
      title : 'Experts Support',
    },
    {
      icons : <BsArrowRepeat class="icon-feature" />,
      title : 'Instant Exchange',
    },
    {
      icons : <GoSettings class="icon-feature" />,
      title : 'Recuring Buys',
    },
  ])
  return(
    <dic className='features'>
      <div className='features-title'>
        <h2>
          our features
        </h2>
        <p className='para feature-p'>
          Bitcoin is the simplest way to exchange money at very low cost.
        </p>
      </div>
      <div className='feature-list'>
          {
            featureList.map((feature) => {
              return(
                  <div className='feature' key={feature.title}>
                      <div className='feature-icon'>
                        {feature.icons}
                      </div>

                      <div className='feature-content'>
                          <h3 className='feature-title'>
                            {feature.title}
                          </h3>
                          <p>
                            Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.
                          </p>
                          <a href='#'>Read More</a>
                      </div>
                  </div>

              )
            })
          }
      </div>
    </dic>
  )
}

export default Feature
