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
      icons : <FaMobileAlt style={{ fill : 'rgb(76, 182, 176)'}} />,
      title : 'Mobile Apps',
    },
    {
      icons : <AiOutlineSafety style={{ fill : 'rgb(76, 182, 176)'}} />,
      title : 'Safe & Secure',
    },
    {
      icons : <FaWallet style={{ fill : 'rgb(76, 182, 176)'}} />,
      title : 'Wallet',
    },
    {
      icons : <FaHeadset style={{ fill : 'rgb(76, 182, 176)'}} />,
      title : 'Experts Support',
    },
    {
      icons : <BsArrowRepeat style={{ fill : 'rgb(76, 182, 176)'}} />,
      title : 'Instant Exchange',
    },
    {
      icons : <GoSettings style={{ fill : 'rgb(76, 182, 176)'}} />,
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
                  <div className='feature' key={feature.icons}>
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
