import React, {useRef} from 'react'
import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'
import { useMotionValueEvent, useScroll } from 'framer-motion'

const Skills = ({setScrollYProgress}) => {
    const skillsRef = useRef(null)   
    const { scrollYProgress } = useScroll({target: skillsRef});
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        setScrollYProgress(latest)
        console.log('hiiii:' , latest)
      })

  return (
    <section id='skills' ref={skillsRef}>
        <div className='skillTitle'>What I do</div>
        <div className='skillDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </div>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={UIDesign} alt='UIDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>UI/UX Design</h2>
                    <p>This is a demo text. You can write your own content here.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={WebDesign} alt='WebDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Website Design</h2>
                    <p>This is a demo text. You can write your own content here.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={AppDesign} alt='AppDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>App Design</h2>
                    <p>This is a demo text. You can write your own content here.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills