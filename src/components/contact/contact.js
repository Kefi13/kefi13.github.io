import React from 'react'
import "./contact.css"
import { SocialIcon } from 'react-social-icons'

function Contact() {
    return (
        <section id='contacts'>
         <div className='contactTitle'> Contact Me  </div>
         <div className='contactTab'>
            <div className='contactUs'>
                <h4>You can Contact me on on : sawaleruchita@gmail.com</h4>
            </div>
            <div>
            <SocialIcon className="socialIcons"  network="github"  url="https://github.com/Kefi13" />
            <SocialIcon className= "socialIcons" network="linkedin" url="https://www.linkedin.com/in/ruchita-sawale/" />
            </div>
            

        
            
                
            </div>
         
    </section>
    )
}

export default Contact
