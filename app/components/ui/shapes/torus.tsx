// components/shapes/Torus.tsx
"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"

interface ShapeProps {
  position: [number, number, number]
}

export function Torus({ position }: ShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.6
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <torusGeometry args={[1, 0.4, 16, 100]} />
      <meshStandardMaterial color="#74A173" />
    </mesh>
  )
}