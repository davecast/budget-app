import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 1200px;
`;

const Wrapper = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Wrapper;
