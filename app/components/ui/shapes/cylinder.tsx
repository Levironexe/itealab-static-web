// components/shapes/Cylinder.tsx
"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"

interface ShapeProps {
  position: [number, number, number]
}

export function Cylinder({ position }: ShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <cylinderGeometry args={[0.8, 0.8, 2, 16]} />
      <meshStandardMaterial color="#74A173" />
    </mesh>
  )
}