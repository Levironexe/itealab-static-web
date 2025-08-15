"use client"

import { Canvas } from "@react-three/fiber"
import { 
  Triangle, 
  Square, 
  Globe,  
  Cylinder, 
  Cone, 
  Torus, 
  Octahedron,
  Dodecahedron,
  Icosahedron 
} from './shapes'

export type ShapeType = 
  | 'triangle' 
  | 'square' 
  | 'globe' 
  | 'cylinder' 
  | 'cone' 
  | 'torus' 
  | 'octahedron' 
  | 'dodecahedron' 
  | 'icosahedron'

interface ShapeIconProps {
  /** Tailwind className for sizing and colors (e.g., "h-6 w-6 text-blue-500") */
  className?: string
  /** Shape type to render */
  shape?: ShapeType | string
  /** Additional styles */
  style?: React.CSSProperties
}

/**
 * 3D Shape Icon Component
 * 
 * A drop-in replacement for SVG icons that renders 3D shapes optimized for UI use.
 * Features performance-optimized geometries, subtle animations, and CSS color integration.
 * 
 * @example
 * // Basic usage
 * <ShapeIcon shape="triangle" className="h-6 w-6" />
 * 
 * @example
 * // With color classes
 * <ShapeIcon shape="globe" className="h-8 w-8 text-blue-500" />
 * 
 * @example
 * // With hover effects
 * <ShapeIcon shape="square" className="h-6 w-6 text-gray-600 group-hover:text-blue-500" />
 */
export function ShapeIcon({ 
  className = "h-6 w-6", 
  shape = 'triangle',
  style 
}: ShapeIconProps) {
  const renderShape = () => {
    const position: [number, number, number] = [0, 0, 0]
    
    switch (shape) {
      case 'triangle':
        return <Triangle position={position} />
      case 'square':
        return <Square position={position} />
      case 'globe':
        return <Globe position={position} />
      case 'cylinder':
        return <Cylinder position={position} />
      case 'cone':
        return <Cone position={position} />
      case 'torus':
        return <Torus position={position} />
      case 'octahedron':
        return <Octahedron position={position} />
      case 'dodecahedron':
        return <Dodecahedron position={position} />
      case 'icosahedron':
        return <Icosahedron position={position} />
      default:
        return <Triangle position={position} />
    }
  }

  return (
    <div className={className} style={style}>
      <Canvas 
        camera={{ position: [0, 0, 6], fov: 60 }}
      >
          <ambientLight intensity={1.2} />
          <directionalLight position={[5, 5, 5]} intensity={1.8} />
          {renderShape()}
      </Canvas>
    </div>
  )
}