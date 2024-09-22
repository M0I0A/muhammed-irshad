import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className="footer1">
    <div className='container'>
        <div className="left-column">
            <h1>Feel free to conect <br />with us !</h1>
            <div class="social-icons">
                <div className="social-icon">𝕏</div>
                <div className="social-icon">Ig</div>
                <div className="social-icon">ln</div>
                <div className="social-icon">Be</div>
            </div>
            <div className="contact-info">📞 0972 663 633</div>
            <div className="contact-info">✉️ hello@wefo.com</div>
        </div>
        <div className="right-column">
        <form>
                <label for="name" className='form-name'>Name <span className='red-star'>*</span></label>
                <input type="text" id="name" placeholder="Your name" required/>
                
                <label for="email" className='form-email'>Email <span className='red-star'>*</span></label>
                <input type="email" id="email" placeholder="Your email address" required/>
                
                <label for="message" className='form-message' >Message</label>
                <textarea id="message" rows="4" placeholder="Write your message here..."></textarea>
                
                <button className='arrow-button' type="submit">Send</button>
            </form>
        </div>
    </div>
    <footer>
        <div class="logo">Wefo</div>
        <div class="footer-links">
            <a href="#">Privacy</a>
            <a href="#">Term</a>
            <a href="#">Security</a>
        </div>
    </footer>
    </div>
  )
}

export default Footer
