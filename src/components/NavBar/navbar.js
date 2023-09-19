import React, { useState } from 'react';
import '../NavBar/navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import {Link} from 'react-scroll';
import menu from '../../assets/menu.png'


const Navbar = () =>{
    const[showMenu,setShowMenu] = useState(false)
    return (
        
           <nav className="navbar">
            <img src={logo} alt='logo' className='logo'/>
            <div className='desktopMenu'>
            <Link activeClass="active" to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'> Home</Link>
             <Link activeClass="active" to='skills' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'> About </Link>
             <Link className='desktopMenuListItem'> Hobbies</Link>
             <Link className='desktopMenuListItem'> Projects</Link>
            </div>
             
            <button className='desktopMenuBtn'>
                <img src={contactImg} alt='' className='desktopMenuBtnImg'/> Contact Me 
            </button>
            <img src={menu} alt='menu' className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
            <div className='navMenu' style={{display : showMenu? 'flex': 'none'}}>
            <Link activeClass="active" to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}> Home</Link>
             <Link activeClass="active" to='skills' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}> About </Link>
             <Link className='listItem' onClick={()=>setShowMenu(false)}> Skills</Link>
             <Link className='listItem' onClick={()=>setShowMenu(false)}> Projects</Link>
            </div>
           </nav>
        
    )
}

export default Navbar;
