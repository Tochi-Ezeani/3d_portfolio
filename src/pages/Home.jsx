import { Canvas } from "@react-three/fiber";
// react
import { useState, Suspense, useEffect, useRef } from "react";
import Loader from "../components/Loader";
// Island
import Island from "../models/Island";
// Sky
import Sky from "../models/Sky";
// Bird
import Bird from "../models/Bird";
// Plane
import Plane from "../models/Plane";
// homeinfo
import HomeInfo from "../components/HomeInfo";
// sakura
import sakura from "../assets/sakura.mp3";
// sound icons
import { soundoff, soundon } from "../assets/icons";

const Home = () => {
  // audioRef
  const audioRef = useRef(new Audio(sakura));

  // states
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  // audio state
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  // audio useEffect
  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.volume = 0.4;
      audioRef.current.loop = true;
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

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
  
  // adjustIslandForScreenSize call
  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();

  // adjustPlaneForScreenSize call
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className="relative w-full h-screen">
      <div className="z-10 absolute top-28 left-0 right-0 flex justify-center items-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

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
      {/* audio component */}
      <div className='absolute bottom-2 left-2'>
        <img 
          src={!isPlayingMusic ? soundoff : soundon} 
          alt='jukebox'
          className='w-10 h-10 cursor-pointer object-contain'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        />
      </div>
    </section>
  );
};

export default Home;
