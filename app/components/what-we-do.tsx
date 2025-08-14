"use client"
import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Icon } from "./ui/plus-icon";
import ImageSlider from "./ui/image-slider";
import { useLanguage } from "../contexts/LanguageContext";

const Community = () => {
  const { t } = useLanguage();
  
  const workshops = [
    {
      name: t('git_github_workshop'),
      url: "https://twitter.com/mannupaaji",
      image: "/images/git_github_workshop.png",
      alt: "Git GitHub Workshop",
    },
    {
      name: t('amazon_q_workshop'),
      url: "https://twitter.com/mannupaaji",
      image: "/images/amazon_q_workshop.jpg",
      alt: "Amazon Q Workshop",
    },
    {
      name: t('docker_workshop'),
      url: "https://twitter.com/mannupaaji",
      image: "/images/docker_workshop.png",
      alt: "Docker Workshop",
    },
  ];

  return (
    <div
      id="community"
      className="bg-background-light w-full text-black py-16 sm:py-20 md:py-24 lg:py-32 relative"
    >
      <div
        className="absolute inset-0 z-0 left-0 w-full hidden lg:block"
        style={{
          backgroundImage: "url(/images/test.svg)",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 z-10 relative">
        {/* Main Content Section */}
        <div className="flex flex-col space-y-8 sm:space-y-12 lg:space-y-16">
          {/* Header and Image Slider Row */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8">
            {/* Header and Description */}
            <div className="text-center lg:text-left lg:flex-1 mb-8 lg:mb-0">
              <h1 className="font-michroma mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-dark-green to-light-green bg-clip-text">
                {t('what_we_do_title')}
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto lg:mx-0">
                {t('what_we_do_desc')}
              </p>
            </div>

            {/* Image Slider */}
            <div className="lg:flex-1">
              <ImageSlider />
            </div>
          </div>

          {/* Workshops Section */}
          <div className="flex flex-col space-y-6 sm:space-y-8">
            <h2 className="font-michroma text-2xl sm:text-3xl md:text-4xl font-bold text-background text-center lg:text-left">
              {t('workshops')}
            </h2>

            {/* Workshop Links */}
<div className="flex flex-col gap-6 sm:gap-8 lg:justify-start">
          {workshops.map((workshop, index) => (
            <div key={index} className="relative group">
              {/* Corner Icons */}
              

              {/* Share Icon - Hidden by default, shows on hover */}
              <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out">
                <ArrowUpRight className="h-5 w-5 sm:h-8 sm:w-8 group-hover:text-background text-background-light" />
              </div>

              <a
                href={workshop.url}
                className="relative z-0 flex items-center p-4 sm:p-6 bg-white/10 backdrop-blur-sm border border-green-800/20 hover:border-green-800/50 hover:bg-background textbackground hover:text-background-light 
                w-full
                group-hover:ml-16 group-hover:w-[calc(100%-4rem)]
                transition-all duration-300 ease-out
                group-hover:animate-none
                animate-[bounce-return_0.8s_cubic-bezier(0.68,-0.55,0.265,1.55)]"
              >
                <Icon className="absolute z-10 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 -top-2 sm:-top-3 -left-2 sm:-left-3 text-black" />
              <Icon className="absolute z-10 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 -bottom-2 sm:-bottom-3 -left-2 sm:-left-3 text-black" />
              <Icon className="absolute z-10 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 -top-2 sm:-top-3 -right-2 sm:-right-3 text-black" />
              <Icon className="absolute z-10 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 -bottom-2 sm:-bottom-3 -right-2 sm:-right-3 text-black" />
                {/* Workshop Name */}
                <span className="text-lg sm:text-xl font-semibold relative z-10 pr-20 group-hover:pl-8 transition-all duration-300">
                  {workshop.name}
                </span>

                {/* Workshop Image - Absolute positioned to right border
                <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 overflow-hidden">
                  <Image src={workshop.image || "/placeholder.svg"} alt={workshop.alt} fill className="object-cover" />
                </div> */}
              </a>
            </div>
          ))}
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
