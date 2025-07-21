"use client";
import React from "react";
import { useState, useEffect } from "react";
import { ArrowRight, Newspaper } from "lucide-react";
import Link from "next/link";
import { Icon } from "./ui/plus-icon";
const News = () => {
  const [isVisible, setIsVisible] = useState(true);

  const items = [
    {
      icon: Newspaper,
      image: "/images/news1.jpg",
      date: "April 23, 2025",
      title:
        "ITea Lab Talents Build Chongluadao.vn AI Tool, Gain National Recognition",
      url: "https://www.facebook.com/ITeaLabTeam",
      alt: "Talent members achievement",
    },
    {
      icon: Newspaper,
      image: "/images/news2.jpg",
      date: "April 19, 2025",
      title:
        "ITea Lab Partners with 3DIoT for IoT and Software Development Collaboration",
      alt: "Partnership announcement",
      url: "https://www.facebook.com/ITeaLabTeam",
    },
  ];

  return (
    <div
      id="news"
      className="bg-background text-background-light px-4 sm:px-6 md:px-10 py-20 relative"
    >
      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="font-michroma mb-4 text-4xl font-bold ">ITEA LAB NEWS</h1>
          <p className="text-lg">
            Stay updated with the latest happenings at our community.
          </p>
        </div>

        {/* News Cards Grid */}
        <div
          className={`grid md:grid-cols-2 gap-12 max-w-7xl mx-auto transition-opacity duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {items.map((item, index) => {
            const ItemIcon = item.icon;

            return (
              <Link href={item.url} className="group">
                <div
                  key={index}
                  className="mb-4 relative bg-background-light shadow-sm border border-dark-green"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Corner Icons */}
                  <Icon className="absolute h-6 w-6 -top-3 -left-3 text-background-light z-10" />
                  <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-background-light z-10" />
                  <Icon className="absolute h-6 w-6 -top-3 -right-3 text-background-light z-10" />
                  <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-background-light z-10" />

                  {/* News Image */}
                  <div className="relative h-60 w-full overflow-hidden group">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* News Content */}
                  <h3 className="text-[28px] font-bold text-background-light group-hover:text-light-green duration-400 transition-colors ease-in-out mb-2">
                    {item.title}
                  </h3>
                  <p className="font-michroma">{item.date}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default News;
