import React from 'react'
import './progressbar.css'
import { motion} from "framer-motion"

const ProgressBar = ({scrollYProgress}) => {
  return (
    <motion.div
            className="progress-bar"
            style={{ scaleX: scrollYProgress }}
       />
  )
}

export default ProgressBar