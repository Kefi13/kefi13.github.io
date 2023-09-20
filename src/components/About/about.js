import React from 'react'
import './about.css'
import UIDesign from '../../assets/ui-design.png'
//import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

const Skills = ()=> {
    return (
        <section id='skills'>
            <span className='skillTitle'>About me  </span>
            <span className='skillDesc'>"I am eager to find an opportunity where I can foster both personal and professional development through hands-on technical work. With three years of software engineering experience, I bring strong leadership skills to the table.

My objective is to secure a challenging role that promotes my growth while contributing to the organization's success. I excel in team management and thrive on generating innovative ideas that have a positive impact.

I am actively seeking an organization that values hands-on experience and technical proficiency, as I am committed to enhancing my skill set further."</span>
            <div className='skillBars'>
            <div className='skillBar'>
                <img src={UIDesign} alt='UIDesign' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>Software Development </h2>
                        <p>I have 3+ years of experience in developing Mobile Application Development using Java, Xml, flutter, react and JS  technologies. .</p>
                    </div>
                     
                </div>
                
                <div className='skillBar'>
                    <img src={AppDesign} alt='AppDesign' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>Team lead and Project Management </h2>
                        <p>I possess over three years of experience in team building and management, coupled with a solid background in project management and agile methodology-based planning.</p>
                    </div>
                     
                </div>
            </div>
        
        
        </section>
    )
}

export default Skills;
