import React from "react";
import Link from "next/link";
import { Github, Facebook, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-background text-background-light relative overflow-hidden">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 py-12 sm:py-16 md:py-20">
        {/* Top Section with Brand Message and Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 xl:gap-8 mb-12 sm:mb-16">
          {/* Left section - Brand Message */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h2 className="text-xl sm:text-2xl lg:text-2xl xl:text-3xl font-bold text-light-green leading-tight mb-4 sm:mb-6">
              We build digital solutions that help communities navigate the tech
              landscape
            </h2>
            <div className="space-y-2">
              <p className="font-medium text-sm sm:text-base">More information:</p>
              <Link
                href="mailto:contact.itealab@gmail.com"
                className="underline hover:text-[#74A173] transition-colors text-sm sm:text-base"
              >
                contact.itealab@gmail.com
              </Link>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold text-light-green mb-4 sm:mb-6">
              Solutions
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <Link
                href="#web-development"
                className="block hover:text-[#74A173] transition-colors text-sm sm:text-base"
              >
                Web Development
              </Link>
              <Link
                href="#mobile-apps"
                className="block hover:text-[#74A173] transition-colors text-sm sm:text-base"
              >
                Mobile Apps
              </Link>
              <Link
                href="#cloud-computing"
                className="block hover:text-[#74A173] transition-colors text-sm sm:text-base"
              >
                Cloud Computing
              </Link>
              <Link
                href="#data-science"
                className="block hover:text-[#74A173] transition-colors text-sm sm:text-base"
              >
                Data Science
              </Link>
              <Link
                href="#devops"
                className="block hover:text-[#74A173] transition-colors text-sm sm:text-base"
              >
                DevOps
              </Link>
            </div>
          </div>

          {/* Ecosystem Column */}
          <div className="lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold text-light-green mb-4 sm:mb-6">
              Ecosystem
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <Link
                href="#about"
                className="block hover:text-[#74A173] transition-colors text-sm sm:text-base"
              >
                Our Community
              </Link>
              <Link
                href="#news"
                className="block hover:text-[#74A173] transition-colors text-sm sm:text-base"
              >
                Events
              </Link>
              <Link
                href="#workstyle"
                className="block hover:text-[#74A173] transition-colors text-sm sm:text-base"
              >
                Tech Dive 2025
              </Link>
              <Link
                href="#community"
                className="block hover:text-[#74A173] transition-colors text-sm sm:text-base"
              >
                Vietnam Projects
              </Link>
              <Link
                href="#workshops"
                className="block hover:text-[#74A173] transition-colors text-sm sm:text-base"
              >
                Academy
              </Link>
            </div>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold text-light-green mb-4 sm:mb-6">Company</h3>
            <div className="space-y-3 sm:space-y-4">
              <Link
                href="#about"
                className="block hover:text-[#74A173] transition-colors text-sm sm:text-base"
              >
                Documentation
              </Link>
              <Link
                href="#media"
                className="block hover:text-[#74A173] transition-colors text-sm sm:text-base"
              >
                Media Kit
              </Link>
              <Link
                href="#roadmap"
                className="block hover:text-[#74A173] transition-colors text-sm sm:text-base"
              >
                Roadmap 2025
              </Link>
              <Link
                href="#brochure"
                className="block hover:text-[#74A173] transition-colors text-sm sm:text-base"
              >
                Company Brochure
              </Link>
              <Link
                href="#circles"
                className="block hover:text-[#74A173] transition-colors text-sm sm:text-base"
              >
                ITea Circles
              </Link>
              <Link
                href="#team"
                className="block hover:text-[#74A173] transition-colors text-sm sm:text-base"
              >
                Our Team
              </Link>
              <Link
                href="#joinUs"
                className="block hover:text-[#74A173] transition-colors text-sm sm:text-base"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex flex-wrap gap-3 sm:gap-4 text-light-green mb-8 sm:mb-12">
          <Link
            href="https://www.linkedin.com/company/itea-lab"
            className="w-10 h-10 sm:w-12 sm:h-12 bg-background-light rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <Linkedin size={18} className="sm:w-5 sm:h-5" />
          </Link>
          <Link
            href="https://github.com/Itea-Lab"
            className="w-10 h-10 sm:w-12 sm:h-12 bg-background-light rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <Github size={18} className="sm:w-5 sm:h-5" />
          </Link>
          <Link
            href="https://www.facebook.com/ITeaLabTeam"
            className="w-10 h-10 sm:w-12 sm:h-12 bg-background-light rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <Facebook size={18} className="sm:w-5 sm:h-5" />
          </Link>
          <Link
            href="mailto:contact.itealab@gmail.com"
            className="w-10 h-10 sm:w-12 sm:h-12 bg-background-light rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <Mail size={18} className="sm:w-5 sm:h-5" />
          </Link>
        </div>

        {/* Large Brand Name */}
        <div className="text-left mb-8 sm:mb-12 leading-tight overflow-hidden">
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[120px] xl:text-[152px] 2xl:text-[216px] font-bold tracking-tight font-michroma break-words">
            ITea Lab
          </h1>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center pt-6 sm:pt-8 border-t border-gray-200 gap-4 lg:gap-0">
          <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4 lg:mb-0">
            <p className="text-sm sm:text-base">Copyright ITea Lab 2025</p>
            <div className="flex items-center space-x-2">
              <div className="p-1 bg-background-light rounded-full">
                <img
                  src="/images/icon_transparent.png"
                  width={24}
                  height={24}
                  alt="ITea Lab Logo"
                  className="sm:w-[30px] sm:h-[30px]"
                />
              </div>
              <span className="font-medium text-sm sm:text-base">ITea Lab</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 lg:space-x-8">
            <Link
              href="#privacy"
              className="hover:text-[#74A173] transition-colors text-sm sm:text-base"
            >
              Privacy Policy
            </Link>
            <Link
              href="#cookies"
              className="hover:text-[#74A173] transition-colors text-sm sm:text-base"
            >
              Cookies Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;