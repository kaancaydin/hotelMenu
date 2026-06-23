import "./App.css";
import { HamburgerMenu } from "./components/HamburgerMenu.tsx";
import { MenuContent } from "./components/MenuContent.tsx";
import { useState } from "react";

function App() {
  //const [count, setCount] = useState(0);
  const [isOpen, setOpen] = useState(false);
  const [isLang, setLang] = useState(false);

  return (
    <>
      <HamburgerMenu isOpen={isOpen} setOpen={setOpen} isLang={isLang} setLang={setLang}/>
      <MenuContent isOpen={isOpen} />
    </>
  );
}

export default App;
