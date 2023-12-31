"use client"
import { useState } from 'react' 
import { motion, useAnimation } from 'framer-motion'
import { useInterval } from 'react-use' 

const Wheel = () => {
 const [isSpinning, setIsSpinning] = useState(false) 
 const [angle, setAngle] = useState(0) 
 const [names] = useState(['Chic-fil-a', 'Mc Donalds', 'Burger King', 'Wendys', 'Taco bell', 'Hardees', 'whataburger', 'dominos', 'hugry howies', 'pizza hut', 'popeyes', 'other']) 
 const controls = useAnimation() 

 useInterval(() => {
  if (isSpinning) {
    setAngle((prevAngle) => prevAngle + 30) 
  }
 }, 5)  // Decrease the interval to make the wheel spin faster

 const spinWheel = () => {
  setIsSpinning(true) 
  controls.start({ rotate: 360 * Math.abs(Math.random()) * 10, transition: { duration: 5 } }).then(() => setIsSpinning(false)) 
 } 

 const stopWheel = () => {
  setIsSpinning(false) 
 } 

 const anglePerName = 360 / names.length 
 return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <motion.div
      animate={controls}
      style={{ borderRadius: '50%', width: '300px', height: '300px', backgroundColor: 'red', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}
      onAnimationComplete={stopWheel}
    >
      {names.map((name, index) => (
        <div key={index} style={{ transform: `rotate(${anglePerName * index}deg) translateX(-100px) rotate(180deg)`, position: 'absolute', top: '45%', border: `1px solid rgba(0, 0, 0, 0.5)`}}>
          {name}
        </div>
      ))}
    </motion.div>
    <button style={{ marginLeft: '20px', backgroundColor: 'red', padding: '5px'}} onClick={spinWheel}>Spin</button>
  </div>
 ) 
} 

export default Wheel 

