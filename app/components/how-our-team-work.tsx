"use client";
import { useState, useEffect } from "react";
import { Code, GitBranch, Globe, GraduationCap } from "lucide-react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { Icon } from "./ui/plus-icon";

export default function HowOurTeamWork() {
  const items = [
    {
      key: "research",
      icon: Code,
      title: "Research-Driven",
      text: "We balance academic rigor with practical applications, publishing our findings and contributing to open-source projects.",
    },
    {
      key: "agile",
      icon: GitBranch,
      title: "Agile Methodology",
      text: "We embrace iterative development, continuous feedback, and adaptive planning to deliver exceptional results.",
    },
    {
      key: "remote",
      icon: Globe,
      title: "Flexible Work",
      text: "We support remote work and flexible schedules, focusing on outcomes rather than hours spent at a desk.",
    },
    {
      key: "growth",
      icon: GraduationCap,
      title: "Continuous Growth",
      text: "We invest in our team's development through conferences, courses, and dedicated learning time.",
    },
  ];

  return (
    <div
      id="community"
      className="bg-background-light w-full text-black py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0 right-0 w-full hidden lg:block"
        style={{
          backgroundImage: "url(/images/test2.svg)",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h1 className="font-michroma mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-dark-green to-light-green bg-clip-text">
            HOW OUR TEAM WORK
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-center max-w-3xl mx-auto transition-opacity duration-2000 leading-relaxed px-4">
            At ITea Lab, we embrace challenges, diversity, and creativity in our
            work environment.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-6xl mx-auto">
          {items.map((item, index) => {
            const ItemIcon = item.icon;

            return (
              <div
                key={item.key}
                className="flex flex-col items-center text-center lg:text-left relative w-full"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContainer className="inter-var w-full">
                  <CardBody className="bg-black/15 backdrop-blur-xl relative group/card hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300 border border-white/20 w-full h-auto p-4 sm:p-6 md:p-8 hover:scale-105">
                    {/* Corner Icons */}
                    <Icon className="absolute h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 -top-2 sm:-top-3 -left-2 sm:-left-3 text-black z-10" />
                    <Icon className="absolute h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 -bottom-2 sm:-bottom-3 -left-2 sm:-left-3 text-black z-10" />
                    <Icon className="absolute h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 -top-2 sm:-top-3 -right-2 sm:-right-3 text-black z-10" />
                    <Icon className="absolute h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 -bottom-2 sm:-bottom-3 -right-2 sm:-right-3 text-black z-10" />

                    {/* Icon Container */}
                    <CardItem
                      translateZ={20}
                      className={`w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 ${
                        index === 2 || index === 1
                          ? "bg-dark-green"
                          : "bg-light-green"
                      } shadow-xl shadow-black/20 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto lg:mx-0 hover:scale-110 hover:shadow-lg transition-all duration-500`}
                    >
                      <ItemIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                    </CardItem>

                    {/* Title */}
                    <CardItem
                      translateZ={40}
                      className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-teal-800"
                    >
                      {item.title}
                    </CardItem>

                    {/* Description */}
                    <CardItem 
                      translateZ={30} 
                      className="text-black/80 text-sm sm:text-base md:text-lg leading-relaxed"
                    >
                      {item.text}
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </div>
            );
          })}
        </div>

        {/* Additional spacing for mobile */}
        <div className="h-8 sm:h-12 md:h-16 lg:hidden"></div>
      </div>
    </div>
  );
}