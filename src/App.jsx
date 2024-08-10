import React, { useContext } from "react";
import Home from "./Pages/Home/index";
import { HoverProvider, HoverContext } from "./HoverContext";
import Cursor from "./components/Cursor";

const App = () => {
  const { setIsHovered, setIsTextHovered } = useContext(HoverContext);
  return (
    <>
      <Home />

      <div className="text-grayColor flex flex-col items-center text-[12px] md:text-[14px] lg:text-base mt-4">
        <h3
          onMouseEnter={() => setIsTextHovered(true)}
          onMouseLeave={() => setIsTextHovered(false)}
          className="z-10"
        >
          Designed by:{" "}
          <a
            href="/"
            className="text-white hover:text-orange transition-all duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Karthik Deshmukh
          </a>
        </h3>
        <h3
          onMouseEnter={() => setIsTextHovered(true)}
          onMouseLeave={() => setIsTextHovered(false)}
          className="z-10"
        >
          Developed by:{" "}
          <a
            href="https://portfolio-ultra-moz.vercel.app/"
            className="text-white hover:text-orange transition-all duration-300"
            target="_blank"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Moizullah Shaikh
          </a>
        </h3>
      </div>

      <Cursor />
    </>
  );
};

export default App;
