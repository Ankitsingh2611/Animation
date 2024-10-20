import React from 'react'
import {motion} from 'framer-motion'

const App = () => {
  return (
    <div>
      <motion.div 
    //drag
      animate={{
        x: 1000,
        y: 300,
        scale: 1.5,
        rotate: 180,
      }}
      transition={{
        duration: 2,
        delay:1,
        ease: 'anticipate',
        repeat: Infinity,
      }}
      // whileHover={{
      //   backgroundColor:'royalblue',
      // }}


      // whileDrag={{
      //   backgroundColor:'royalblue',
      //   scale:0.9
      // }}

      id="box">

      </motion.div>
    </div>
  )
}

export default App