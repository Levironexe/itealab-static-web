"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"

interface ShapeProps {
  position: [number, number, number]
}

export function Globe({ position }: ShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.6
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[1.2, 32, 32]} />
      <meshStandardMaterial color="#74A173" />
    </mesh>
  )
}