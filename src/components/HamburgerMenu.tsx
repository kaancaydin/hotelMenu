import { Squeeze as Hamburger } from "hamburger-react";
import logo from "../assets/logo.webp";
import type { HamburgerProps } from "../types/types";
import { Languages } from "lucide-react";
import { LanguageMenu } from "./LanguageMenu";

export const HamburgerMenu = ({
  isOpen,
  setOpen,
  isLangOpen,
  setLangOpen,
  lang,
  setLang,
}: HamburgerProps) => {
  return (
    <header className="sticky top-0 z-50 bg-white backdrop-blur-md border-b-2 border-[#C4A780]">
      <nav className="flex mx-auto h-16 justify-between px-4 items-center">
        <Hamburger toggled={isOpen} toggle={setOpen} color="#1F1F1F" />
        <img
          src={logo}
          className="h-12 absolute left-1/2 -translate-x-1/2"
          alt="logo"
        />
        <Languages
          size={24}
          className="cursor-pointer text-[#1F1F1F]"
          onClick={() => setLangOpen(!isLangOpen)}
        />
        <LanguageMenu
          lang={lang}
          setLang={setLang}
          isLangOpen={isLangOpen}
          setLangOpen={setLangOpen}
        />
      </nav>
    </header>
  );
};
