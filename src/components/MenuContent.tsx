import type { MenuProps } from "../types/types";
import type { LucideIcon } from "lucide-react";
import type { IconKey } from "../types/menuType";
import { Coffee, EggFried, Wine } from "lucide-react";

export const MenuContent = ({ isOpen,setOpen, menu, setActiveDir }: MenuProps) => {
  const iconMap: Record<IconKey, LucideIcon> = {
    coffee: Coffee,
    egg: EggFried,
    wine: Wine,
  };

  return (
    <div
      className={`
    fixed top-16 left-0 w-full h-[calc(100vh-4rem)] bg-white shadow-lg z-50
    transition-all duration-300 ease-out will-change-transform
    flex flex-col justify-between pb-4
    ${
      isOpen
        ? "opacity-100 translate-y-0 pointer-events-auto"
        : "opacity-0 -translate-y-3 pointer-events-none"
    }
  `}
    >
      <ul className="font-poppins">
        {menu.menuler.map((t, i) => {
          const Icon = iconMap[t.icon] || Coffee;
          return (
            <li
              key={i}
              onClick={() => {
                setActiveDir(t.id);
                setOpen(false)
              }}
              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer border-b border-[#C4A780]"
            >
              <Icon size={20} />
              <span>{t.title.tr}</span>
            </li>
          );
        })}
      </ul>
      <p className="text-center text-gray-500 text-sm font-bold tracking-wider font-dejavu select-none text-shadow-lg shadow-amber-300">
        Variante Hotel
      </p>
    </div>
  );
};
