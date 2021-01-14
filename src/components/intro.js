import React from "react";
import styled from "styled-components";

const IntroDiv = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ContentDiv = styled.div``;

const TextDiv = styled.h1`
  width: 50%;
  margin: auto;
  color: #67eaca;
  font-size: 4rem;
  @media (max-width: 700px) {
    font-size: 2.5rem;
  }
  @media (max-width: 466px) {
    font-size: 2rem;
  }
`;

const SmallTextDiv = styled.h3`
  width: 50%;
  margin: auto;
  font-size: 3rem;
  @media (max-width: 700px) {
    font-size: 2rem;
  }
  @media (max-width: 466px) {
    font-size: 1.6rem;
  }
`;

function Intro() {
  return (
    <IntroDiv>
      <ContentDiv>
        <TextDiv>Hi.</TextDiv>
        <TextDiv>I'm Josh</TextDiv>
        <SmallTextDiv class="test">A Web Developer</SmallTextDiv>
        <SmallTextDiv>From St. Louis, Missouri</SmallTextDiv>
      </ContentDiv>
    </IntroDiv>
  );
}

export default Intro;
