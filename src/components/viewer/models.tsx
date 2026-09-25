import { Suspense, useLayoutEffect, useMemo, useRef } from "react";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { physicalFor, type Finish } from "@/lib/studio";

type FinishProps = {
  finish: Finish;
  color: string;
};

function BodyMaterial({ finish, color }: FinishProps) {
  const p = physicalFor(finish, color);
  return (
    <meshPhysicalMaterial
      color={p.color}
      roughness={p.roughness}
      metalness={p.metalness}
      clearcoat={p.clearcoat}
      clearcoatRoughness={p.clearcoatRoughness}
      envMapIntensity={p.envMapIntensity}
      ior={p.ior}
      reflectivity={p.reflectivity}
    />
  );
}

function Drip({
  position,
  rotation,
  color,
  finish,
  scale = 1,
}: FinishProps & {
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
}) {
  return (
    <mesh position={position} rotation={rotation} scale={scale} castShadow>
      <capsuleGeometry args={[0.035, 0.18, 4, 10]} />
      <BodyMaterial finish={finish} color={color} />
    </mesh>
  );
}

function CanLabel() {
  const label = useTexture("/textures/can-label.jpg");
  useLayoutEffect(() => {
    label.colorSpace = THREE.SRGBColorSpace;
    label.anisotropy = 8;
    label.wrapS = THREE.ClampToEdgeWrapping;
    label.wrapT = THREE.ClampToEdgeWrapping;
    label.needsUpdate = true;
  }, [label]);

  return (
    <mesh position={[0, 0.86, 0]}>
      <cylinderGeometry args={[0.383, 0.403, 0.92, 64, 1, true]} />
      <meshPhysicalMaterial
        map={label}
        color="#ffffff"
        roughness={0.4}
        metalness={0.05}
        clearcoat={0.35}
        side={THREE.FrontSide}
      />
    </mesh>
  );
}

