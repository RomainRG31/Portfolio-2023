import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./page/Home";

const App = () => {
  const { pathname, hash, key } = useLocation();

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (hash === "") {
      scrollToTop();
    } else {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    }
  }, [pathname, hash, key]);

  return (
    <>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
