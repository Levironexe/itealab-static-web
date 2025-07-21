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
      className="bg-background-light w-full text-black py-32 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0 right-0 w-full"
        style={{
          backgroundImage: "url(/images/test2.svg)",
          backgroundSize: "100% 100%", // Forces SVG to fill exactly
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 relative z-10 py-20">
        <h1 className="font-michroma mb-4 text-4xl font-bold text-transparent bg-gradient-to-r from-dark-green to-light-green bg-clip-text text-center">
          HOW OUR TEAM WORK
        </h1>

        <p className="text-lg text-center max-w-3xl mx-auto mb-16 transition-opacity duration-2000">
          At ITea Lab, we embrace challenges, diversity, and creativity in our
          work environment.
        </p>

        <div className="grid md:grid-cols-2 max-w-5xl mx-auto transition-opacity duration-2000">
          {items.map((item, index) => {
            const ItemIcon = item.icon;

            return (
              <div
                key={item.key}
                className="flex flex-col items-center text-left relative"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContainer className="inter-var">
                  <CardBody className="bg-black/15 backdrop-blur-xl relative group/card hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300 border border-white/20 w-auto sm:w-[30rem] h-auto p-6 hover:scale-105">
                    <Icon className="absolute h-6 w-6 -top-3 -left-3 text-black z-10" />
                    <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-black z-10" />
                    <Icon className="absolute h-6 w-6 -top-3 -right-3 text-black z-10" />
                    <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-black z-10" />
                    <CardItem
                      translateZ={20}
                      className={`w-20 h-20 ${
                        index === 2 || index === 1
                          ? "bg-dark-green"
                          : "bg-light-green"
                      } shadow-xl shadow-black/20 rounded-full flex items-center justify-center mb-6 hover:scale-110 hover:shadow-lg transition-all duration-500`}
                    >
                      <ItemIcon className="w-8 h-8 text-white" />
                    </CardItem>

                    <CardItem
                      translateZ={40}
                      className="text-xl font-bold mb-3 text-teal-800"
                    >
                      {item.title}
                    </CardItem>

                    <CardItem translateZ={30} className="text-black/80">
                      {item.text}
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
