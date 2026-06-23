"use client";

import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import * as THREE from "three";

function BurgerModel() {
  const groupRef = useRef<THREE.Group>(null);
  const floatRef = useRef(0);

  useFrame((state) => {
    if (!groupRef.current) return;
    // Slow Y rotation
    groupRef.current.rotation.y += 0.006;
    // Floating bob
    floatRef.current += 0.015;
    groupRef.current.position.y = Math.sin(floatRef.current) * 0.18;
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]} scale={1.3}>
      {/* Top Bun */}
      <mesh position={[0, 1.05, 0]} castShadow>
        <sphereGeometry args={[0.85, 32, 16, 0, Math.PI * 2, 0, Math.PI / 1.8]} />
        <meshStandardMaterial color="#C97B2A" roughness={0.6} metalness={0.05} />
      </mesh>

      {/* Sesame seeds on top bun */}
      {[
        [0.2, 1.78, 0.5],
        [-0.3, 1.75, 0.3],
        [0.5, 1.7, -0.1],
        [-0.1, 1.82, -0.4],
        [0.35, 1.72, -0.55],
        [-0.5, 1.68, 0.0],
        [0.0, 1.84, 0.1],
      ].map(([x, y, z], i) => (
        <mesh key={i} position={[x, y, z]} castShadow>
          <sphereGeometry args={[0.06, 8, 8]} />
          <meshStandardMaterial color="#F5F0E8" roughness={0.8} />
        </mesh>
      ))}

      {/* Lettuce layer (wavy-ish green disc) */}
      <mesh position={[0, 0.55, 0]} rotation={[0, 0.5, 0]}>
        <cylinderGeometry args={[1.05, 1.0, 0.12, 32]} />
        <meshStandardMaterial color="#4CAF50" roughness={0.9} side={THREE.DoubleSide} />
      </mesh>
      {/* Lettuce ruffled edges */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const r = 0.95;
        return (
          <mesh
            key={`lettuce-${i}`}
            position={[
              Math.cos(angle) * r,
              0.5 + (Math.random() - 0.5) * 0.1,
              Math.sin(angle) * r,
            ]}
            rotation={[Math.random() * 0.3, angle, Math.random() * 0.4]}
          >
            <boxGeometry args={[0.3, 0.08, 0.2]} />
            <meshStandardMaterial color="#56C460" roughness={0.95} />
          </mesh>
        );
      })}

      {/* Cheese slice (yellow box slightly overhanging) */}
      <mesh position={[0, 0.68, 0]} rotation={[0, Math.PI / 8, 0]}>
        <boxGeometry args={[1.6, 0.07, 1.6]} />
        <meshStandardMaterial
          color="#F5C518"
          roughness={0.4}
          metalness={0.1}
          emissive="#F5C518"
          emissiveIntensity={0.1}
        />
      </mesh>

      {/* Patty (dark brown disc) */}
      <mesh position={[0, 0.78, 0]} castShadow>
        <cylinderGeometry args={[0.92, 0.88, 0.28, 32]} />
        <meshStandardMaterial color="#3D1C0A" roughness={0.85} metalness={0.02} />
      </mesh>

      {/* Tomato slice */}
      <mesh position={[0, 0.32, 0]}>
        <cylinderGeometry args={[0.88, 0.88, 0.1, 32]} />
        <meshStandardMaterial color="#E63946" roughness={0.6} />
      </mesh>

      {/* Bottom Bun */}
      <mesh position={[0, -0.02, 0]} castShadow>
        <cylinderGeometry args={[0.92, 0.88, 0.38, 32]} />
        <meshStandardMaterial color="#B5651D" roughness={0.65} metalness={0.03} />
      </mesh>

      {/* Bottom bun base (slightly rounded) */}
      <mesh position={[0, -0.28, 0]}>
        <cylinderGeometry args={[0.88, 0.8, 0.22, 32]} />
        <meshStandardMaterial color="#C97B2A" roughness={0.65} />
      </mesh>
    </group>
  );
}

function Lights() {
  return (
    <>
      {/* Warm glow from below (orange/yellow grill fire) */}
      <pointLight
        position={[0, -3, 2]}
        intensity={80}
        color="#F5A623"
        distance={12}
        decay={2}
      />
      {/* Key light from above-front */}
      <directionalLight
        position={[3, 5, 3]}
        intensity={2}
        color="#FFF8E7"
        castShadow
      />
      {/* Fill light */}
      <pointLight position={[-3, 3, -2]} intensity={20} color="#F5C518" />
      {/* Ambient */}
      <ambientLight intensity={0.6} color="#1a1010" />
      {/* Rim light */}
      <pointLight position={[0, 4, -4]} intensity={15} color="#C97B2A" />
    </>
  );
}

export default function BurgerCanvas() {
  return (
    <div className="w-full h-full min-h-[480px]">
      <Canvas
        camera={{ position: [0, 0.5, 5], fov: 40 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
        shadows
      >
        <Suspense fallback={null}>
          <Lights />
          <BurgerModel />
        </Suspense>
      </Canvas>
    </div>
  );
}
