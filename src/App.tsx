import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { Squeeze as Hamburger } from 'hamburger-react'
import { useState } from "react";


function App() {
  //const [count, setCount] = useState(0);
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
      </section>
      <nav className="flex  bg-white absolute top-0 left-0 right-0 p-2">
        <Hamburger toggled={isOpen} toggle={setOpen}/>
        <img src={viteLogo} className=""  alt="Vite logo" />
      </nav>
      
    </>
  );
}

export default App;
