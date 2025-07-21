import React from "react";
import Link from "next/link";
import { Github, Facebook, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-background text-background-light relative overflow-hidden">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-20">
        {/* Top Section with Brand Message and Links */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Left section - Brand Message */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl lg:text-3xl font-bold text-light-green leading-tight mb-6">
              We build digital solutions that help communities navigate the tech
              landscape
            </h2>
            <div className="space-y-2">
              <p className=" font-medium">More information:</p>
              <Link
                href="mailto:contact.itealab@gmail.com"
                className=" underline hover:text-[#74A173] transition-colors"
              >
                contact.itealab@gmail.com
              </Link>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-light-green mb-6">
              Solutions
            </h3>
            <div className="space-y-4">
              <Link
                href="#web-development"
                className="block  hover:text-[#74A173] transition-colors"
              >
                Web Development
              </Link>
              <Link
                href="#mobile-apps"
                className="block  hover:text-[#74A173] transition-colors"
              >
                Mobile Apps
              </Link>
              <Link
                href="#cloud-computing"
                className="block  hover:text-[#74A173] transition-colors"
              >
                Cloud Computing
              </Link>
              <Link
                href="#data-science"
                className="block  hover:text-[#74A173] transition-colors"
              >
                Data Science
              </Link>
              <Link
                href="#devops"
                className="block  hover:text-[#74A173] transition-colors"
              >
                DevOps
              </Link>
            </div>
          </div>

          {/* Ecosystem Column */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-light-green mb-6">
              Ecosystem
            </h3>
            <div className="space-y-4">
              <Link
                href="#about"
                className="block  hover:text-[#74A173] transition-colors"
              >
                Our Community
              </Link>
              <Link
                href="#news"
                className="block  hover:text-[#74A173] transition-colors"
              >
                Events
              </Link>
              <Link
                href="#workstyle"
                className="block  hover:text-[#74A173] transition-colors"
              >
                Tech Dive 2025
              </Link>
              <Link
                href="#community"
                className="block  hover:text-[#74A173] transition-colors"
              >
                Vietnam Projects
              </Link>
              <Link
                href="#workshops"
                className="block  hover:text-[#74A173] transition-colors"
              >
                Academy
              </Link>
            </div>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-light-green mb-6">Company</h3>
            <div className="space-y-4">
              <Link
                href="#about"
                className="block  hover:text-[#74A173] transition-colors"
              >
                Documentation
              </Link>
              <Link
                href="#media"
                className="block  hover:text-[#74A173] transition-colors"
              >
                Media Kit
              </Link>
              <Link
                href="#roadmap"
                className="block  hover:text-[#74A173] transition-colors"
              >
                Roadmap 2025
              </Link>
              <Link
                href="#brochure"
                className="block  hover:text-[#74A173] transition-colors"
              >
                Company Brochure
              </Link>
              <Link
                href="#circles"
                className="block  hover:text-[#74A173] transition-colors"
              >
                ITea Circles
              </Link>
              <Link
                href="#team"
                className="block  hover:text-[#74A173] transition-colors"
              >
                Our Team
              </Link>
              <Link
                href="#joinUs"
                className="block  hover:text-[#74A173] transition-colors"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 text-light-green">
          <Link
            href="https://www.linkedin.com/company/itea-lab"
            className="w-12 h-12 bg-background-light rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <Linkedin size={20} className="" />
          </Link>
          <Link
            href="https://github.com/Itea-Lab"
            className="w-12 h-12 bg-background-light rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <Github size={20} className="" />
          </Link>
          <Link
            href="https://www.facebook.com/ITeaLabTeam"
            className="w-12 h-12 bg-background-light rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <Facebook size={20} className="" />
          </Link>
          <Link
            href="mailto:contact.itealab@gmail.com"
            className="w-12 h-12 bg-background-light rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <Mail size={20} className="" />
          </Link>
        </div>

        {/* Large Brand Name */}
        <div className="text-left mb-12 leading-tight">
          <h1 className="text-[80px] lg:text-[152px] xl:text-[216px] font-bold  tracking-tight font-michroma">
            ITea Lab
          </h1>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <div className="flex items-center space-x-4 mb-4 lg:mb-0">
            <p className="">Copyright ITea Lab 2025</p>
            <div className="p-1 bg-background-light rounded-full">
              <img
                src="/images/icon_transparent.png"
                width={30}
                height={30}
                alt="ITea Lab Logo"
              />
            </div>

            <span className=" font-medium">ITea Lab</span>
          </div>
          <div className="flex space-x-8">
            <Link
              href="#privacy"
              className=" hover:text-[#74A173] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#cookies"
              className=" hover:text-[#74A173] transition-colors"
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
