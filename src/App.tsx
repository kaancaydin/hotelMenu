import "./App.css";
import { HamburgerMenu } from "./components/HamburgerMenu.tsx";
import { Menu } from "./components/Menu.tsx";
import { MenuContent } from "./components/MenuContent.tsx";
import { useState } from "react";
import type {  MenuTypeProp } from "./types/menuType.ts";
import menuler from "./data/menu.json";
import type { Lang } from "./types/types.ts";

function App() {
  //const [count, setCount] = useState(0);
  const [isOpen, setOpen] = useState(false);
  const [isLangOpen, setLangOpen] = useState(false);
  const [activeDir, setActiveDir] = useState("breakfast");
  const browserLang = navigator.language.startsWith("tr") ? "tr" : "en";
  
  const [lang, setLang] = useState<Lang>(browserLang);
  const menu = menuler as MenuTypeProp;
  return (
    <>
      <HamburgerMenu
        isOpen={isOpen}
        setOpen={setOpen}
        isLangOpen={isLangOpen}
        setLangOpen={setLangOpen}
        lang={lang}
        setLang={setLang}
      />
      <MenuContent isOpen={isOpen} menu={menu} setActiveDir={setActiveDir} setOpen={setOpen} lang={lang}/>
      <Menu menu={menu} activeDir={activeDir} lang={lang} />
    </>
  );
}

export default App;
