import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  Lightformer,
  OrbitControls,
} from "@react-three/drei";
import * as THREE from "three";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import {
  colorValue,
  LIGHT_RIGS,
  useStudio,
} from "@/lib/studio";
import { ActiveProduct, GalleryRoom, Pedestal } from "./models";

const DEFAULT_CAM = new THREE.Vector3(1.85, 1.42, 3.15);
const DEFAULT_TARGET = new THREE.Vector3(0, 1.12, 0);

function CameraRig() {
  const controls = useRef<OrbitControlsImpl>(null);
  const autoRotate = useStudio((s) => s.autoRotate);
  const resetToken = useStudio((s) => s.resetToken);
  const zoomToken = useStudio((s) => s.zoomToken);
  const zoomDir = useStudio((s) => s.zoomDir);
  const { camera, gl } = useThree();

  useEffect(() => {
    const c = controls.current;
    if (!c) return;
    camera.position.copy(DEFAULT_CAM);
    c.target.copy(DEFAULT_TARGET);
    c.saveState();
    c.update();
  }, [camera]);

  useEffect(() => {
    if (resetToken === 0) return;
    controls.current?.reset();
  }, [resetToken]);

  useEffect(() => {
    if (zoomToken === 0) return;
    const c = controls.current;
    if (!c) return;
    const offset = camera.position.clone().sub(c.target);
    const dist = offset.length();
    const next = THREE.MathUtils.clamp(
      dist * (zoomDir < 0 ? 0.78 : 1.28),
      c.minDistance,
      c.maxDistance,
    );
    offset.setLength(next);
    camera.position.copy(c.target).add(offset);
    c.update();
  }, [zoomToken, zoomDir, camera]);

  useEffect(() => {
    gl.domElement.style.touchAction = "none";
  }, [gl]);

  return (
    <OrbitControls
      ref={controls}
      makeDefault
      enableDamping
      dampingFactor={0.08}
      autoRotate={autoRotate}
      autoRotateSpeed={0.85}
      minDistance={1.7}
      maxDistance={7.2}
      minPolarAngle={0.32}
      maxPolarAngle={Math.PI / 2.08}
      enablePan={false}
    />
  );
}

function CamFill({ intensity, color }: { intensity: number; color: string }) {
  const light = useRef<THREE.DirectionalLight>(null);
  const { camera } = useThree();
  useFrame(() => {
    light.current?.position.copy(camera.position);
  });
  return <directionalLight ref={light} intensity={intensity} color={color} />;
}

function Ibl() {
  const preset = useStudio((s) => s.lightPreset);
  const intensity = useStudio((s) => s.lightIntensity);
  const rig = LIGHT_RIGS[preset];
  const k = intensity;

  return (
    <Environment resolution={256} environmentIntensity={0.85 * k}>
      <color attach="background" args={["#d5dde6"]} />
      <Lightformer
        intensity={18 * k}
        position={[0, 5, 1]}
        scale={[12, 2, 1]}
        color={rig.keyColor}
      />
      <Lightformer
        intensity={8 * k}
        position={[-5, 1.4, 0]}
        scale={5}
        color={rig.rimColor}
      />
      <Lightformer
        intensity={7 * k}
        position={[5, 2, 3]}
        scale={4}
        color={rig.fillColor}
      />
      <Lightformer
        intensity={6 * k}
        position={[0, 1.5, 6]}
        scale={[10, 6, 1]}
        color="#f2f5f8"
      />
    </Environment>
  );
}

function StudioLights() {
  const preset = useStudio((s) => s.lightPreset);
  const intensity = useStudio((s) => s.lightIntensity);
  const rig = LIGHT_RIGS[preset];
  const k = intensity;
  const { gl } = useThree();

  useEffect(() => {
    gl.toneMappingExposure = rig.exposure;
  }, [gl, rig.exposure]);

  return (
    <>
      <ambientLight intensity={rig.ambient * k} color={rig.fillColor} />
      <hemisphereLight
        args={[rig.rimColor, "#2a241c", rig.fill * k]}
      />
      <directionalLight
        position={[3.2, 5.4, 3.6]}
        intensity={rig.key * k}
        color={rig.keyColor}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-bias={-0.00025}
        shadow-camera-near={1}
        shadow-camera-far={18}
        shadow-camera-left={-4}
        shadow-camera-right={4}
        shadow-camera-top={4}
        shadow-camera-bottom={-4}
      />
      <directionalLight
        position={[-3.4, 2.4, -2.2]}
        intensity={rig.rim * k}
        color={rig.rimColor}
      />
      <spotLight
        position={[0.2, 5.6, 1.6]}
        angle={0.42}
        penumbra={0.8}
        intensity={40 * k}
        color={rig.keyColor}
        castShadow
      />
      <CamFill intensity={3.5 * k} color={rig.fillColor} />
      <Suspense fallback={null}>
        <Ibl />
      </Suspense>
    </>
  );
}

function TexturedSet({ bg }: { bg: string }) {
  return (
    <>
      <GalleryRoom bg={bg} />
      <Pedestal />
    </>
  );
}

function Scene() {
  const productId = useStudio((s) => s.productId);
  const finish = useStudio((s) => s.finish);
  const colorId = useStudio((s) => s.colorId);
  const preset = useStudio((s) => s.lightPreset);
  const color = colorValue(colorId);
  const bg = LIGHT_RIGS[preset].bg;

  return (
    <>
      <color attach="background" args={[bg]} />
      <fog attach="fog" args={[bg, 10, 22]} />
      <StudioLights />
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.02, 0]}
        receiveShadow
      >
        <planeGeometry args={[22, 22]} />
        <meshStandardMaterial color="#1a1e26" roughness={0.85} />
      </mesh>
      <mesh position={[0, 0.05, 0]} receiveShadow>
        <cylinderGeometry args={[1.28, 1.34, 0.1, 48]} />
        <meshStandardMaterial color="#2a303a" roughness={0.4} metalness={0.25} />
      </mesh>
      <Suspense fallback={null}>
        <TexturedSet bg={bg} />
      </Suspense>
      <ActiveProduct id={productId} finish={finish} color={color} />
      <ContactShadows
        position={[0, 0.12, 0]}
        opacity={0.5}
        scale={8}
        blur={2.2}
        far={3.5}
        color="#000000"
      />
      <CameraRig />
    </>
  );
}

export default function ProductCanvas() {
  const [ready, setReady] = useState(false);
  const bg = useStudio((s) => LIGHT_RIGS[s.lightPreset].bg);

  useEffect(() => {
    setReady(true);
  }, []);

  if (!ready) {
    return <div className="absolute inset-0 bg-ink" />;
  }

  return (
    <Canvas
      className="absolute inset-0 h-full w-full touch-none"
      camera={{ position: DEFAULT_CAM.toArray(), fov: 34, near: 0.1, far: 40 }}
      dpr={[1, 1.75]}
      shadows
      gl={{
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        powerPreference: "high-performance",
      }}
      style={{ background: bg }}
      onDoubleClick={() => useStudio.getState().resetCamera()}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}
