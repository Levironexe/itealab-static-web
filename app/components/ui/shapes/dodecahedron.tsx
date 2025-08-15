// components/shapes/Dodecahedron.tsx
"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"

interface ShapeProps {
  position: [number, number, number]
}

export function Dodecahedron({ position }: ShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <dodecahedronGeometry args={[1]} />
      <meshStandardMaterial color="#74A173" />
    </mesh>
  )
}