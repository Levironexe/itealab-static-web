"use client";
import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import {Logo} from './shapes/logo'

function RotatingLogo() {
  const logoRef = useRef()
  
  useFrame(() => {
    if (logoRef.current) {
      logoRef.current.rotation.y += 0.01
    }
  })
  
  return <Logo ref={logoRef} />
}

const ItealabLogo = () => {
  return (
    <div className='w-full h-full min-h-[400px]'>
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }} style={{ width: '100%', height: '100%' }}>
          <Environment preset="studio" />
          <RotatingLogo/>
        </Canvas>
      
    </div>
  )
}

export default ItealabLogo
