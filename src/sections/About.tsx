import React from "react";
import { GlobeComponent } from "@/components/Globe";
const About = () => {
  return (
    <section className="c-space my-20 pb-20" id="about">
      <div className="grid h-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-6">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src={"/assets/grid1.png"}
              alt="grid-1"
              className="relative h-fit w-full object-contain sm:h-[276px]"
            />
            <div>
              <p className="mb-2 text-xl font-semibold text-white">
                Hi, I'm Dragos!
              </p>

              <p className="grid-subtext">
                With almost 3 years of experience, I have honed my skills in
                frontend and a bit of backend
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="grid-2"
              className="h-fit w-full object-contain sm:h-[276px]"
            />
            <div>
              <p className="grid-headtext">Tech Stach</p>
              <p className="grid-subtext">
                I specialise in JS/TS with a focus on React Next.js ecosystem
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container relative">
            <div className="relative flex h-fit w-full items-center justify-center overflow-hidden rounded-3xl sm:h-[326px]">
              <GlobeComponent />
            </div>{" "}
            <div>
              <p className="grid-headtext">
                I work remotely across most timezones.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid1.png"
              alt="grid-3"
              className="h-fit w-full object-contain sm:h-[266px]"
            />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code.
                Programming isn&apos;t just my profession—it&apos;s my passion.
                I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid1.png"
              alt="grid-4"
              className="h-fit w-full object-cover sm:h-[276px] sm:object-top md:h-[126px]"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container">
                {/* <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" /> */}
                <p className="text-gray_gradient font-medium text-white md:text-xl lg:text-2xl">
                  adrian@jsmastery.pro
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
