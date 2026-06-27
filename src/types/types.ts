import type { MenuTypeProp } from "./menuType";

export type Lang = "tr" | "en";

export interface HamburgerProps {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isLangOpen: boolean;
  setLangOpen: React.Dispatch<React.SetStateAction<boolean>>;
  lang: Lang;
  setLang: React.Dispatch<React.SetStateAction<Lang>>;
}

export interface LangProps {
  isLangOpen: boolean;
  setLangOpen: React.Dispatch<React.SetStateAction<boolean>>;
  lang: Lang;
  setLang: React.Dispatch<React.SetStateAction<Lang>>;
}

export interface MenuProps {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveDir: React.Dispatch<React.SetStateAction<string>>;
  menu: MenuTypeProp;
  lang: Lang;
}
