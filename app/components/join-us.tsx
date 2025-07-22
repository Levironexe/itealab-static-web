"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Cobe } from "./ui/draggable-and-rotate-globe";

export default function JoinUs() {
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  const addOns = [
    "Web Development",
    "Mobile Apps", 
    "Cloud Computing",
    "Data Science",
    "DevOps",
    "UI/UX Design",
    "Machine Learning",
    "Cybersecurity",
  ];

  const toggleAddOn = (addon: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(addon)
        ? prev.filter((item) => item !== addon)
        : [...prev, addon]
    );
  };

  return (
    <div
      id="joinus"
      className="bg-background text-background-light px-6 sm:px-8 md:px-10 lg:px-12 py-12 sm:py-16 md:py-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12">
          
          {/* Left Section */}
          <div className="lg:w-1/2 flex flex-col justify-between">
            <div className="mb-8 lg:mb-12">
              <h1 className="font-michroma text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                DROP
                <br />
                US A LINE
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                Introduce yourself and your enthusiasm.
                <br className="hidden sm:block" />
                We are eager to learn about your creative journey and the
                inspiration behind your work.
              </p>
            </div>

            {/* Globe Component */}
            <div className="hidden lg:block">
              <Cobe />
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="lg:w-1/2">
            <form className="space-y-6">
              <div>
                <label className="block mb-2 text-sm sm:text-base font-medium">Your name</label>
                <input
                  type="text"
                  placeholder="Tell us what we should call you"
                  className="w-full bg-background-light text-background p-3 sm:p-4 border border-zinc-800 focus:outline-none focus:border-light-green transition-colors text-sm sm:text-base"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm sm:text-base font-medium">Your email</label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full bg-background-light text-background p-3 sm:p-4 border border-zinc-800 focus:outline-none focus:border-light-green transition-colors text-sm sm:text-base"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm sm:text-base font-medium">Your message (optional)</label>
                <textarea
                  placeholder="Tell us about yourself and why you're interested"
                  className="min-h-32 sm:min-h-40 w-full bg-background-light text-background p-3 sm:p-4 border border-zinc-800 focus:outline-none focus:border-light-green transition-colors text-sm sm:text-base resize-y"
                />
              </div>

              <div>
                <h3 className="text-base sm:text-lg md:text-xl mb-3 sm:mb-4 flex items-center gap-2">
                  Add-Ons
                  <span className="bg-background-light text-background rounded-full w-5 h-5 sm:w-6 sm:h-6 inline-flex items-center justify-center text-xs sm:text-sm font-bold">
                    ?
                  </span>
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {addOns.map((addon) => (
                    <button
                      key={addon}
                      type="button"
                      onClick={() => toggleAddOn(addon)}
                      className={`px-3 py-1.5 sm:px-4 sm:py-2 border text-xs sm:text-sm md:text-base transition-colors hover:scale-105 ${
                        selectedAddOns.includes(addon)
                          ? "border-light-green bg-background-light text-black font-medium"
                          : "border-background-light hover:border-light-green"
                      }`}
                    >
                      {addon}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-background-light text-black font-semibold flex items-center justify-center sm:justify-start gap-2 hover:gap-4 duration-200 hover:opacity-90 transition-all text-sm sm:text-base"
                >
                  Join Us
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <span className="text-xs sm:text-sm md:text-base text-gray-300">
                  Estimated respond time → within an hour
                </span>
              </div>

              {/* Email Contact */}
              <div className="text-left pt-8 sm:pt-12 md:pt-16 lg:pt-24">
                <p className="text-gray-400 mb-2 sm:mb-4 text-sm sm:text-base">
                  or email us at
                </p>
                <a
                  href="mailto:itealab@gmail.com"
                  className="font-michroma text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold hover:text-light-green transition-colors underline break-all"
                >
                  itealab@gmail.com
                </a>
              </div>
            </form>

            {/* Globe Component for Mobile/Tablet */}
            <div className="lg:hidden mt-8">
              <Cobe />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}