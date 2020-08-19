import React from "react";
import styled from "styled-components";
import HomeButton from "../images/homeButton.svg";
import AboutButton from "../images/aboutMeButton.svg";
import ProjectButton from "../images/projectButton.svg";
import ContactButton from "../images/contactButton.svg";
import GithubButton from "../images/github.svg";
import { BrowserRouter as Router, Link } from "react-router-dom";

const HeaderDiv = styled.div`
  // border: solid;
  display: flex;
  justify-content: center;
  width: 3vw;
  height: 100vh;
  position: fixed;
  // background: rgba(175, 175, 175, 0.3);
`;

const SiteLinksDiv = styled.div`
  justify-content: space-evenly;
  display: flex;
  flex-direction: column;
  height: 80%;
`;

const ExternalLinkDiv = styled.div`
  display: flex;
  // height: 1%;
  justify-content: center;
  position: absolute;
  right: 0;
  bottom: 3%;
  color: red;
`;

const GitImg = styled.img`
  width: 56px;
  fill: currentColor;
`;

function Header() {
  return (
    <HeaderDiv>
      <SiteLinksDiv>
        <Link to="/PortfolioSite/">
          <img src={HomeButton} alt="Home button" />
        </Link>
        <Link to="/PortfolioSite/about">
          <img src={AboutButton} alt="About button" />
        </Link>
        <Link to="/PortfolioSite/projects">
          <img src={ProjectButton} alt="Projects button" />
        </Link>
        <Link to="/PortfolioSite/contact">
          <img src={ContactButton} alt="Contact button" />
        </Link>
      </SiteLinksDiv>
      <ExternalLinkDiv>
        <a href="https://github.com/jj-hall">
          <GitImg src={GithubButton} alt="Github button" />
        </a>
      </ExternalLinkDiv>
    </HeaderDiv>
  );
}

export default Header;
