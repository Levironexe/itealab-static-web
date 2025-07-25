"use client";
import React, { useState, useEffect } from "react";
import { Icon } from "./plus-icon";

const ImageSlider = () => {
  const slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=400&fit=crop",
      title: "Modern Development",
      description: "Building the future with cutting-edge technologies",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop",
      title: "Team Collaboration",
      description: "Working together to create amazing solutions",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop",
      title: "Innovation Hub",
      description: "Where creativity meets technology",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=400&fit=crop",
      title: "Digital Solutions",
      description: "Transforming ideas into reality",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: any) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative col-span-3">
      {/* Corner Icons */}

      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-black z-10" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-black z-10" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-black z-10" />
      <div className="border-1 border-black/30 relative overflow-hidden h-96">
        {/* Slides Container */}
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="w-full h-full flex-shrink-0 relative"
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              {/* Text Overlay - Bottom Left */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/10 bg-opacity-40 flex items-end justify-start">
                <div className="text-left text-white p-6 pb-12">
                  <h2 className="text-3xl font-bold mb-3 drop-shadow-lg">
                    {slide.title}
                  </h2>
                  <p className="text-lg drop-shadow-md">{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full transition-all duration-200"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full transition-all duration-200"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-[2px] transition-all duration-200 ${
                index === currentSlide
                  ? "bg-light-green"
                  : "bg-dark-green bg-opacity-50 hover:bg-opacity-75"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
