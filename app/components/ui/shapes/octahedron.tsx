"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"

interface ShapeProps {
  position: [number, number, number]
}

export function Octahedron({ position }: ShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <octahedronGeometry args={[1.2]} />
      <meshStandardMaterial color="#74A173" />
    </mesh>
  )
}