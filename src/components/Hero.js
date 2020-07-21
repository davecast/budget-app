import React from "react";
import styled from "styled-components";

import HeroImage from "../assets/img/home.png";

/*LAYOUTS*/
import Wrapper from "../layouts/Wrapper";

/*COMPONENTS*/
import Question from "./Question";

const HeroStyled = styled.section`
  padding: 35px 0 0;
`;
const HeroTitle = styled.h2`
  font-size: 58px;
  line-height: 73px;
  color: var(--black);
  margin-bottom: 20px;
  font-family: 'PT Sans', sans-serif;
`;
const HeroText = styled.p`
  color: var(--grey);
  font-size: 18px;
`;
const HeroImg = styled.img`
  max-width: 100%;
`;

const Grid = styled.div`
  display: grid;
  grid-template: 1fr / repeat(12, 1fr);
  grid-template-areas: "left left left left left left left right right right right right";
  grid-gap: 30px;
`;
const GridLeft = styled.div`
  grid-area: left;
`;
const GridRight = styled.div`
  grid-area: right;
  align-self: center;
`;

const Hero = ({setHero, setBudget, setRemaining}) => {
  //Definir el state
  

  return (
    <HeroStyled>
      <Wrapper>
        <Grid>
          <GridLeft>
            <HeroTitle>Simplifica el manejo<br /> de tu dinero</HeroTitle>
            <HeroText>
              Administra tus gastos de forma sencilla.
            </HeroText>
            <HeroImg src={HeroImage} alt="Budget explain image" />
          </GridLeft>
          <GridRight>
            <Question setBudget={setBudget} setRemaining={setRemaining} setHero={setHero} />
          </GridRight>
        </Grid>
      </Wrapper>
    </HeroStyled>
  );
};

export default Hero;
