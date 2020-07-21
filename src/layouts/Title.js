import React from "react";
import styled from "styled-components";

const TitleStyled = styled.h3`
  font-size: 24px;
  line-height: 24px;
  margin-bottom: 30px;
  color: var(--black);
  font-family: "PT Sans", sans-serif;
`;

const Title = ({ children }) => <TitleStyled>{children}</TitleStyled>;

export default Title;
