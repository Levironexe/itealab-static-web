"use client";
import React from "react";
import { Timeline } from "./ui/timeline";
import { Icon } from "./ui/plus-icon";
import { motion } from "framer-motion";

export function About() {
  const data = [
    {
      title: "2023",
      content: (
        <div>
          <p className="mb-4 text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold">
            Conception
          </p>
          <p className="mb-6 sm:mb-8 text-xs sm:text-sm md:text-base font-normal text-neutral-800 dark:text-neutral-200">
            The idea of an association for CS students suggested by Ms.Pascale
            Quester
          </p>
          <div className="grid grid-cols-1 gap-4">
            <img
              src="/images/2023/image1.jpeg"
              alt="Conception image"
              width={500}
              height={700}
              className="h-40 sm:h-48 md:h-60 lg:h-80 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2024",
      content: (
        <div>
          <p className="mb-4 text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-neutral-800 dark:text-neutral-200">
            IT Student Association
          </p>
          <p className="mb-6 sm:mb-8 text-xs sm:text-sm md:text-base font-normal text-neutral-800 dark:text-neutral-200">
            Formed and recruited Gen 1 in Feb 2024, focusing on doing projects.
            Represented Swinburne Vietnam CS at ACS accreditation
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-32 sm:h-40 md:h-44 lg:h-60 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-32 sm:h-40 md:h-44 lg:h-60 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-32 sm:h-40 md:h-44 lg:h-60 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="h-32 sm:h-40 md:h-44 lg:h-60 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="mb-4 text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-neutral-800 dark:text-neutral-200">
            Swinburne IT Lab
          </p>
          <p className="mb-6 sm:mb-8 text-xs sm:text-sm md:text-base font-normal text-neutral-800 dark:text-neutral-200">
            Represented Swinburne Vietnam CS at ExDays and Conception Day. We
            participated in FPT ResFes 2024 and Akathon Jan 2024
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-32 sm:h-40 md:h-44 lg:h-60 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-32 sm:h-40 md:h-44 lg:h-60 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-32 sm:h-40 md:h-44 lg:h-60 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="h-32 sm:h-40 md:h-44 lg:h-60 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2025",
      content: (
        <div>
          <p className="mb-4 text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-neutral-800 dark:text-neutral-200">
            ITea Lab Community
          </p>
          <p className="mb-6 sm:mb-8 text-xs sm:text-sm md:text-base font-normal text-neutral-800 dark:text-neutral-200">
            Re-branded as CS community. Organised workshops and began recruiting
            Gen 2
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-32 sm:h-40 md:h-44 lg:h-60 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-32 sm:h-40 md:h-44 lg:h-60 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-32 sm:h-40 md:h-44 lg:h-60 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="h-32 sm:h-40 md:h-44 lg:h-60 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Present",
      content: (
        <div>
          <p className="mb-4 text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-neutral-800 dark:text-neutral-200">
            Future Roadmap
          </p>
          <p className="mb-6 sm:mb-8 text-xs sm:text-sm md:text-base font-normal text-neutral-800 dark:text-neutral-200">
            Become semi-independent, collaborating with outside firms while
            representing CS students at Swinburne Vietnam
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-32 sm:h-40 md:h-44 lg:h-60 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-32 sm:h-40 md:h-44 lg:h-60 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-32 sm:h-40 md:h-44 lg:h-60 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="h-32 sm:h-40 md:h-44 lg:h-60 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div id="about" className="relative w-full overflow-clip bg-background">
      <div className="max-w-7xl mx-auto pb-12 sm:pb-16 md:pb-20 pt-16 sm:pt-20 md:pt-24 px-6 sm:px-8 md:px-10 lg:px-12">
        {/* Top section with two cards */}
        <div className="flex flex-col lg:flex-row justify-start items-start gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16 md:mb-20">
          {/* About US Card */}
          <motion.div
            className="flex-[2] relative border-1 border-white/10 w-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Icon className="absolute h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 -top-2 sm:-top-3 -left-2 sm:-left-3 dark:text-white text-black" />
            <Icon className="absolute h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 -bottom-2 sm:-bottom-3 -left-2 sm:-left-3 dark:text-white text-black" />
            <Icon className="absolute h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 -top-2 sm:-top-3 -right-2 sm:-right-3 dark:text-white text-black" />
            <Icon className="absolute h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 -bottom-2 sm:-bottom-3 -right-2 sm:-right-3 dark:text-white text-black" />

            <h2 className="font-michroma text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white pl-3 sm:pl-4 py-1 bg-gradient-to-r from-dark-green to-light-green max-w-4xl font-bold">
              About US
            </h2>
            <p className="text-neutral-700 dark:text-background-light text-sm sm:text-base md:text-lg p-3 sm:p-4 leading-relaxed">
              ITea Lab is a community built from a group of Computer Science
              students at Swinburne Vietnam, dedicated to cutting-edge research
              and development in technology.
            </p>
          </motion.div>

          {/* Our VISION Card */}
          <motion.div
            className="flex-[3] relative border-1 border-white/10 w-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <Icon className="absolute h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 -top-2 sm:-top-3 -left-2 sm:-left-3 dark:text-white text-black" />
            <Icon className="absolute h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 -bottom-2 sm:-bottom-3 -left-2 sm:-left-3 dark:text-white text-black" />
            <Icon className="absolute h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 -top-2 sm:-top-3 -right-2 sm:-right-3 dark:text-white text-black" />
            <Icon className="absolute h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 -bottom-2 sm:-bottom-3 -right-2 sm:-right-3 dark:text-white text-black" />

            <h2 className="font-michroma text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white pl-3 sm:pl-4 py-1 bg-gradient-to-r from-dark-green to-light-green max-w-4xl font-bold">
              Our VISION
            </h2>
            <p className="text-neutral-700 dark:text-background-light text-sm sm:text-base md:text-lg p-3 sm:p-4 leading-relaxed">
              To further expand the community and cultivate an inclusive space
              where Computer Science students can explore, research, and
              exchange knowledge, fostering connections among curious and
              passionate CS minds across all boundaries.
            </p>
          </motion.div>
        </div>

        {/* Timeline Section */}
        <Timeline data={data} />
      </div>
    </div>
  );
}
