import React from "react";
import styled from "styled-components";

const ErrorStyled = styled.p`
  color: rgb(255, 108, 108);
  font-size: 14px;
  padding-left: 2px;
  padding-top: 10px;
`;

const Error = ({ message }) => <ErrorStyled>{message}</ErrorStyled>;

export default Error;
