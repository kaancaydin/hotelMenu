import { Squeeze as Hamburger } from "hamburger-react";
import logo from "../assets/logo.webp";
import type { HamburgerProps } from "../types/types";
import { Languages } from "lucide-react";

export const HamburgerMenu = ({
  isOpen,
  setOpen,
  isLang,
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
          onClick={() => setLang(!isLang)}
        />
        <div
          className={`
    absolute top-18 right-1 w-30 shadow-lg
    transition-all duration-300 ease-out
    rounded-2xl bg-white overflow-hidden  border-2 border-[#C4A780]
    ${
      isLang
        ? "opacity-100 translate-y-0"
        : "opacity-0 -translate-y-3 pointer-events-none"
    }
  `}
        >
          
          <ul className="font-poppins font-medium text-base">
            <li className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer border-b border-[#C4A780]">
              <span>Türkçe</span>
            </li>
            <li className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer">
              <span>English</span>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
