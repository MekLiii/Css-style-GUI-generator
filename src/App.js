import Main from "./components/pages/Main";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./components/pages/Home";
import BoxShadow from "./components/pages/BoxShadow";
import { AnimatePresence } from "framer-motion";

function App() {
  const [isOpenNav, setIsOpen] = useState(false);
  
  return (
    <Main isOpen={isOpenNav} setIsOpen={() => setIsOpen(false)}>
      <AnimatePresence>
        <Routes>
          <Route
            path="/Css-style-generator/"
            element={
              <Home
                setIsOpen={() => setIsOpen(!isOpenNav)}
                isOpen={isOpenNav}
              />
            }
          />
          <Route path="*" element={<h1>Not found</h1>} />
          <Route path="/Css-style-generator/boxShadow" element={<BoxShadow />} />
        </Routes>
      </AnimatePresence>
    </Main>
  );
}

export default App;
