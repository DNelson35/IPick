"use client"
import React, { useEffect } from 'react';

interface SpinningWheelProps {
   stopSpin: boolean
}

const SpinningWheel: React.FC<SpinningWheelProps> = ({stopSpin}) => {
 useEffect(() => {
 const canvas = document.getElementById('myCanvas') as HTMLCanvasElement
 const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

 // Set the color of the circle
 ctx.strokeStyle = 'red'
 ctx.fillStyle = 'white'

 // Initialize the rotation angle
 let rotation = 0

 function drawCircle() {
 // Draw the circle
 ctx.beginPath()
 ctx.arc(250, 250, 100, 0, 2 * Math.PI)
 ctx.stroke()
 ctx.fill()

 // Draw the lines
 for (let i = 0; i < 12; i++) {
   const angle = (i / 12) * 2 * Math.PI + rotation
   const x = 250 + 100 * Math.cos(angle)
   const y = 250 + 100 * Math.sin(angle)

   ctx.beginPath()
   ctx.moveTo(250, 250)
   ctx.lineTo(x, y)
   ctx.stroke()
 }
 }

 function animateCircle() {
    
 // Clear the canvas
 ctx.clearRect(0, 0, canvas.width, canvas.height)

 // Rotate the context
 ctx.save()
 ctx.translate(250, 250)
 ctx.rotate(rotation)
 ctx.translate(-250, -250)

 // Draw the circle and the lines
 drawCircle()

 // Restore the context
 ctx.restore()

 // Update the rotation angle
 if(stopSpin){
    rotation += .2
 }

 


 // Request the next frame
    
    requestAnimationFrame(animateCircle)
 
 }

    animateCircle()
    
 
 }, [stopSpin])

 return <canvas id="myCanvas" width="500" height="500"></canvas>
}

export default SpinningWheel
