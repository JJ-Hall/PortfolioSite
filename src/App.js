import React from "react";
import "./App.css";
import styled from "styled-components";
import Header from "./components/header";
import Intro from "./components/intro";
import About from "./components/about";
import Projects from "./components/projects";
import Background from "./images/izuddin-h-bg.jpg";
import Contact from "./components/contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Toggle from "./components/Toggler";
import { useDarkMode } from "./components/useDarkMode";
import { lightTheme, darkTheme } from "./components/Themes";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/globalStyles";

const ContainerDiv = styled.div`
  width: 100vw;
`;

const ImgDiv = styled.img`
  margin: 0px;
  width: 100%;
  height: 100%;
  // object-fit: cover;
  position: fixed;
  opacity: 0.6;
  z-index: -1;
`;

const ButtonDiv = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  justify-content: flex-end;
  display: flex;
`;

function App() {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!mountedComponent) return <div />;
  return (
    <Router>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <ContainerDiv>
          <ImgDiv src={Background} />
          <ButtonDiv>
            <Toggle theme={theme} toggleTheme={themeToggler} />
          </ButtonDiv>
          <Header />
          <Switch>
            <Route path="/" component={Intro} exact />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </ContainerDiv>
      </ThemeProvider>
    </Router>
  );
}

export default App;
