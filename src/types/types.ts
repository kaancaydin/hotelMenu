import type { MenuTypeProp } from "./menuType";

export interface HamburgerProps {
  isOpen: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isLang: boolean
  setLang: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface MenuProps {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveDir: React.Dispatch<React.SetStateAction<string>>;
  menu: MenuTypeProp;
}
