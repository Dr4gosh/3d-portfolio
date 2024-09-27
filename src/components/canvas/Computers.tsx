"use client";
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Preload,
  useGLTF,
} from "@react-three/drei";

import CanvasLoader from "@/components/Loader";
import { div } from "framer-motion/client";
import { Test } from "../Test";

const Computers = ({ isMobile }: { isMobile: boolean }) => {
  // const computer = useGLTF("./pc_desk/scene.gltf");

  // const txt = "/bghero.png";

  return (
    <Test isMobile={isMobile} />
    // <mesh>
    //   <hemisphereLight intensity={0.15} groundColor="black" />
    //   <spotLight
    //     position={[-20, 50, 10]}
    //     angle={0.12}
    //     penumbra={1}
    //     intensity={1}
    //     castShadow
    //     shadow-mapSize={1024}
    //   />

    //   <pointLight intensity={1} />

    //   <primitive
    //     object={computer.scene}
    //     scale={isMobile ? 0.7 : 0.75}
    //     position={isMobile ? [0, -3, -2.2] : [1, -3.25, -1.5]}
    //     rotation={[0.15, -0.2, 0.04]}
    //   />

    //   {/* <meshBasicMaterial toneMapped={false} map={txt} /> */}
    // </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event: any) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div className="absolute inset-0 -top-[100px] h-full w-full">
      <Canvas
        className="mt-[100px] h-full w-full"
        // frameloop="demand"

        // shadows
        // dpr={[1, 2]}
        // camera={{ position: [20, 3, 5], fov: 25 }}
        // gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <PerspectiveCamera makeDefault position={[-10, 0, 15]} />
          <OrbitControls
            enableZoom={false}
            enableRotate={true}
            enableDamping={true}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />

          <ambientLight intensity={3.5} />
          <Computers isMobile={isMobile} />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
