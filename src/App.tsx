import "./App.css";
import { HamburgerMenu } from "./components/HamburgerMenu.tsx";
import { Menu } from "./components/Breakfast.tsx";
import { MenuContent } from "./components/MenuContent.tsx";
import { useState } from "react";
import type {  MenuTypeProp } from "./types/menuType.ts";
import menuler from "./data/menu.json";

function App() {
  //const [count, setCount] = useState(0);
  const [isOpen, setOpen] = useState(false);
  const [isLang, setLang] = useState(false);
  const [activeDir, setActiveDir] = useState("breakfast");
  const menu = menuler as MenuTypeProp;
  return (
    <>
      <HamburgerMenu
        isOpen={isOpen}
        setOpen={setOpen}
        isLang={isLang}
        setLang={setLang}
      />
      <MenuContent isOpen={isOpen} menu={menu} setActiveDir={setActiveDir} setOpen={setOpen}/>
      <Menu menu={menu} activeDir={activeDir}/>
    </>
  );
}

export default App;
