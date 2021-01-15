import React from "react";
import styled from "styled-components";
import ProjectCard from "./projectCard";
import TravelSiteImg from "../images/Travelsite.JPG";
import PowerBodyImg from "../images/PowerBody.JPG";
import VetSiteImg from "../images/VetSite.jpg";
import CalculatorImg from "../images/calculator.jpg";
import HoroScopeImg from "../images/HoroScopeSite.jpg";

const ProjectDiv = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  @media (min-width: 1226px) and (max-width: 1340px) {
    margin-left: 3%;
  }
  @media (min-width: 820px) and (max-width: 938px) {
    margin-left: 3%;
  }
  @media (max-width: 360px) {
    margin-left: 3%;
  }
`;

const ProjectsLayout = styled.div`
  text-align: center;
`;

const ProjectsTitle = styled.h1`
font-size: 4rem;
color: #67eaca;
@media (max-width: 600px) {
  font-size: 2.5rem;
}
`;

const ProjectsTextDiv = styled.div`
  margin: 80px;
  @media (max-width: 600px) {
    margin-bottom: 0px;
  }
`;

const ProjectCardDiv = styled.div`
  display: flex;
  flex-wrap:wrap;
  justify-content: space-evenly;

`;

function Projects() {
  return (
    <ProjectDiv>
      <ProjectsLayout>
        <ProjectsTextDiv>
          <ProjectsTitle>Projects</ProjectsTitle>
        </ProjectsTextDiv>
        <ProjectCardDiv>
          <ProjectCard
            backgroundColor="rgba(184, 35, 35, .5)"
            color="white"
            href="https://test.zachhall.me/"
            src={PowerBodyImg}
            alt="Local Gym Website"
            title="Local Gym Website"
            info="Redesigned Local Gym Website"
          />
          <ProjectCard
            backgroundColor="#67eaca;
            "
            color="white"
            href="https://5ffe75ad255f010007a46e26--relaxed-euclid-6b7377.netlify.app/"
            src={VetSiteImg}
            alt="Local Vet Website"
            title="Local Vet Website"
            info="Custom Vet Website made with React JS"
          />

          <ProjectCard
            backgroundColor="rgba(66,24,138, .8);
            "
            color="white"
            href="https://nervous-lewin-e3d8f7.netlify.app/"
            src={HoroScopeImg}
            alt="Horoscope Website"
            title="Horoscope Website"
            info="Horoscope Website made with HTML, CSS, and JS"
          />

          <ProjectCard
            backgroundColor="rgba(58, 139, 231, 1);"
            color="white"
            href="https://goofy-booth-be878d.netlify.app/"
            src={CalculatorImg}
            alt="Calculator"
            title="Calculator"
            info="Basic Calculator made with HTML, CSS, and JS"
          />
          <ProjectCard
            backgroundColor="rgb(255, 255, 255, 1)"
            color="rgb(58, 139, 231, 1)"
            href="https://infallible-wiles-01b8f6.netlify.app/"
            src={TravelSiteImg}
            alt="Basic Travel Site"
            title="Basic Travel Site"
            info="Travel themed website. Made using Gatsby."
          />
        </ProjectCardDiv>
      </ProjectsLayout>
    </ProjectDiv>
  );
}

export default Projects;
