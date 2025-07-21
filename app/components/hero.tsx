"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import { Icon } from "./ui/plus-icon";
import Image from "next/image";
const KEYWORDS = [
  "React",
  "Next.js",
  "Vue",
  "Angular",
  "Svelte",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Tailwind",
  "Bootstrap",
  "Sass",
  "SCSS",
  "PostCSS",
  "Webpack",
  "Vite",
  "Parcel",
  "Rollup",
  "ESLint",
  "Prettier",
  "Babel",
  "Node.js",
  "Express",
  "Fastify",
  "Nest.js",
  "Python",
  "Django",
  "Flask",
  "PHP",
  "Laravel",
  "Ruby",
  "Rails",
  "Java",
  "Spring",
  "C#",
  "ASP.NET",
  "Go",
  "Rust",
  "Kotlin",
  "Swift",
  "Dart",
  "Flutter",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Redis",
  "SQLite",
  "Firebase",
  "Supabase",
  "PlanetScale",
  "Prisma",
  "AWS",
  "Azure",
  "GCP",
  "Vercel",
  "Netlify",
  "Docker",
  "Kubernetes",
  "CI/CD",
  "GitHub Actions",
  "Jenkins",
  "GitLab",
  "Linux",
  "Ubuntu",
  "REST",
  "GraphQL",
  "API",
  "gRPC",
  "WebSocket",
  "Socket.io",
  "tRPC",
  "React Native",
  "Expo",
  "iOS",
  "Android",
  "PWA",
  "Mobile First",
  "Figma",
  "Sketch",
  "Adobe XD",
  "UI/UX",
  "Design System",
  "Accessibility",
  "Jest",
  "Vitest",
  "Cypress",
  "Playwright",
  "Testing Library",
  "Storybook",
  "Redux",
  "Zustand",
  "Context API",
  "MobX",
  "Authentication",
  "OAuth",
  "JWT",
  "Analytics",
  "SEO",
  "Performance",
  "Git",
  "VS Code",
  "Terminal",
  "npm",
  "Web3",
  "Blockchain",
  "AI",
  "Machine Learning",
  "Agile",
  "Scrum",
  "DevOps",
];

export default function Hero() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const getRandomSize = () => {
    const sizes = ["text-sm", "text-xl"];
    return sizes[Math.floor(Math.random() * sizes.length)];
  };

  const getRandomColor = () => {
    const colors = [
      "#74A173", // light-green
      "#5eae5c", // dark-green
      "#83d681", // dark-green
      "#428341", // dark-green
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const createInfiniteArray = (arr: any, repeatTimes = 50) => {
    return Array(repeatTimes).fill(arr).flat();
  };

  const infiniteKeywords = createInfiniteArray(KEYWORDS, 50);

  return (
    <div className="h-screen pb-24 w-full flex items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-20 z-20 bg-gradient-to-b from-transparent to-background" />
      <div
        style={{
          transform: "rotateX(55deg) rotateZ(-45deg)",
          transformStyle: "preserve-3d",
        }}
        className="text-left relative"
      >
        <div className="relative w-full pb-12 flex justify-start gap-4">
          {/* Blur shadow - positioned behind */}
          <div className="absolute left-0 w-1/2 h-[180px] bg-black blur-[80px] -z-10 -translate-x-20 translate-y-20"></div>
          {/* Main image container - positioned above */}
          <div className="relative duration-300 ease-in-out transition-all grayscale hover:grayscale-0 bg-white h-[180px] w-1/2 z-20 mr-0">
            <Image
              src="/images/iot.jpg"
              alt=""
              fill
              className="object-cover"
              style={{ transform: "-rotateZ(45deg)" }}
            />
          </div>
          <div className="font-bold text-3xl rotate-90 flex items-center">
            Your playground
          </div>
        </div>

        <p className="text-7xl  text-transparent bg-gradient-to-r from-dark-green via-light-green to-light-green bg-clip-text font-bold z-20">Welcome to</p>
        <div className="relative my-10">
          <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black" />
          <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black" />
          <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black" />
          <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black" />
          <h1 className="text-[240px] font-michroma font-bold text-light-green leading-none">
            ITea Lab
          </h1>
        </div>

        <div className="relative w-full">
          <p className="text-4xl font-bold">Where tech meets its quali-tea</p>
          {/* Blur shadow - positioned behind */}
          <div className="absolute w-[150px] h-[150px] bg-black blur-xl -translate-x-20 translate-y-20 z-0 right-0"></div>

          {/* Main image container - positioned above */}
          <div className="relative p-4 hover:p-0 duration-300 ease-in-out transition-all grayscale hover:grayscale-0 bg-white w-[150px] h-[150px] z-20 ml-auto">
            <Image
              src="/images/icon_transparent.png"
              alt="Hero Image"
              width={150}
              height={150}
              className="object-cover "
              style={{ transform: "rotate(45deg)" }}
            />
          </div>
        </div>

        <div
          className="absolute -z-10 flex flex-wrap leading-relaxed"
          style={{
            width: "300vw",
            height: "300vh",
            top: "-100vh",
            left: "-100vw",
            padding: "20vh 20vw",
          }}
        >
          {infiniteKeywords.map((keyword, index) => (
            <motion.span
              className={`text-transparent mr-2 mb-1 inline-block cursor-default ${getRandomSize()}`}
              key={index}
              animate={{
                color: "rgba(0,0,0,0.1)",
                textShadow: "none",
                scale: 1,
              }}
              whileHover={{
                color: getRandomColor(),
                textShadow: "0 0 16px currentColor, 0 0 32px currentColor",
                scale: 1.1,
                transition: { duration: 0 },
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {keyword}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
}
