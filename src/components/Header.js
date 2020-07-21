import React from "react";
import styled from "styled-components";

//LAYOUTS
import Wrapper from "../layouts/Wrapper";

const HeaderStyled = styled.header``;
const HeaderContent = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: content-box;
  padding: 50px 0;
`;
const Logo = styled.h1`
  font-family: "PT Sans", sans-serif;
  font-size: 26px;
  line-height: 26px;
`;
const Nav = styled.nav``
const Menu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  li  {
    color: var(--black);
    a {
      font-weight: bold;
      text-decoration: none;
      color: var(--orange);
      :hover {
        color: var(--grey);
      }
    }
  }
`
const Header = () => {
  return (
    <HeaderStyled>
      <Wrapper>
        <HeaderContent>
          <Logo>Budget.</Logo>
          <Nav>
            <Menu>
              <li>
                Power by <a href="https://davecastworks.com" target="_blank" rel="noopener noreferrer">Davecast</a>
              </li>
            </Menu>
          </Nav>
        </HeaderContent>
      </Wrapper>
    </HeaderStyled>
  );
};

export default Header;
