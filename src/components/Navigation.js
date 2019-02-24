import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Style from "../styles";

///// Styled /////
const PageContainer = styled.div`
  width: ${Style.screen.L}px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto, auto;
  justify-items: center;
  text-transform: uppercase;
  font-size: ${Style.fontSize.XXL}px;
`;

// print(Style.screen["XL"]);

///// Components /////
const Navigation = () => {
  return (
    <PageContainer>
      <Link to="/">Home</Link>
      <Link to="/learn-redux">Learn Redux</Link>
      <Link to="/learn-search">Learn Search API</Link>
    </PageContainer>
  );
};

export default Navigation;
