'use client';
import React from "react";
import { FloatingDock } from "./ui/floating-dock";
import SimpleLanguageSwitcher from "./simple-language-switcher";
import { useLanguage } from "../contexts/LanguageContext";
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandFacebook,
  IconExchange,
  IconHome,
  IconNetwork,
  IconItalic,
  IconNews,
  IconBrandLinkedin
} from "@tabler/icons-react";

export function Navbar() { 
  const { t } = useLanguage();
  
  const links = [
    {
      title: t('home'),
      icon: (
        <img
          src="/images/icon_transparent.png"
          width={30}
          height={30}
          alt="ITea Lab Logo"
        />),    
      href: "#",
      target: "_self",
    },

    {
      title: t('about'),
      icon: (
        <IconItalic className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#about",
      target: "_self",

    },
    {
      title: t('what_we_do'),
      icon: (
        <IconNetwork className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#community",

      target: "_self",
    },
    {
      title: t('news'),
      icon: (
        <IconNews className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#news",
      target: "_self",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://l.facebook.com/l.php?u=https%3A%2F%2Flinkedin.com%2Fin%2Fhttps%253A%252F%252Fwww.linkedin.com%252Fcompany%252Fitea-lab%3Ffbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExOFdZVkFDOTVUaGQ2UGxoeAEeuE-zGpWRJR7FH18fbeOZX-byu6vaaJiBWzFoZcx30A-sDxk5wBXfL844tSc_aem_5qCIftWIhDUzGbM6lXMoKg&h=AT2gnShYc4e5yqe9p3Vnpvn4K3HRMeHbP_SeJ-hy_mAtLvfNXopF2cx6ELI9gpGyUchd8PEH4hdtdRrUXn2ae_lZBNxGvCHIrhXqFqSYQtdaevZcSZDO6zMIY6iJ7_6sHR-nByFcc1T-QzMPVXBWXxQr1Q",
      target: "_blank",

    },

    {
      title: "Facebook",
      icon: (
        <IconBrandFacebook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.facebook.com/ITeaLabTeam",
      target: "_blank",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://l.facebook.com/l.php?u=https%3A%2F%2Fgithub.com%2FItea-Lab%3Ffbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExOFdZVkFDOTVUaGQ2UGxoeAEeNUBc7hmZM-IuWWXQzBC4lY9ol_NZ9qFYrhYJ7xyV-cbugMDPgSQwXpYCNVY_aem_BNtGzBRq4LyeJwF1jUzZmg&h=AT0AiR0nQAn3ZryC3aPVQtpVFgM8YAX2KKEIFH-vE6ODJqDwVUl4MLQ3xdVu6GhsnwqustI9Sp0KfZNON3lz3GBmisA-735pfZRqNmJiSglUAqTXHPSGCE863ka0dahgfYvox_7IJL2AIyzBCAOsvAVHAQ",
      target: "_blank",
    },
  ];
  return (
     <div className="fixed z-40 bottom-0 flex items-end justify-start h-auto w-full p-4 gap-4">
      <FloatingDock
        items={links}
      />
      <div className="hidden md:flex h-16 items-end pb-3">
        <div className="flex items-center justify-center">
          <SimpleLanguageSwitcher />
        </div>
      </div>
    </div>
  );
}
