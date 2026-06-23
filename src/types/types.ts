export interface HamburgerProps {
  isOpen: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isLang: boolean
  setLang: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface MenuProps {
  isOpen: boolean
}