import React, { useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';

const HologramCube = () => {
  const cubeRef = useRef();

  useFrame(() => {
    cubeRef.current.rotation.x += 0.01;
    cubeRef.current.rotation.y += 0.01;
  });

  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <mesh ref={cubeRef}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="darkblue" wireframe />
      </mesh>
    </Canvas>
  );
};

export default HologramCube;
