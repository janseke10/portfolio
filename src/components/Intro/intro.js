import './intro.css'
import React, { useRef } from 'react'
// import useMediaQuery from '@mui/material/useMediaQuery';
import { useScroll, useMotionValueEvent, useTransform, motion } from "framer-motion"
import wheel from '../../assets/Group 2wheel.svg'
import bikeframe from '../../assets/bikeframe.svg'
import portfolio from '../../assets/portfli.png'
import welcome from '../../assets/welcometomy.png'

const Intro = ( {setScrollYProgress} ) => {
    const introRef = useRef(null)   
    const { scrollYProgress } = useScroll({
      target: introRef,
      offset: ["end end", "start start"]
    });
    const xPosAnim = useTransform(scrollYProgress, [0, 0.25, 0.7, 1], [ -100, 50, 50, 100])
    const xPosAnim2 = useTransform(scrollYProgress, [0, 0.25, 0.7, 1], [ -130, 20, 20, 70])
    const xPosBikeFrame = useTransform(scrollYProgress, [0, 0.25, 0.7, 1], [-95, 55, 55, 105])
    const opacityBike = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.7, 1], [1, 1, 0, 0, 1])
    const opacityPortfolio = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.7, 0.8, 1], [0, 0, 1, 1, 0, 0])
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        setScrollYProgress(latest)
        console.log(latest)
      })

    return (
      <section id='intro' className='scroller'>
        <div ref={introRef} className=''>
            <div className='welcomeDiv'>
              <motion.img src={welcome} className='welcomeText' style={{y:'-5vw', x: '4vw', rotate: 0, opacity: opacityPortfolio}} />
              <motion.img src={portfolio} className='portfolioText' style={{y: '4vw', x:'-18vw', opacity: opacityPortfolio, rotate:0 }} />
            </div>
          <figure className="progress">
            <motion.img src={bikeframe} className='bikeframe' style={{y: '-6vw', x:`${xPosBikeFrame.current}vw`, rotate: 0, opacity: opacityBike}}  />
            <motion.img src={wheel} className='wheel' style={{y:'-1vw', x: `${xPosAnim.current}vw`, rotate: xPosAnim }}/>
            <motion.img src={wheel} className='wheel' style={{y:'-1vw', x: `${xPosAnim2.current}vw`, rotate: xPosAnim }}/>
          </figure>
        </div>
    </section>
  )
}

export default Intro
