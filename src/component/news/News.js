import React, { useState } from 'react'
import imgNews1 from '../../assets/img/news/1.jpg'
import imgNews2 from '../../assets/img/news/2.jpg'
import imgNews3 from '../../assets/img/news/3.jpg'
import './news.css'
import { FiHeart } from 'react-icons/fi';
import { AiOutlineComment } from 'react-icons/ai';

const News = ( ) => {
  const [ news ] = useState([
    {
      date : '03 JAN 2018',
      title : 'Coinbase to Reopen the GDAX Bitcoin Cash-Euro Order Book',
      like : 54,
      comment : 9,
      img : imgNews1
    },
    {
      date : '11 JAN 2018',
      title : 'Blockchain Rolls Out Trading Feature for 22 States in the U.S',
      like : 30,
      comment : 5,
      img : imgNews2
    },
    {
      date : '08 Feb 2018',
      title : 'This Week in Bitcoin: Up, Down and Sideways',
      like : 43,
      comment : 7,
      img : imgNews3
    },
  ])
  return (
    <div className='news'>
      <div className='news-head'>
        <h2 className='news-title'>
          Latest News
        </h2>
          <p className='para news-p'>
            Bitcoin is the simplest way to exchange money at very low cost.
          </p>
      </div>
      <div className='news-list'>

      </div>
      <div className='news-list'>
        {
          news.map((n) =>{
            return(
              <div className='single-news' key={n.title}>
                  <div className='news-img'>
                      <img src={n.img} alt={n.title} />
                  </div>
                  <div className='news-content'>
                    <p>
                        {
                          n.date
                        }
                      </p>
                      <h3>
                        {
                          n.title
                        }
                      </h3>
                  </div>
                  <div className='action'>
                    <div className='like'>
                        <FiHeart className='icon-heart' />
                        <span>
                          {n.like}
                        </span>
                    </div>
                    <div className='comment'>
                        <AiOutlineComment className='icon-comment' />
                        <span>
                          {n.comment}
                        </span>
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



export default News
