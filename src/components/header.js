import React from "react";
import styled from "styled-components";
import HomeButton from "../images/homeButton.svg";
import AboutButton from "../images/aboutMeButton.svg";
import ProjectButton from "../images/projectButton.svg";
import ContactButton from "../images/contactButton.svg";
import GithubButton from "../images/github.svg";
// import { Router, Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Toggle from "../components/Toggler";
// import { useDarkMode } from "../components/useDarkMode";
// import { lightTheme, darkTheme, oldTheme } from "../components/Themes";
// import { ThemeProvider } from "styled-components";
// import { GlobalStyles } from "../components/globalStyles";

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
  width: 95%;
  fill: currentColor;
`;

function Header() {
  return (
    <HeaderDiv>
      <SiteLinksDiv>
        <Link to="/">
          <img src={HomeButton} />
        </Link>
        <Link to="/about">
          <img src={AboutButton} />
        </Link>
        <Link to="projects">
          <img src={ProjectButton} />
        </Link>
        <Link to="/contact">
          <img src={ContactButton} />
        </Link>
      </SiteLinksDiv>
      <ExternalLinkDiv>
        <a href="https://github.com/jj-hall">
          <GitImg src={GithubButton} />
        </a>
      </ExternalLinkDiv>
    </HeaderDiv>
  );
}

export default Header;
