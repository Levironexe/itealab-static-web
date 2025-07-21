import React from "react";
import Image from "next/image";
import { Icon } from "./ui/plus-icon";
import { PinContainer } from "./ui/3d-pin";
import ImageSlider from "./ui/image-slider";
const Community = () => {
  return (
    <div
      id="community"
      className="bg-background-light w-full text-black py-32 relative"
    >
      <div
        className="absolute inset-0 z-0 left-0 w-full"
        style={{
          backgroundImage: "url(/images/test.svg)",
          backgroundSize: "100% 100%", // Forces SVG to fill exactly
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="max-w-7xl mx-auto grid grid-cols-6 grid-rows-2 gap-8 p-8 z-10 relative">
        {/* Main content in the top-left cell */}
        <div className="col-span-3 row-span-1 p-6">
          <h1 className="font-michroma mb-4 text-4xl font-bold text-transparent bg-gradient-to-r from-dark-green to-light-green bg-clip-text">
            WHAT WE DO
          </h1>
          <p>
            We bring tech to life through hands-on workshops, meaningful
            community projects, and fun team activities that build real
            connections. It's not just about coding—it's about creating
            together, solving problems that matter, and having a blast while we
            do it.
          </p>
        </div>
        {/* Top-right cell */}
        <ImageSlider />

        {/* Bottom-left cell */}
        <div className="col-span-2">
          <PinContainer
            title="/ui.aceternity.com"
            href="https://twitter.com/mannupaaji"
          >
            <div className="flex basis-full flex-col shadow-2xl tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <div className="absolute inset-0 bg-black/50 z-10 opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-200" />
              {/* Image with zoom-in effect */}
              <div className="overflow-hidden">
                <Image
                  src="/images/git_github_workshop.png"
                  alt="Docker Workshop"
                  width={200}
                  height={200}
                  className="relative object-cover w-full h-full  transition-transform duration-300 group-hover:scale-125"
                />
              </div>
            </div>
          </PinContainer>
        </div>
        {/* Bottom-center cell */}

        <div className="col-span-2">
          <PinContainer
            title="/ui.aceternity.com"
            href="https://twitter.com/mannupaaji"
          >
            <div className="flex basis-full flex-col shadow-2xl tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <div className="absolute inset-0 bg-black/50 z-10 opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-200" />

              {/* Image with zoom-in effect */}
              <div className="overflow-hidden">
                <Image
                  src="/images/amazon_q_workshop.jpg"
                  alt="Docker Workshop"
                  fill
                  className="relative w-full h-full  transition-transform duration-300 group-hover:scale-125"
                />
              </div>
            </div>
          </PinContainer>
        </div>
        {/* Bottom-right cell */}

        <div className="col-span-2">
          <PinContainer
            title="/ui.aceternity.com"
            href="https://twitter.com/mannupaaji"
          >
            <div className="flex basis-full flex-col shadow-2xl tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <div className="absolute inset-0 bg-black/50 z-10 opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-200" />

              {/* Image with zoom-in effect */}
              <div className="overflow-hidden">
                <Image
                  src="/images/docker_workshop.png"
                  alt="Docker Workshop"
                  width={200}
                  height={200}
                  className="relative object-cover w-full h-full  transition-transform duration-300 group-hover:scale-125"
                />
              </div>
            </div>
          </PinContainer>
        </div>
      </div>
    </div>
  );
};

export default Community;
