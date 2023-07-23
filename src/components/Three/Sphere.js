import React, {useRef} from 'react'

import * as THREE from 'three';
import { Canvas, useFrame, useLoader, MeshPhysicalMaterialProps, MeshPhysicalMaterial } from "@react-three/fiber";


import {Camera, CanvasTexture, Scene, WebGLRenderer} from 'three';
import {
  MeshDistortMaterial,
  MeshWobbleMaterial,
  PerspectiveCamera,
  Sphere
} from "@react-three/drei";

export default function Shape() {  
    return (
      
      <Canvas>
       <ambientLight intensity={0.5} />
       <directionalLight position={[10, 10, 5]} intensity={2} />
       <pointLight position={[10, -10, 2]} intensity={0.1} />

        <Sphere visible position={[0, 0, 0]} args={[1, 50, 50]}
        scale={2.6}>
         <MeshDistortMaterial
           color="#E10087"
           attach="material"
           distort={0.3} // Strength, 0 disables the effect (default=1)
           speed={3} // Speed (default=1)
           roughness={0}
         />
       </Sphere>

 {/* <Sphere visible position={[0, 0, 0]} args={[2, 50, 50]}>
         <MeshWobbleMaterial
          attach="material"
          color="#EB1E99"
          factor={3} // Strength, 0 disables the effect (default=1)
          speed={2} // Speed (default=1)
          roughness={0}
        />
      </Sphere> */}

      </Canvas>
    
    )
  }
  