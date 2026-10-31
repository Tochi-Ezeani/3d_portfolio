import { Canvas } from "@react-three/fiber";
// react
import { useState, Suspense } from "react";
import Loader from "../components/Loader";
// Island
import Island from "../models/Island";
// Sky
import Sky from "../models/Sky";
// Bird
import Bird from "../models/Bird";
// Plane
import Plane from "../models/Plane";

const Home = () => {
  // states
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  // adjustIslandForScreenSize
  const adjustIslandForScreenSize = () => {
    let screenScale;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth > 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
  };

  // adjustIslandForScreenSize call
  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();

  // adjustPlaneForScreenSize
  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth > 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  // adjustPlaneForScreenSize call
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className="relative w-full h-screen">
      {/* <div className="z-10 absolute top-28 left-0 right-0 flex justify-center items-center">
        POPUP
      </div> */}

      {/* Scene */}
      <Canvas
        className={`w-full h-screen bg-transparent ${isRotating ? "cursor-grabbing" : "cursor-grab"}`}
        camera={{ near: 0.1, far: 1000 }}
      >
        {/* Suspense */}
        <Suspense fallback={<Loader />}>
          {/* Lights */}

          {/* Sun */}
          <directionalLight position={[1, 1, 1]} intensity={2} />

          {/* Ambient */}
          <ambientLight intensity={0.5} />

          {/* Hemisphere */}
          <hemisphereLight
            skyColor={"#B1E1FF"}
            groundColor={"#000000"}
            intensity={1}
          />

          {/* Sky */}
          <Sky isRotating={isRotating} />

          {/* Bird */}
          <Bird />

          {/* Island */}
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />

          {/* Plane */}
          <Plane
            position={planePosition}
            scale={planeScale}
            isRotating={isRotating}
            rotation={[0, 20, 0]}
          />

        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
