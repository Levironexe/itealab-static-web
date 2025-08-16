"use client";
import React from "react";
import { useState, useEffect } from "react";
import { ArrowRight, Newspaper } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "./ui/plus-icon";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

const News = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(true);

  const items = [
    {
      icon: Newspaper,
      image: "/images/news1.jpg",
      date: "April 23, 2025",
      title: t('news_title_1'),
      url: "https://www.facebook.com/ITeaLabTeam",
      alt: "Talent members achievement",
    },
    {
      icon: Newspaper,
      image: "/images/news2.jpg",
      date: "April 19, 2025",
      title: t('news_title_2'),
      alt: "Partnership announcement",
      url: "https://www.facebook.com/ITeaLabTeam",
    },
  ];

  return (
    <div
      id="news"
      className="bg-background text-background-light px-6 sm:px-8 md:px-10 lg:px-12 py-12 sm:py-16 md:py-20 relative"
    >
      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Header Section with animation */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="font-michroma mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl font-bold">
            {t('itea_lab_news')}
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {t('news_subtitle')}
          </p>
        </motion.div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 max-w-6xl mx-auto">
          {items.map((item, index) => {
            const ItemIcon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ 
                  duration: 0.6, 
                  ease: "easeOut", 
                  delay: index * 0.2 // Stagger animation
                }}
              >
                <Link 
                  href={item.url} 
                  className="group block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <article className="mb-4 sm:mb-6 relative bg-background-light shadow-sm border border-dark-green overflow-hidden">
                    {/* Corner Icons */}
                    <Icon className="absolute h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 -top-2 sm:-top-3 -left-2 sm:-left-3 text-background-light z-10" />
                    <Icon className="absolute h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 -bottom-2 sm:-bottom-3 -left-2 sm:-left-3 text-background-light z-10" />
                    <Icon className="absolute h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 -top-2 sm:-top-3 -right-2 sm:-right-3 text-background-light z-10" />
                    <Icon className="absolute h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 -bottom-2 sm:-bottom-3 -right-2 sm:-right-3 text-background-light z-10" />

                    {/* News Image */}
                    <div className="relative h-48 sm:h-56 md:h-60 lg:h-64 w-full overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.alt}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                    </div>
                  </article>

                  {/* News Content */}
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[28px] font-bold text-background-light group-hover:text-light-green duration-300 transition-colors ease-in-out mb-2 sm:mb-3 leading-tight">
                      {item.title}
                    </h3>
                    <p className="font-michroma text-sm sm:text-base text-gray-300">
                      {item.date}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default News;