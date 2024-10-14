"use client";
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Preload } from "@react-three/drei";

import CanvasLoader from "@/components/Loader";

import { Test } from "../Test";

const Computers = ({ isMobile }: { isMobile: boolean }) => {
  return <Test isMobile={isMobile} scale={1} />;
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
          <PerspectiveCamera makeDefault position={[1, -10, 10]} />
          <OrbitControls
            enableZoom={false}
            enableRotate={true}
            enableDamping={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />

          <ambientLight intensity={3.5} />
          <Computers isMobile={isMobile} />
          {/* <spotLight /> */}
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
