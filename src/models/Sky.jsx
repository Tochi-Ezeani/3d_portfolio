import { useGLTF } from "@react-three/drei";
// react
import { useRef } from "react";
// fiber
import { useFrame } from "@react-three/fiber";

import skyScene from "../assets/3d/sky.glb";

// sky component
const Sky = ({ isRotating }) => {
  const sky = useGLTF(skyScene);

  // logic for making the sky to turn
  const skyRef = useRef();

  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.15 * delta;
    }
  });

  return (
    // sky
    <mesh ref={skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;
