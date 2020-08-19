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
  color: ;
`;

const SmallTextDiv = styled.h3`
  width: 50%;
  margin: auto;
  color: ;
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
