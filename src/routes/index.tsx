import { createFileRoute } from '@tanstack/react-router'
import React, { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Html } from '@react-three/drei'

export const Route = createFileRoute('/')({
  component: IndexComponent,
})

function SprayCan3D({ autoRotate }: { autoRotate: boolean }) {
  const groupRef = useRef<any>()

  useFrame((_, delta) => {
    if (autoRotate && groupRef.current) {
      groupRef.current.rotation.y += delta * 0.8
    }
  })

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      <mesh position={[0, 1.2, 0]}>
        <cylinderGeometry args={[0.7, 0.7, 2.2, 32]} />
        <meshStandardMaterial color="#eef7fc" metalness={0.3} roughness={0.2} />
      </mesh>

      <mesh position={[0, 2.4, 0]}>
        <sphereGeometry args={[0.7, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#d0d7dd" metalness={0.8} roughness={0.2} />
      </mesh>

      <mesh position={[0, 2.8, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 0.3, 16]} />
        <meshStandardMaterial color="#111111" />
      </mesh>

      <Html position={[0, 1.2, 0.71]} transform distanceFactor={1.5} rotation={[0, 0, 0]}>
        <div style={{
          color: '#0d2538',
          fontSize: '24px',
          fontWeight: '900',
          fontFamily: 'sans-serif',
          userSelect: 'none',
          textAlign: 'center',
          direction: 'rtl'
        }}>
          سنبل
        </div>
      </Html>
    </group>
  )
}

function IndexComponent() {
  const [autoRotate, setAutoRotate] = useState(true)

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: '#0a0d14',
      color: '#ffffff',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }}>
      <header style={{
        padding: '15px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '35px',
            height: '35px',
            backgroundColor: '#00a3ff',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold'
          }}>
            SN
          </div>
          <div>
            <h1 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold' }}>SNBL ART</h1>
            <p style={{ margin: 0, fontSize: '11px', color: '#8a99ad' }}>سنبل • FROM WALLS TO WORLDS</p>
          </div>
        </div>
      </header>

      <main style={{ flex: 1, position: 'relative' }}>
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 1.5, 5]} />
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 10, 7]} intensity={1.5} />
          <pointLight position={[-5, -5, -5]} intensity={0.5} />
          
          <SprayCan3D autoRotate={autoRotate} />
          
          <OrbitControls enableZoom={true} enablePan={false} />
        </Canvas>

        <div style={{
          position: 'absolute',
          bottom: '80px',
          left: '20px',
          right: '20px',
          backgroundColor: 'rgba(18, 24, 38, 0.85)',
          backdropFilter: 'blur(10px)',
          borderRadius: '16px',
          padding: '16px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          direction: 'rtl'
        }}>
          <span style={{ fontSize: '12px', color: '#00a3ff', fontWeight: '600' }}>Walls Drop 01</span>
          <h2 style={{ margin: '4px 0 2px 0', fontSize: '20px' }}>علبة الرش الأيقونية</h2>
          <p style={{ margin: '0 0 12px 0', fontSize: '12px', color: '#8a99ad' }}>Signature Spray</p>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '18px', fontWeight: 'bold' }}>١,٢٨٠ ر.س.</span>
            <span style={{
              fontSize: '11px',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              padding: '4px 10px',
              borderRadius: '20px',
              color: '#a0aec0'
            }}>إصدار 47 / 200 • قطعة محدودة</span>
          </div>
        </div>

        <div style={{
          position: 'absolute',
          bottom: '15px',
          left: '20px',
          right: '20px',
          display: 'flex',
          gap: '10px',
          justifyContent: 'center'
        }}>
          <button 
            onClick={() => setAutoRotate(!autoRotate)}
            style={{
              flex: 1,
              padding: '12px',
              backgroundColor: autoRotate ? '#00a3ff' : '#1e293b',
              color: '#ffffff',
              border: 'none',
              borderRadius: '12px',
              fontWeight: '600',
              fontSize: '14px',
              cursor: 'pointer'
            }}
          >
            {autoRotate ? 'إيقاف الدوران' : 'دوران تلقائي'}
          </button>
        </div>
      </main>
    </div>
  )
}
