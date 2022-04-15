import React from "react";
import styled from "styled-components";

const StyledBurger = styled.div`
  width: 2.5rem;
  height: 2rem;
  z-index: 121;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
    margin: 20px;
  div {
    width: inherit;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "black" : "black")};
    border-radius: 10px;
  }
`;
const Burger = () => {
  return (
    <StyledBurger>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;
