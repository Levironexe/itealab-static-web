import React from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export function Logo(props) {
  const { nodes, materials } = useGLTF('/models/ITEA_Lab.glb')
  
  // Create separate material instances
  const leafMaterial = materials['fallback Material']?.clone() || new THREE.MeshStandardMaterial()
  const surroundingMaterial = materials['fallback Material']?.clone() || new THREE.MeshStandardMaterial()
  
  // Set colors explicitly
  leafMaterial.color = new THREE.Color('#74A173')
  surroundingMaterial.color = new THREE.Color('#004243')

  return (
    <group {...props} dispose={null} scale={[10, 10, 10]} position={[0.1, 0.002, 0]}>
      <group position={[0.0057, 0.004, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Leaf.geometry}
          material={leafMaterial}
          scale={0.001}
        />
      </group>
      <group position={[-0.1, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Surrounding_Shapes.geometry}
          material={surroundingMaterial}
          scale={0.001}
        />
      </group>
    </group>
  )
}