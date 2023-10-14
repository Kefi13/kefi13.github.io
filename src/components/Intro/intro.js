import React from 'react'
import '../Intro/intro.css'
import bg from '../../assets/image.png'
import btnImg from '../../assets/hireme.png'
import {Link} from 'react-scroll'
import ResumePDF from '../../assets/resume.pdf'
function Intro() {
    return (
        <section id='intro'>
            <div className='introContent'>
                <span className='hello'> Hello</span>
                <span className='introText'> I'am <span className='introName'> Ruchita </span> <span className='animated-text'><br/>Software Developer</span></span>
                <p className='introPara'> I am a skilled software Developer.<br/> With experience in creating beautiful front end. </p>
                <Link  
        to={ResumePDF}
        download="Example-PDF-document"
        target="_blank"
        rel="noreferrer"
      > <button className='btn'><img src={btnImg} alt='Hireme' className='btnImg'/> Hire me </button></Link>
            </div>
            <img src={bg} alt='Profile ' className='bg'/>
        </section>
    )
}

export default Intro;
