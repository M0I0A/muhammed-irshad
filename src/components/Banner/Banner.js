import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className='banner'>
        <div className='upper'>
            <div className='left'>
                <ul >
                    <li>Who are we?</li>
                </ul>
                <button className='who'></button>
            </div>
            <div className='right'>
                <div className='desc1'>We create mind-blowing visuals, brands, websites and products <span className='gray'> that help startups and innovative companies gain more exposure.</span></div>
                <button className='learn-button arrow-button'>Learn more
                    
                </button>
            </div>
        </div>
      
      
    </div>
  )
}

export default Banner
