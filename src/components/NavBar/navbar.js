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
         {/* <Link activeClass="active" to='projects' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'> Projects</Link> -->*/}
             <Link  activeClass="active" to='contacts' spy={true} smooth={true} offset={-100} duration={500}className='desktopMenuListItem'> Contact Us </Link>
            </div>
             
            <img src={menu} alt='menu' className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
            <div className='navMenu' style={{display : showMenu? 'flex': 'none'}}>
            <Link activeClass="active" to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}> Home</Link>
             <Link activeClass="active" to='skills' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}> About </Link>
             <Link activeClass="active" to='projects' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}> Projects</Link>
             <Link activeClass="active" to='contacts' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}> Contact Us </Link>
            </div>
           </nav>
        
    )
}

export default Navbar;
