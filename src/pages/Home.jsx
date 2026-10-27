import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../components/Loader";

const Home = () => {
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
          
        </Suspense>

      </Canvas>
    </section>
  );
};

export default Home;
