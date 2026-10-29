import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../components/Loader";
// Island
import Island from "../models/Island";
// Sky
import Sky from "../models/Sky";

const Home = () => {

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

  const [islandScale, islandPosition, islandRotation ] = adjustIslandForScreenSize();

  return (
    <section className="relative w-full h-screen">

      {/* <div className="z-10 absolute top-28 left-0 right-0 flex justify-center items-center">
        POPUP
      </div> */}
      
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >

        {/* Suspense */}
        <Suspense fallback={<Loader />}>

          {/* Lights */}

          {/* Sun */}
          <directionalLight 
            position={[1, 1, 1]}
            intensity={2}
          />

          {/* Ambient */}
          <ambientLight intensity={0.5} />

          {/* Hemisphere */}
          <hemisphereLight
            skyColor={"#B1E1FF"}
            groundColor={"#000000"}
            intensity={1}
          />

          <Sky />

          {/* Island */}
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
          />
          
        </Suspense>

      </Canvas>
    </section>
  );
};

export default Home;
