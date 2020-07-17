import React from 'react';
import styled from "styled-components";

//LAYOUTS
import Wrapper from "../layouts/Wrapper";


const HeaderStyled = styled.header`

`
const HeaderContent = styled.header`

`

const Header = () => {
  return (
    <HeaderStyled>
      <Wrapper>
        <HeaderContent>
          <h1> Presupuesto</h1>
        </HeaderContent>
      </Wrapper>
    </HeaderStyled>
  );
}
 
export default Header;