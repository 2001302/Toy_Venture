'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage, useGLTF, Center } from '@react-three/drei'
import { Suspense } from 'react'

interface ModelViewerProps {
  modelUrl: string
}

function Model({ modelUrl }: ModelViewerProps) {
  const { scene } = useGLTF(modelUrl)
  return (
    <Center>
      <primitive object={scene} />
    </Center>
  )
}

export function ModelViewer({ modelUrl }: ModelViewerProps) {
  return (
    <div className="w-full h-full user-select-none">
      <Canvas 
        shadows 
        camera={{ position: [5, 5, 5], fov: 50 }}
      >
        <Suspense fallback={null}>
          <Stage 
            environment="city" 
            intensity={0.6}
            center={{ x: 0, y: 0, z: 0 }}
            adjustCamera={false}
          >
            <Model modelUrl={modelUrl} />
          </Stage>
        </Suspense>
        <OrbitControls 
          autoRotate
          makeDefault
          target={[0, 0, 0]}
          enableDamping
          dampingFactor={0.05}
          minDistance={2}
          maxDistance={10}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  )
}