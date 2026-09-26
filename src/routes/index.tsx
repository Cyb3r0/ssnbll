import { createFileRoute } from '@tanstack/react-router'
import React, { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Html } from '@react-three/drei'

export const Route = createFileRoute('/')({
  component: IndexComponent,
})

function SprayCan3D({ autoRotate, color }: { autoRotate: boolean; color: string }) {
  const groupRef = useRef<any>()

  useFrame((_, delta) => {
    if (autoRotate && groupRef.current) {
      groupRef.current.rotation.y += delta * 0.8
    }
  })

  return (
    <group ref={groupRef} position={[0, -0.4, 0]}>
      <mesh position={[0, 1.2, 0]}>
        <cylinderGeometry args={[0.7, 0.7, 2.2, 32]} />
        <meshStandardMaterial color={color} metalness={0.4} roughness={0.2} />
      </mesh>
      <mesh position={[0, 2.4, 0]}>
        <sphereGeometry args={[0.7, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#d0d7dd" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0, 2.8, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 0.3, 16]} />
        <meshStandardMaterial color="#111111" />
      </mesh>
      <Html position={[0, 1.2, 0.71]} transform distanceFactor={1.5}>
        <div style={{
          color: '#0d2538',
          fontSize: '26px',
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
  const [activeTab, setActiveTab] = useState<'view' | 'catalog' | 'about'>('view')
  const [autoRotate, setAutoRotate] = useState(true)
  const [canColor, setCanColor] = useState('#eef7fc')
  const [cartCount, setCartCount] = useState(0)

  const products = [
    { id: 1, name: 'علبة الرش الأيقونية', series: 'Walls Drop 01', price: '١,٢٨٠ ر.س', status: 'إصدار محدود (47/200)' },
    { id: 2, name: 'لوحة سنبل جرافيتي 02', series: 'Walls Drop 02', price: '٢,٤٠٠ ر.س', status: 'قريباً' },
    { id: 3, name: 'مجسم سنبل المعدني', series: 'Limited Ed 03', price: '٣,١٠٠ ر.س', status: 'قريباً' },
  ]

  return (
    <div style={{
      width: '100vw',
      minHeight: '100vh',
      backgroundColor: '#0a0d14',
      color: '#ffffff',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      direction: 'rtl'
    }}>
      {/* الهيدر العلوي والتنقل بين الأقسام */}
      <header style={{
        padding: '12px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        backgroundColor: '#0a0d14',
        position: 'sticky',
        top: 0,
        zIndex: 20
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '36px',
            height: '36px',
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
            <p style={{ margin: 0, fontSize: '10px', color: '#8a99ad' }}>سنبل • FROM WALLS TO WORLDS</p>
          </div>
        </div>

        {/* شريط الأقسام */}
        <nav style={{ display: 'flex', gap: '15px' }}>
          <button 
            onClick={() => setActiveTab('view')} 
            style={{
              background: 'none',
              border: 'none',
              color: activeTab === 'view' ? '#00a3ff' : '#8a99ad',
              fontWeight: activeTab === 'view' ? 'bold' : 'normal',
              cursor: 'pointer'
            }}>
            العرض 3D
          </button>
          <button 
            onClick={() => setActiveTab('catalog')} 
            style={{
              background: 'none',
              border: 'none',
              color: activeTab === 'catalog' ? '#00a3ff' : '#8a99ad',
              fontWeight: activeTab === 'catalog' ? 'bold' : 'normal',
              cursor: 'pointer'
            }}>
            المعرض
          </button>
          <button 
            onClick={() => setActiveTab('about')} 
            style={{
              background: 'none',
              border: 'none',
              color: activeTab === 'about' ? '#00a3ff' : '#8a99ad',
              fontWeight: activeTab === 'about' ? 'bold' : 'normal',
              cursor: 'pointer'
            }}>
            عن سنبل
          </button>
        </nav>

        {/* السلة */}
        <div style={{ fontSize: '14px', background: 'rgba(255,255,255,0.05)', padding: '6px 12px', borderRadius: '20px' }}>
          🛒 السلة ({cartCount})
        </div>
      </header>

      {/* قسم العرض 3D */}
      {activeTab === 'view' && (
        <main style={{ flex: 1, position: 'relative', height: 'calc(100vh - 60px)' }}>
          <Canvas style={{ width: '100%', height: '100%' }}>
            <PerspectiveCamera makeDefault position={[0, 1.5, 5]} />
            <ambientLight intensity={0.8} />
            <directionalLight position={[5, 10, 7]} intensity={1.5} />
            <pointLight position={[-5, -5, -5]} intensity={0.5} />
            <SprayCan3D autoRotate={autoRotate} color={canColor} />
            <OrbitControls enableZoom={true} enablePan={false} />
          </Canvas>

          <div style={{
            position: 'absolute',
            bottom: '80px',
            left: '20px',
            right: '20px',
            backgroundColor: 'rgba(18, 24, 38, 0.85)',
            backdropFilter: 'blur(12px)',
            borderRadius: '16px',
            padding: '16px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            zIndex: 10
          }}>
            <span style={{ fontSize: '12px', color: '#00a3ff', fontWeight: '600' }}>Walls Drop 01</span>
            <h2 style={{ margin: '4px 0 2px 0', fontSize: '20px' }}>علبة الرش الأيقونية</h2>
            <p style={{ margin: '0 0 12px 0', fontSize: '12px', color: '#8a99ad' }}>Signature Spray</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '18px', fontWeight: 'bold' }}>١,٢٨٠ ر.س.</span>
              <button 
                onClick={() => setCartCount(cartCount + 1)}
                style={{
                  backgroundColor: '#00a3ff',
                  color: '#fff',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '10px',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}>
                إضافة للسلة
              </button>
            </div>
          </div>

          <div style={{
            position: 'absolute',
            bottom: '15px',
            left: '20px',
            right: '20px',
            display: 'flex',
            gap: '10px',
            zIndex: 10
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
                fontSize: '13px',
                cursor: 'pointer'
              }}>
              {autoRotate ? 'إيقاف الدوران' : 'دوران تلقائي'}
            </button>
            <button 
              onClick={() => setCanColor(canColor === '#eef7fc' ? '#00a3ff' : '#eef7fc')}
              style={{
                padding: '12px 18px',
                backgroundColor: '#1e293b',
                color: '#ffffff',
                border: 'none',
                borderRadius: '12px',
                fontWeight: '600',
                fontSize: '13px',
                cursor: 'pointer'
              }}>
              تخصيص اللون
            </button>
          </div>
        </main>
      )}

      {/* قسم المعرض كامل */}
      {activeTab === 'catalog' && (
        <main style={{ padding: '20px', flex: 1 }}>
          <h2 style={{ fontSize: '22px', marginBottom: '15px' }}>معرض أعمال SNBL ART</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '15px' }}>
            {products.map((p) => (
              <div key={p.id} style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '12px',
                padding: '16px'
              }}>
                <span style={{ fontSize: '11px', color: '#00a3ff' }}>{p.series}</span>
                <h3 style={{ margin: '8px 0', fontSize: '18px' }}>{p.name}</h3>
                <p style={{ color: '#8a99ad', fontSize: '12px' }}>{p.status}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px' }}>
                  <span style={{ fontWeight: 'bold' }}>{p.price}</span>
                  <button 
                    onClick={() => setCartCount(cartCount + 1)}
                    style={{
                      backgroundColor: '#1e293b',
                      color: '#fff',
                      border: '1px solid rgba(255,255,255,0.2)',
                      padding: '6px 12px',
                      borderRadius: '8px',
                      cursor: 'pointer'
                    }}>
                    طلب
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      )}

      {/* قسم عن سنبل */}
      {activeTab === 'about' && (
        <main style={{ padding: '20px', flex: 1, maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '22px', marginBottom: '10px' }}>عن SNBL ART</h2>
          <p style={{ color: '#a0aec0', lineHeight: '1.6' }}>
            من الجدران إلى العوالم — رؤية فنية تعيد تعاريف الأعمال الفنية والجرافيتي وتحولها إلى قطع واقتناء ثلاثي الأبعاد فاخر.
          </p>
        </main>
      )}
    </div>
  )
}
