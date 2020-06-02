import React, { useState, useEffect } from 'react'
import imgUser1 from '../../assets/img/user/1.jpg'
import imgUser2 from '../../assets/img/user/2.jpg'
import imgUser3 from '../../assets/img/user/3.jpg'

import './user.css'
const User = ( ) => {
  const [ users ] = useState([
    {
      id : 0,
      name : 'Jackson Nash',
      saying : "Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning.",
      img : imgUser1,
    },
    {
      id : 1,
      name : 'Aaron Ballance',
      saying : "A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete",
      img : imgUser2,
    },
    {
      id : 2,
      name : 'Katy Abrams',
      saying : "Abcds writing challenge can be to take the individual sentences in the random paragraph and incorporate a single sentence from that into a new paragraph to create a short story.",
      img : imgUser3,
    },
  ])


  const [ userNumber, setUsernumber ] = useState(0)

  const changeUser = (opr ='+') =>{
    if(opr === '+'){
      const a = userNumber + 1
      setUsernumber(a >= 3?0:a)
    }
    else{
      const a = userNumber - 1
      setUsernumber(a <= -1?2:a)
    }
  }

  useEffect(() => {
    const timer = setTimeout(() =>changeUser(), 2500);
    return () => clearTimeout(timer);
  }, [userNumber]);


  return(
    <div className='user'>
      <h2 className='user-title'>
        testimonials
      </h2>
        <div className='no'>
          <div className='user-saying'>
              <div className='a'>
                <p>{users[userNumber].saying}</p>
              </div>

          </div>
          <div className='user-list'>
            {
              users.map((user) =>{
                return(
                  <div
                    className={
                      user.name=== users[userNumber].name?(
                        'user-del animate'
                      ):(
                        'user-del'
                      )}
                      key={user.name}
                      onClick={()=> setUsernumber(user.id)}
                    >
                      <div className='user-img'>
                        <img src={user.img} alt='image' />
                      </div>
                      <h3>{user.name}</h3>
                  </div>
                )
              })
            }
          </div>
        </div>


    </div>
  )
}

export default User
