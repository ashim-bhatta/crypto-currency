import React, { useState } from 'react'
import './ourTeam.css'
import imgTeam1 from '../../assets/img/member/1.jpg'
import imgTeam2 from '../../assets/img/member/2.jpg'
import imgTeam3 from '../../assets/img/member/3.jpg'
import imgTeam4 from '../../assets/img/member/4.jpg'
import imgTeam5 from '../../assets/img/member/5.jpg'

import { FiFacebook } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';

const OurTeam = ( ) => {
  const [ teams ] = useState([
    {
      img : imgTeam1,
      name : 'Tom Binegar',
      position : 'Marketing Director',
    },
    {
      img : imgTeam2,
      name : 'Jackson Nash',
      position : 'Ceo Bitcoin',
    },
    {
      img : imgTeam3,
      name : 'Katy Abrams',
      position : 'Business Development',
    },
    {
      img : imgTeam4,
      name : 'Aaron Ballance',
      position : 'Product Manager',
    },
    {
      img : imgTeam5,
      name : 'Melissa Barth',
      position : 'Head of Design',
    },

  ])
  return(
    <div className='our-team'>
        <div className='team-title'>
          <h2>
            Meet Our Team
          </h2>
          <p className='para team-p'>
            Our experts in the field of crypto currency can always help you with any of your questions!
          </p>
        </div>

        <div className='team-list'>
          {
            teams.map((team) =>{
              return(
                <div className='team' key={team.name}>
                    <div className='team-img'>
                      <img className='team-pic' src={team.img} alt={team.name}/>
                    </div>
                    <h3 className='team-name'>
                      {team.name}
                    </h3>
                    <p className='team-position'>
                      {team.position}
                    </p>
                  <div className='team-detail'>
                      <p className='para team-detail-p'>
                        {team.name} is a full-time faculty member of the Marketing and Behavioural Science Division at the Sauder School of Business at UBC.
                      </p>
                  </div>

                  <div className='team-social'>
                      <div className='social-fb'>
                        <FiFacebook className='social-icon'/>
                      </div>

                      <div className='social-linked'>
                        <FaLinkedinIn className='social-icon'/>
                      </div>

                      <div className='social-twitter'>
                        <AiOutlineTwitter className='social-icon'/>
                      </div>
                  </div>
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default OurTeam













// m
