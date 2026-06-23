import type { MenuProps } from "../types/types";
import { Coffee, Wine } from "lucide-react";

export const MenuContent = ({ isOpen }: MenuProps) => {
  return (
    <div
      className={`
    absolute top-16 left-0 w-full bg-white shadow-lg
    transition-all duration-300 ease-out
    ${
      isOpen
        ? "opacity-100 translate-y-0"
        : "opacity-0 -translate-y-3 pointer-events-none"
    }
  `}
    >
      <ul className="font-dejavu">
        <li className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer">
          <Coffee size={20} />
          <span >Sıcak İçecekler</span>
        </li>
        <li className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer">
          <Wine size={20} />
          <span >Soğuk İçecekler</span>
        </li>
      </ul>
    </div>
  );
};
