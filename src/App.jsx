import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';

const Rubics = () => {
  const sphereRef = useRef();
  const tex = useTexture('./2k_earth_daymap.jpg');  // Load the texture

  // Rotate the sphere continuously
  useFrame((state, delta) => {
    if (sphereRef.current) {
      const slow = 0.3;
      sphereRef.current.rotation.x += delta * slow;
      sphereRef.current.rotation.y += delta * slow;
    }
  });

  return (
    <mesh ref={sphereRef} position={[0, 0, 0]}>
      <sphereGeometry args={[3, 32, 32]} />
      <meshStandardMaterial map={tex}  emissiveMap={tex} emissiveIntensity={0.5}/>
    </mesh>
  );
};

export default Rubics;
