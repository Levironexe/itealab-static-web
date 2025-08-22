"use client";
import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import {Model} from './ui/shapes/test_model'

function RotatingLogo() {
  const logoRef = useRef()
  
  useFrame(() => {
    if (logoRef.current) {
      logoRef.current.rotation.y += 0.01
    }
  })
  
  return <Model ref={logoRef} />
}

const Test = () => {
  return (
    <div className='w-screen h-screen min-h-[300px]'>
        <Canvas >
          <Environment preset="studio" />
          <RotatingLogo/>
        </Canvas>
      
    </div>
  )
}

export default Test
