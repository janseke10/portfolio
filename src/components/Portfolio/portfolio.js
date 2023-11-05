import React from 'react'
import './portfolio.css'
import { useRef } from 'react'
import { useScroll, useMotionValueEvent } from 'framer-motion'

const Portfolio = ({setScrollYProgress}) => {
    const portfolioRef = useRef(null)  
    const { scrollYProgress } = useScroll({
        target: portfolioRef,
      });
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        setScrollYProgress(latest)
        console.log('portfolio',latest)
    })
  return (
    <section id='portfolio' ref={portfolioRef}>Portfolio</section>
  )
}

export default Portfolio