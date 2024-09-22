import React from 'react'
import './Services.css'
function Services() {
  return (
    <div className='services'>
        <div className='service-card'>
            <div class='service-upper'>
                <div className='our'>
                    <ul>
                        <li>Our Services</li>
                    </ul>
                </div>
                <div className='service-desc'>We are a close-knit team of experts dedicated to crafting memorable and <span className='gray'> emotionally engaging websites, digital experiences, and native apps.</span></div>

            </div>
            <div className='service-lower'>
                <div className='service-cards active'>
                    <div className='upper-service-card'>
                        <div className='service-card-title'>BRAND <br />IDENTITY</div>
                        <button className='crd-button'></button>
                    </div>
                    <div className='lower-service-card'>
                        <div className='service-card-desc'>We provide digital solutions as Website
                        Design, Mobile App Design, Landing Page design, Illustration, Animation, etc that increase company's values</div>
                    </div>
                </div>
                <div className='service-cards '>
                    <div className='upper-service-card'>
                            <div className='service-card-title'>UI/UX <br />DESIGN</div>
                            <button className='crd-button'></button>
                    </div>
                    <div className='lower-service-card'>
                            <div className='service-card-desc'>We provide digital solutions as Website
                            Design, Mobile App Design, Landing Page design, Illustration, Animation, etc that increase company's values</div>
                    </div>
                </div>
                <div className='service-cards '>
                <div className='upper-service-card'>
                        <div className='service-card-title'>WEBFLOW <br />DEVELOPER</div>
                        <button className='crd-button'></button>
                    </div>
                    <div className='lower-service-card'>
                        <div className='service-card-desc'>We provide digital solutions as Website
                        Design, Mobile App Design, Landing Page design, Illustration, Animation, etc that increase company's values</div>
                    </div>
                </div>

            </div>
        </div>

    </div>
  )
}

export default Services
