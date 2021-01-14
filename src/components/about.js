import React from "react";
import styled from "styled-components";

const AboutDiv = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const AboutContent = styled.div`
  width: 40%;
  margin: auto;
  @media (max-width: 1000px) {
    width: 70%;
    margin: auto;
  }
  @media (max-width: 470px) {
    margin-left: 70px;
  }
`;

const TitleText = styled.h1`
  font-size: 2.5rem;
  color: #67eaca;
  @media (max-width: 700px) {
    font-size: 2rem;
  }
`;

const InfoText = styled.p`
  font-size: 2.5rem;
  @media (max-width: 700px) {
    font-size: 2rem;
  }
`;

function About() {
  return (
    <AboutDiv>
      <AboutContent>
        <TitleText>ABOUT</TitleText>
        <InfoText>
          I'm Josh, a teacher with a growing passion for Web Development from St. Louis, Missouri. I am currently interested in finding employment
          in software and web development. I am looking forward to any potential paths this career may take me on.
        </InfoText>
        <TitleText>Skills</TitleText>
        <InfoText>As of now, I have experience with Java Script, HTML, CSS, and React JS.</InfoText>
      </AboutContent>
    </AboutDiv>
  );
}

export default About;
