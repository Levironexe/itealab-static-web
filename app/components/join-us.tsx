"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Cobe } from "./ui/draggable-and-rotate-globe";
import { useLanguage } from "../contexts/LanguageContext";

export default function JoinUs() {
  const { t } = useLanguage();
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  const addOns = [
    t('web_development'),
    t('mobile_apps'), 
    t('cloud_computing'),
    t('data_science'),
    t('devops'),
    t('ui_ux_design'),
    t('machine_learning'),
    t('cybersecurity'),
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
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 z-10 relative">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12">
          
          {/* Left Section */}
          <div className="lg:w-1/2 flex flex-col justify-between">
            <div className="mb-8 lg:mb-12">
              <h1 className="font-michroma text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                {t('drop_us_line').split(' ').slice(0, 1)}
                <br />
                {t('drop_us_line').split(' ').slice(1).join(' ')}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                {t('introduce_yourself')}
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
                <label className="block mb-2 text-sm sm:text-base font-medium">{t('your_name')}</label>
                <input
                  type="text"
                  placeholder={t('name_placeholder')}
                  className="w-full bg-background-light text-background p-3 sm:p-4 border border-zinc-800 focus:outline-none focus:border-light-green transition-colors text-sm sm:text-base"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm sm:text-base font-medium">{t('your_email')}</label>
                <input
                  type="email"
                  placeholder={t('email_placeholder')}
                  className="w-full bg-background-light text-background p-3 sm:p-4 border border-zinc-800 focus:outline-none focus:border-light-green transition-colors text-sm sm:text-base"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm sm:text-base font-medium">{t('your_message')}</label>
                <textarea
                  placeholder={t('message_placeholder')}
                  className="min-h-32 sm:min-h-40 w-full bg-background-light text-background p-3 sm:p-4 border border-zinc-800 focus:outline-none focus:border-light-green transition-colors text-sm sm:text-base resize-y"
                />
              </div>

              <div>
                <h3 className="text-base sm:text-lg md:text-xl mb-3 sm:mb-4 flex items-center gap-2">
                  {t('add_ons')}
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
                      className={`px-3 py-1.5 sm:px-4 sm:py-2 border text-xs sm:text-sm md:text-base transition-colors ${
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
                  {t('join_us_button')}
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <span className="text-xs sm:text-sm md:text-base text-gray-300">
                  {t('estimated_respond')}
                </span>
              </div>

              {/* Email Contact */}
              <div className="text-left pt-8 sm:pt-12 md:pt-16 lg:pt-24">
                <p className="text-gray-400 mb-2 sm:mb-4 text-sm sm:text-base">
                  {t('or_email_us')}
                </p>
                <a
                  href="mailto:itealab@gmail.com"
                  className="font-michroma text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold hover:text-light-green transition-colors underline break-all"
                >
                  itealab@gmail.com
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}