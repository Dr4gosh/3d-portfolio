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
import ComputersCanvas from "./canvas/Computers";
import { motion } from "framer-motion";
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
    <section className="relative flex min-h-screen w-full flex-col bg-transparent">
      {/* <div className="mx-auto mt-20 flex w-full flex-col gap-3 px-5 sm:mt-36 sm:px-10">
        <p className="text-center text-xl font-medium text-[#ed3b32] sm:text-3xl">
          Hello World <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Building Products</p>
      </div> */}
      <div
        className={`absolute inset-0 top-[120px] mx-auto flex max-w-7xl flex-row items-start gap-5 px-5 sm:px-10`}
      >
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#ed3b32]" />
          <div className="orange-gradient h-40 w-1 sm:h-80" />
        </div>

        <div>
          <h1 className="mt-2 text-4xl font-black text-white sm:text-5xl md:text-6xl">
            Hello <span className="text-[#ed3b32]">World</span>
          </h1>
          <p className="mt-2 text-xl text-white">
            Here is a 3D visuals, blabla <br className="hidden sm:block" />
            of something
          </p>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className="xs:bottom-10 absolute bottom-32 flex w-full items-center justify-center">
        <a href="#about">
          <div className="border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="bg-secondary mb-1 h-3 w-3 rounded-full"
            />
          </div>
        </a>
      </div>
      {/* <div className="absolute inset-0 h-full w-full">
        <Canvas className="h-full w-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <HeroCamera
              isMobile={isMobile}
              // position={sizes.deskPosition}
              // rotation={[0, -Math.PI, 0]}
              // scale={sizes.deskScale}
              children={<ComputersCanvas />}
            ></HeroCamera>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div> */}
    </section>
  );
};

export default Hero;
