import React from "react";
import styled from "styled-components";

const AboutDiv = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const AboutContent = styled.div`
  width: 50%;
  margin: auto;
`;

const TitleText = styled.h1`
  color: ;
`;

const InfoText = styled.p`
  color: ;
`;

function About() {
  return (
    <AboutDiv>
      <AboutContent>
        <TitleText>ABOUT</TitleText>
        <InfoText>
          I'm Josh, a Teacher with a growing passion for Web Development.
        </InfoText>
        <InfoText>I live in St.Louis, Missouri.</InfoText>
        <InfoText>
          I started programming during the winter of 2018. I started by watching
          videos and trying to gain a decent understanding of JavaScript and
          React.
        </InfoText>
        <InfoText>
          I have a strong passion for learning web development. I look forward
          to any potential paths this career may take me on.
        </InfoText>
        <TitleText>Skills</TitleText>
        <InfoText>Still under counstruction.</InfoText>
      </AboutContent>
    </AboutDiv>
  );
}

export default About;
