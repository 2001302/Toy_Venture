'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage, useGLTF } from '@react-three/drei'
import { Suspense } from 'react'

interface ModelViewerProps {
  modelUrl: string
}

function Model({ modelUrl }: ModelViewerProps) {
  const { scene } = useGLTF(modelUrl)
  return <primitive object={scene} />
}

export function ModelViewer({ modelUrl }: ModelViewerProps) {
  return (
    <div className="w-full h-full">
      <Canvas shadows camera={{ position: [0, 0, 10], fov: 50 }}>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <Model modelUrl={modelUrl} />
          </Stage>
        </Suspense>
        <OrbitControls 
          autoRotate
          makeDefault
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  )
}