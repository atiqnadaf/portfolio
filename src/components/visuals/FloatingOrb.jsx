import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function PremiumOrb({ theme }) {
  const isLight = theme === 'light';
  const mesh = useRef();
  const outer = useRef();
  const target = useRef({ x: 0, y: 0 });
  const material = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: isLight ? '#d9e7ee' : '#f8fafc',
        roughness: isLight ? 0.2 : 0.12,
        metalness: isLight ? 0.04 : 0.02,
        transmission: isLight ? 0.28 : 0.58,
        thickness: isLight ? 0.95 : 1.55,
        clearcoat: 1,
        clearcoatRoughness: isLight ? 0.11 : 0.06,
        iridescence: isLight ? 0.16 : 0.22,
        iridescenceIOR: 1.7,
      }),
    [isLight],
  );
  const glowMaterial = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: isLight ? '#8fb7c2' : '#dff7ff',
        transparent: true,
        opacity: isLight ? 0.3 : 0.18,
        depthWrite: false,
      }),
    [isLight],
  );

  useFrame(({ clock, pointer }) => {
    const elapsed = clock.getElapsedTime();
    target.current.x = THREE.MathUtils.lerp(target.current.x, pointer.x, 0.055);
    target.current.y = THREE.MathUtils.lerp(target.current.y, pointer.y, 0.055);

    mesh.current.rotation.x = elapsed * 0.12 + target.current.y * 0.22;
    mesh.current.rotation.y = elapsed * 0.18 + target.current.x * 0.28;
    mesh.current.position.x = target.current.x * 0.12;
    mesh.current.position.y = Math.sin(elapsed * 0.82) * 0.08 + target.current.y * 0.08;

    outer.current.rotation.z = elapsed * -0.08;
    outer.current.rotation.y = elapsed * 0.06;
  });

  return (
    <group ref={mesh}>
      <mesh scale={1.18} material={glowMaterial}>
        <sphereGeometry args={[1.42, 64, 64]} />
      </mesh>
      <mesh material={material}>
        <sphereGeometry args={[1.24, 96, 96]} />
      </mesh>
      <mesh rotation={[0.25, -0.42, 0.18]}>
        <torusGeometry args={[1.45, 0.01, 12, 160]} />
        <meshBasicMaterial color={isLight ? '#3f6f79' : '#ffffff'} transparent opacity={isLight ? 0.44 : 0.58} />
      </mesh>
      <mesh ref={outer} rotation={[-0.58, 0.38, -0.16]}>
        <torusGeometry args={[1.68, 0.008, 12, 180]} />
        <meshBasicMaterial color={isLight ? '#0f766e' : '#bae6fd'} transparent opacity={isLight ? 0.32 : 0.28} />
      </mesh>
      <mesh position={[-0.52, 0.42, 0.95]} scale={0.12}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color={isLight ? '#164e63' : '#ffffff'} transparent opacity={isLight ? 0.52 : 0.74} />
      </mesh>
    </group>
  );
}

export function FloatingOrb({ theme }) {
  const isLight = theme === 'light';

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 42 }} dpr={[1, 1.75]} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={isLight ? 1.05 : 1.35} />
      <directionalLight position={[4, 4, 5]} intensity={isLight ? 2.45 : 2.15} />
      <pointLight position={[-3, -2, 3]} color={isLight ? '#0f766e' : '#bae6fd'} intensity={isLight ? 0.85 : 1.25} />
      <pointLight position={[3, -2, 2]} color={isLight ? '#475569' : '#f8fafc'} intensity={isLight ? 0.9 : 0.85} />
      <PremiumOrb theme={theme} />
    </Canvas>
  );
}