export function SprayCan({ finish, color }: FinishProps) {
  const capColor = finish === "chrome" ? color : "#141414";

  return (
    <group>
      {/* bottom crimp */}
      <mesh position={[0, 0.04, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.4, 0.38, 0.08, 48]} />
        <BodyMaterial finish={finish} color={color} />
      </mesh>
      {/* body */}
      <mesh position={[0, 0.86, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.38, 0.4, 1.56, 64]} />
        <BodyMaterial finish={finish} color={color} />
      </mesh>
      {/* label wrap */}
      <Suspense fallback={null}>
        <CanLabel />
      </Suspense>
      {/* shoulder */}
      <mesh position={[0, 1.66, 0]} castShadow>
        <sphereGeometry args={[0.38, 48, 24, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <BodyMaterial finish={finish} color={color} />
      </mesh>
      {/* neck ring */}
      <mesh position={[0, 1.72, 0]} castShadow>
        <cylinderGeometry args={[0.2, 0.22, 0.1, 32]} />
        <BodyMaterial finish={finish} color="#1a1a1a" />
      </mesh>
      {/* cap */}
      <mesh position={[0, 2.02, 0]} castShadow>
        <cylinderGeometry args={[0.215, 0.225, 0.48, 40]} />
        <BodyMaterial finish={finish} color={capColor} />
      </mesh>
      <mesh position={[0, 2.26, 0]} castShadow>
        <sphereGeometry args={[0.215, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <BodyMaterial finish={finish} color={capColor} />
      </mesh>
      {/* nozzle */}
      <mesh position={[0, 2.42, 0]} castShadow>
        <cylinderGeometry args={[0.045, 0.055, 0.12, 16]} />
        <meshPhysicalMaterial color="#2a2a2a" roughness={0.3} metalness={0.7} />
      </mesh>
      <mesh position={[0.09, 2.46, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.03, 0.03, 0.1, 12]} />
        <meshPhysicalMaterial color="#111" roughness={0.25} metalness={0.8} />
      </mesh>
      {/* paint splash on cap */}
      <mesh position={[0.12, 2.18, 0.12]} castShadow>
        <sphereGeometry args={[0.09, 16, 12]} />
        <meshPhysicalMaterial
          color="#00B4FF"
          roughness={0.2}
          metalness={0.1}
          clearcoat={1}
        />
      </mesh>
      <Drip
        position={[0.39, 1.15, 0.08]}
        rotation={[0, 0, 0.15]}
        finish={finish}
        color="#00B4FF"
      />
      <Drip
        position={[-0.12, 1.28, 0.38]}
        rotation={[0.2, 0, 0]}
        finish={finish}
        color="#00B4FF"
        scale={0.75}
      />
    </group>
  );
}

function Eye({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[0.055, 16, 12]} />
        <meshPhysicalMaterial color="#111" roughness={0.2} />
      </mesh>
      <mesh position={[0.018, 0.018, 0.04]}>
        <sphereGeometry args={[0.016, 8, 8]} />
        <meshPhysicalMaterial color="#f5f5f5" roughness={0.2} />
      </mesh>
    </group>
  );
}

export function VinylFigure({ finish, color }: FinishProps) {
  const cloth = physicalFor(finish, color);
  const ghutra = physicalFor(finish, "#F4F6F8");

  return (
    <group>
      {/* shoes */}
      <mesh position={[-0.12, 0.07, 0.04]} castShadow>
        <capsuleGeometry args={[0.07, 0.12, 4, 10]} />
        <meshPhysicalMaterial color="#111" roughness={0.5} />
      </mesh>
      <mesh position={[0.12, 0.07, 0.04]} castShadow>
        <capsuleGeometry args={[0.07, 0.12, 4, 10]} />
        <meshPhysicalMaterial color="#111" roughness={0.5} />
      </mesh>
      {/* legs */}
      <mesh position={[-0.12, 0.28, 0]} castShadow>
        <capsuleGeometry args={[0.09, 0.22, 4, 12]} />
        <meshPhysicalMaterial {...cloth} />
      </mesh>
      <mesh position={[0.12, 0.28, 0]} castShadow>
        <capsuleGeometry args={[0.09, 0.22, 4, 12]} />
        <meshPhysicalMaterial {...cloth} />
      </mesh>
      {/* body / thobe */}
      <mesh position={[0, 0.72, 0]} castShadow>
        <capsuleGeometry args={[0.28, 0.42, 6, 20]} />
        <meshPhysicalMaterial {...cloth} />
      </mesh>
      {/* arms */}
      <mesh position={[-0.36, 0.78, 0]} rotation={[0, 0, 0.35]} castShadow>
        <capsuleGeometry args={[0.075, 0.32, 4, 12]} />
        <meshPhysicalMaterial {...cloth} />
      </mesh>
      <mesh position={[0.36, 0.78, 0]} rotation={[0, 0, -0.35]} castShadow>
        <capsuleGeometry args={[0.075, 0.32, 4, 12]} />
        <meshPhysicalMaterial {...cloth} />
      </mesh>
      {/* SNBL pin */}
      <mesh position={[0.16, 0.82, 0.26]} castShadow>
        <circleGeometry args={[0.07, 24]} />
        <meshPhysicalMaterial
          color="#00B4FF"
          roughness={0.25}
          metalness={0.2}
          clearcoat={1}
        />
      </mesh>
      {/* neck */}
      <mesh position={[0, 1.08, 0]} castShadow>
        <cylinderGeometry args={[0.1, 0.12, 0.12, 16]} />
        <meshPhysicalMaterial color="#d8b494" roughness={0.55} />
      </mesh>
      {/* head */}
      <mesh position={[0, 1.38, 0]} castShadow>
        <sphereGeometry args={[0.32, 40, 32]} />
        <meshPhysicalMaterial color="#e0b894" roughness={0.5} clearcoat={0.15} />
      </mesh>
      <Eye position={[-0.1, 1.4, 0.26]} />
      <Eye position={[0.1, 1.4, 0.26]} />
      {/* smile */}
      <mesh position={[0, 1.28, 0.29]} rotation={[0.4, 0, 0]}>
        <torusGeometry args={[0.07, 0.012, 8, 12, Math.PI]} />
        <meshBasicMaterial color="#5a3a32" />
      </mesh>
      {/* ghutra */}
      <mesh position={[0, 1.58, -0.02]} castShadow>
        <sphereGeometry args={[0.34, 32, 20, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshPhysicalMaterial {...ghutra} />
      </mesh>
      <mesh position={[0, 1.42, -0.18]} rotation={[0.35, 0, 0]} castShadow>
        <boxGeometry args={[0.62, 0.42, 0.08]} />
        <meshPhysicalMaterial {...ghutra} />
      </mesh>
      {/* agal */}
      <mesh position={[0, 1.66, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <torusGeometry args={[0.24, 0.035, 10, 28]} />
        <meshPhysicalMaterial color="#111" roughness={0.4} metalness={0.2} />
      </mesh>
      <mesh position={[0, 1.6, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <torusGeometry args={[0.24, 0.03, 10, 28]} />
        <meshPhysicalMaterial color="#111" roughness={0.4} metalness={0.2} />
      </mesh>
    </group>
  );
}

export function GalleryBust({ finish, color }: FinishProps) {
  const points = useMemo(
    () => [
      new THREE.Vector2(0.02, 0),
      new THREE.Vector2(0.32, 0.02),
      new THREE.Vector2(0.3, 0.18),
      new THREE.Vector2(0.42, 0.38),
      new THREE.Vector2(0.5, 0.52),
      new THREE.Vector2(0.22, 0.72),
      new THREE.Vector2(0.14, 0.92),
      new THREE.Vector2(0.13, 1.02),
    ],
    [],
  );
  const lathe = useMemo(() => new THREE.LatheGeometry(points, 48), [points]);
  const p = physicalFor(finish, color);
  const skin =
    finish === "chrome" || finish === "metal" ? color : "#d9b496";

  useLayoutEffect(() => () => lathe.dispose(), [lathe]);

  return (
    <group>
      <mesh geometry={lathe} castShadow receiveShadow>
        <meshPhysicalMaterial {...p} />
      </mesh>
      <mesh position={[0, 1.32, 0]} castShadow>
        <sphereGeometry args={[0.28, 40, 32]} />
        <meshPhysicalMaterial
          color={finish === "matte" || finish === "ceramic" ? color : skin}
          roughness={p.roughness}
          metalness={p.metalness}
          clearcoat={p.clearcoat}
          clearcoatRoughness={p.clearcoatRoughness}
        />
      </mesh>
      {/* brow / nose suggestion — abstract, not a portrait */}
      <mesh position={[0, 1.3, 0.22]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <coneGeometry args={[0.055, 0.14, 10]} />
        <meshPhysicalMaterial {...p} color={skin} />
      </mesh>
      {/* ghutra */}
      <mesh position={[0, 1.5, 0]} castShadow>
        <sphereGeometry args={[0.3, 32, 18, 0, Math.PI * 2, 0, Math.PI / 1.7]} />
        <meshPhysicalMaterial {...physicalFor(finish, "#F2F4F7")} />
      </mesh>
      <mesh position={[0, 1.56, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <torusGeometry args={[0.22, 0.032, 10, 28]} />
        <meshPhysicalMaterial color="#111" roughness={0.4} metalness={0.25} />
      </mesh>
      {/* stand plaque ring */}
      <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.34, 0.4, 40]} />
        <meshPhysicalMaterial
          color="#00B4FF"
          roughness={0.3}
          metalness={0.4}
          emissive="#00B4FF"
          emissiveIntensity={0.25}
        />
      </mesh>
    </group>
  );
}

function CheetahLeg({
  position,
  rotation,
  finish,
  color,
}: FinishProps & {
  position: [number, number, number];
  rotation: [number, number, number];
}) {
  return (
    <group position={position} rotation={rotation}>
      <mesh position={[0, -0.18, 0]} castShadow>
        <capsuleGeometry args={[0.055, 0.28, 4, 10]} />
        <BodyMaterial finish={finish} color={color} />
      </mesh>
      <mesh position={[0, -0.38, 0.04]} rotation={[0.6, 0, 0]} castShadow>
        <capsuleGeometry args={[0.04, 0.16, 4, 8]} />
        <BodyMaterial finish={finish} color={color} />
      </mesh>
    </group>
  );
}

export function Cheetah({ finish, color }: FinishProps) {
  return (
    <group rotation={[0, 0.4, 0]} position={[0, 0.52, 0]}>
      {/* body */}
      <mesh rotation={[0, 0, -0.18]} position={[0, 0.08, 0]} castShadow>
        <capsuleGeometry args={[0.18, 0.85, 8, 20]} />
        <BodyMaterial finish={finish} color={color} />
      </mesh>
      {/* chest */}
      <mesh position={[0.38, 0.12, 0]} castShadow>
        <sphereGeometry args={[0.2, 24, 18]} />
        <BodyMaterial finish={finish} color={color} />
      </mesh>
      {/* neck */}
      <mesh position={[0.55, 0.22, 0]} rotation={[0, 0, -0.7]} castShadow>
        <capsuleGeometry args={[0.09, 0.22, 6, 12]} />
        <BodyMaterial finish={finish} color={color} />
      </mesh>
      {/* head */}
      <mesh position={[0.72, 0.34, 0]} castShadow>
        <sphereGeometry args={[0.13, 20, 16]} />
        <BodyMaterial finish={finish} color={color} />
      </mesh>
      <mesh position={[0.84, 0.3, 0]} rotation={[0, 0, -Math.PI / 2]} castShadow>
        <coneGeometry args={[0.07, 0.16, 10]} />
        <BodyMaterial finish={finish} color={color} />
      </mesh>
      {/* ears */}
      <mesh position={[0.68, 0.46, -0.07]} castShadow>
        <coneGeometry args={[0.035, 0.08, 8]} />
        <BodyMaterial finish={finish} color={color} />
      </mesh>
      <mesh position={[0.68, 0.46, 0.07]} castShadow>
        <coneGeometry args={[0.035, 0.08, 8]} />
        <BodyMaterial finish={finish} color={color} />
      </mesh>
      {/* tail */}
      <mesh position={[-0.55, 0.18, 0]} rotation={[0, 0, 0.8]} castShadow>
        <capsuleGeometry args={[0.04, 0.55, 4, 10]} />
        <BodyMaterial finish={finish} color={color} />
      </mesh>
      <mesh position={[-0.78, 0.48, 0]} castShadow>
        <sphereGeometry args={[0.055, 12, 10]} />
        <BodyMaterial finish={finish} color={color} />
      </mesh>
      <CheetahLeg
        position={[0.32, -0.02, 0.12]}
        rotation={[0.15, 0, 0.4]}
        finish={finish}
        color={color}
      />
      <CheetahLeg
        position={[0.32, -0.02, -0.12]}
        rotation={[-0.35, 0, 0.15]}
        finish={finish}
        color={color}
      />
      <CheetahLeg
        position={[-0.28, 0.02, 0.12]}
        rotation={[-0.5, 0, -0.2]}
        finish={finish}
        color={color}
      />
      <CheetahLeg
        position={[-0.28, 0.02, -0.12]}
        rotation={[0.25, 0, -0.45]}
        finish={finish}
        color={color}
      />
    </group>
  );
}

export function Pedestal() {
  const floor = useTexture("/textures/gallery-floor.jpg");
  useLayoutEffect(() => {
    floor.colorSpace = THREE.SRGBColorSpace;
    floor.wrapS = floor.wrapT = THREE.RepeatWrapping;
    floor.repeat.set(2, 2);
    floor.anisotropy = 8;
  }, [floor]);

  return (
    <group>
      <mesh position={[0, 0.05, 0]} receiveShadow>
        <cylinderGeometry args={[1.28, 1.34, 0.1, 64]} />
        <meshPhysicalMaterial
          map={floor}
          color="#ffffff"
          roughness={0.35}
          metalness={0.25}
        />
      </mesh>
      <mesh position={[0, 0.11, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.18, 1.26, 64]} />
        <meshPhysicalMaterial
          color="#00B4FF"
          roughness={0.25}
          metalness={0.5}
          emissive="#00B4FF"
          emissiveIntensity={0.35}
        />
      </mesh>
      <mesh position={[0, 0.005, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <circleGeometry args={[1.18, 64]} />
        <meshPhysicalMaterial
          map={floor}
          color="#ffffff"
          roughness={0.28}
          metalness={0.3}
        />
      </mesh>
    </group>
  );
}

export function GalleryRoom({ bg }: { bg: string }) {
  const wall = useTexture("/textures/graffiti-wall.jpg");
  const floor = useTexture("/textures/gallery-floor.jpg");
  const poster = useTexture("/brand/poster.jpg");
  const atelier = useTexture("/brand/atelier.png");

  useLayoutEffect(() => {
    wall.colorSpace = THREE.SRGBColorSpace;
    wall.wrapS = wall.wrapT = THREE.RepeatWrapping;
    wall.repeat.set(2.2, 1.4);
    wall.anisotropy = 8;
    floor.colorSpace = THREE.SRGBColorSpace;
    floor.wrapS = floor.wrapT = THREE.RepeatWrapping;
    floor.repeat.set(6, 6);
    floor.anisotropy = 8;
    poster.colorSpace = THREE.SRGBColorSpace;
    atelier.colorSpace = THREE.SRGBColorSpace;
  }, [wall, floor, poster, atelier]);

  const frame = useRef<THREE.MeshStandardMaterial>(null);

  return (
    <group>
      {/* cyclorama floor */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.02, 0]}
        receiveShadow
      >
        <planeGeometry args={[22, 22]} />
        <meshStandardMaterial map={floor} color="#ffffff" roughness={0.7} />
      </mesh>
      {/* back wall */}
      <mesh position={[0, 2.6, -4.6]} receiveShadow>
        <planeGeometry args={[16, 7.2]} />
        <meshStandardMaterial map={wall} color="#ffffff" roughness={0.85} />
      </mesh>
      {/* side walls */}
      <mesh position={[-6.4, 2.6, -1]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[10, 7.2]} />
        <meshStandardMaterial color={bg} roughness={0.9} />
      </mesh>
      <mesh position={[6.4, 2.6, -1]} rotation={[0, -Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[10, 7.2]} />
        <meshStandardMaterial color={bg} roughness={0.9} />
      </mesh>
      {/* framed poster */}
      <group position={[0, 2.35, -4.52]}>
        <mesh>
          <planeGeometry args={[1.7, 2.55]} />
          <meshStandardMaterial map={poster} roughness={0.45} />
        </mesh>
        <mesh position={[0, 0, -0.03]}>
          <boxGeometry args={[1.86, 2.72, 0.06]} />
          <meshStandardMaterial
            ref={frame}
            color="#0d0f13"
            roughness={0.4}
            metalness={0.3}
          />
        </mesh>
      </group>
      {/* atelier photo */}
      <group position={[-6.32, 2.1, -1.4]} rotation={[0, Math.PI / 2, 0]}>
        <mesh>
          <planeGeometry args={[1.55, 2.2]} />
          <meshStandardMaterial map={atelier} roughness={0.5} />
        </mesh>
        <mesh position={[0, 0, -0.03]}>
          <boxGeometry args={[1.7, 2.36, 0.06]} />
          <meshStandardMaterial color="#0d0f13" roughness={0.4} metalness={0.3} />
        </mesh>
      </group>
    </group>
  );
}

export function ActiveProduct({
  id,
  finish,
  color,
}: FinishProps & { id: "can" | "figure" | "bust" | "cheetah" }) {
  switch (id) {
    case "can":
      return (
        <group position={[0, 0.12, 0]}>
          <SprayCan finish={finish} color={color} />
        </group>
      );
    case "figure":
      return (
        <group position={[0, 0.12, 0]} scale={1.08}>
          <VinylFigure finish={finish} color={color} />
        </group>
      );
    case "bust":
      return (
        <group position={[0, 0.12, 0]} scale={1.12}>
          <GalleryBust finish={finish} color={color} />
        </group>
      );
    case "cheetah":
      return (
        <group position={[0, 0.18, 0]} scale={1.42}>
          <Cheetah finish={finish} color={color} />
        </group>
      );
  }
}
