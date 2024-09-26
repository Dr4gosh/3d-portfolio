"use client";
import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import HackerRoom from "./HackerRoom";
import CanvasLoader from "./CanvasLoader";
import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "@/lib/utils";
import Target from "./Target";
import HeroCamera from "./HeroCamera";

const Hero = () => {
  //   const controls = useControls("HackerRoom", {
  //     positionX: {
  //       value: 2.5,
  //       min: -10,
  //       max: 10,
  //     },
  //     positionY: {
  //       value: 2.5,
  //       min: -10,
  //       max: 10,
  //     },
  //     positionZ: {
  //       value: 2.5,
  //       min: -10,
  //       max: 10,
  //     },
  //     rotationX: {
  //       value: 2.5,
  //       min: -10,
  //       max: 10,
  //     },
  //     rotationY: {
  //       value: 2.5,
  //       min: -10,
  //       max: 10,
  //     },
  //     rotationZ: {
  //       value: 2.5,
  //       min: -10,
  //       max: 10,
  //     },
  //     scale: {
  //       value: 1,
  //       min: 0.1,
  //       max: 10,
  //     },
  //   });

  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  return (
    <section className="relative flex min-h-screen w-full flex-col bg-black/90">
      <div className="mx-auto mt-20 flex w-full flex-col gap-3 px-5 sm:mt-36 sm:px-10">
        <p className="text-center text-xl font-medium text-white sm:text-3xl">
          Hello World <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Building Products</p>
      </div>
      <div className="absolute inset-0 h-full w-full">
        {/* <Leva /> */}
        <Canvas className="h-full w-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                //   scale={0.07}
                //   position={[
                //     controls.positionX,
                //     controls.positionY,
                //     controls.positionZ,
                //   ]}
                //   rotation={[
                //     controls.rotationX,
                //     controls.rotationY,
                //     controls.rotationZ,
                //   ]}
                //   scale={[controls.scale, controls.scale, controls.scale]}
                position={sizes.deskPosition}
                rotation={[0, -Math.PI, 0]}
                scale={sizes.deskScale}
              />
            </HeroCamera>

            {/* <group>
              <Target position={sizes.targetPosition} />
            </group> */}
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
