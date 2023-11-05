import React, { useState } from 'react'
import './navbar.css'
import { Link } from 'react-scroll'
import logo from '../../assets/logo.svg';
import ProgressBar from '../Animations/ProgressBar/progressbar';
import menu from '../../assets/menu.svg'

const Navbar = ({ scrollProgresses }) => {
  const [showMenu, setShowMenu] = useState(false)
  return (
        <nav className="navbar">
            <img src={logo} alt="logo" className='logo' />
            <div className="desktopMenu">
                <div className='desktopMenuListItem'>
                  <Link activeClass='active' to='intro' spy={true} smooth={true} offset={200} duration={500}>home</Link>
                  <ProgressBar scrollYProgress={scrollProgresses.introScroll}/>
                </div>
                <div className='desktopMenuListItem'>
                  <Link activeClass='active' to='skills' spy={true} smooth={true} offset={200} duration={500}>about</Link>
                  <ProgressBar scrollYProgress={scrollProgresses.skillsScroll}/>
                </div>
                <div className='desktopMenuListItem'>
                  <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={200} duration={500}>portfolio</Link>
                  <ProgressBar scrollYProgress={scrollProgresses.portfolioScroll}/>
                </div>
                <div className='desktopMenuListItem'>
                  <Link activeClass='active' to='contact' spy={true} smooth={true} offset={200} duration={500}>contact</Link>
                  <ProgressBar scrollYProgress={scrollProgresses.contactScroll}/>
                </div>
            </div>
            <div>
              {/* social media buttons here! */}
            </div>


            {/* Burger menu */}
            <img src={menu} alt="menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
            <div className="navMenu" style={ {display: showMenu ? 'flex':'none'}} >
                <div className='listItem'>
                  <Link activeClass='active' to='intro' spy={true} smooth={true} offset={200} duration={500} onClick={()=>setShowMenu(false)}>home</Link>
                  <ProgressBar scrollYProgress={scrollProgresses.introScroll}/>
                </div>
                <div className='listItem'>
                  <Link activeClass='active' to='skills' spy={true} smooth={true} offset={200} duration={500} onClick={()=>setShowMenu(false)}>about</Link>
                  <ProgressBar scrollYProgress={scrollProgresses.skillsScroll}/>
                </div>
                <div className='listItem'>
                  <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={200} duration={500} onClick={()=>setShowMenu(false)}>portfolio</Link>
                  <ProgressBar scrollYProgress={scrollProgresses.portfolioScroll}/>
                </div>
                <div className='listItem'>
                  <Link activeClass='active' to='contact' spy={true} smooth={true} offset={200} duration={500} onClick={()=>setShowMenu(false)}>contact</Link>
                  <ProgressBar scrollYProgress={scrollProgresses.contactScroll}/>
                </div>
            </div> 
            
           
        </nav>
  )
}

export default Navbar