import React from 'react'
import './Works.css'
function Works() {
  return (
    <div className='works'>
      <div className='left-works'>
        <div className='card1'>
            <div className='card'> </div>
            <div className='card-buttons'>
                <button className='card-button'>Development</button>
                <button className='card-button'>UI/UX</button>
                <button className='card-button'>Illustration </button>
            </div>
            <div className='card-title'>Roboto Landing Page</div>
        </div>
        <div className='card2'>
            <div className='card'> </div>
            <div className='card-buttons'>
                <button className='card-button'>Development</button>
                <button className='card-button'>UI/UX</button>
                <button className='card-button'>Illustration </button>
            </div>
            <div className='card-title'>Groteck Website</div>
        </div>
      </div>
      <div className='right-works'>
        <ul>
            <li>
                Featured Works
            </li>
        </ul>
        <div className='head'>
            Take a look at <br />our projects 
        </div>
        <div className='card2'>
            <div className='card'> 
                <button className='view-button arrow-button'>View project </button>
            </div>
            <div className='card-buttons'>
                <button className='card-button'>UI/UX</button>
                <button className='card-button'>Illustration </button>
            </div>
            <div className='card-title'>Poppin App Design</div>
        </div>
        <div className='card2'>
            <div className='card'> </div>
            <div className='card-buttons'>
                <button className='card-button'>Branding</button>
                <button className='card-button'>UI/UX</button>
            </div>
            <div className='card-title'>Helvavtica Branding</div>
        </div>

      </div>
    </div>
  )
}

export default Works
