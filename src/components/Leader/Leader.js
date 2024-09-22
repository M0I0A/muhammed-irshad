import React from 'react'
import './Leader.css'

function Leader() {
  return (
    <div className='leader'>
        <div className='leader-head'>
        <div className='our' >
            <ul>
                <li>
                    Our leader
                </li>
            </ul>
        </div>
        <div className='service-desc'>Each product is crafted with passion and dedication. Meet our leader !</div>

        </div>
        <div className='boxes'>
            <div className='row1'>
                <div className='content-non-left first'> </div>
                
                <div className='content-box'>
                    <div className='content-box-left active'></div>
                    <div className='content-box-right active'>
                        <div className='name'>Cody Fisher</div>
                        <div className='title'>CEO Founder</div>
                        <div className='social-icons'>
                            <div className='social-icon'>X</div>
                            <div className='social-icon'>ln</div>
                            <div className='social-icon'>Ig</div>
                        </div>
                    </div>

                </div>
                <div className='content-non-right first'></div>
            </div>
            <div className='row2'>
                <div className='content-non-left second'> </div>
                
                <div className='content-box'>
                    <div className='content-box-left'></div>
                    <div className='content-box-right'>
                        <div className='name'>Kristin Watson</div>
                        <div className='title'>Manager</div>
                        <div className='social-icons'>
                            <div className='social-icon'>X</div>
                            <div className='social-icon'>ln</div>
                            <div className='social-icon'>Ig</div>
                        </div>
                    </div>

                </div>
                <div className='content-non-right second'></div>
            </div>
            <div className='row3'>
                <div className='content-non-left third'> </div>
                
                <div className='content-box'>
                    <div className='content-box-left'></div>
                    <div className='content-box-right'>
                        <div className='name'>Leslie Alaxander</div>
                        <div className='title'>Design Leader</div>
                        <div className='social-icons'>
                            <div className='social-icon'>X</div>
                            <div className='social-icon'>ln</div>
                            <div className='social-icon'>Ig</div>
                        </div>
                    </div>

                </div>
                <div className='content-non-right third'></div>
            </div>

        </div>
        

      
    </div>
  )
}

export default Leader
