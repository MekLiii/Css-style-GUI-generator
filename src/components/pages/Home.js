import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

function Home({ setIsOpen, isOpen }) {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
    >
      <Welcome>Welcome in css generator</Welcome>
      <Hometext onClick={setIsOpen}>
        {isOpen ? "Close nav" : "Open nav"}
      </Hometext>
    </motion.div>
  );
}
const Welcome = styled.h1`
  color: black;
  font-size: 30px;
`;
const Hometext = styled.div`
  color: black;
  text-align: center;
  cursor: pointer;
  text-decoration: underline;
  font-size: 20px;
  margin-top: 20px;
`;

export default Home;
