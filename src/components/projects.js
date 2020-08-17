import React from "react";
import styled from "styled-components";
import ProjectCard from "./projectCard";
import FakeImg from "../images/fakeImg.jpg";
import TravelSiteImg from "../images/Travelsite.JPG";

const ProjectDiv = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const ProjectsLayout = styled.div`
  text-align: center;
`;

const ProjectsTitle = styled.h1``;

const ProjectsTextDiv = styled.div`
  margin: 80px;
`;

const ProjectCardDiv = styled.div`
  display: flex;
  // margin: auto;
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
            href="https://infallible-wiles-01b8f6.netlify.app/"
            src={TravelSiteImg}
            alt="Trainer training young client to curl at Powerbody USA"
            title="Basic Travel Site"
            info="Travel themed website. Made using Gatsby."
          />
          <ProjectCard
            backgroundColor="rgb(255, 255, 255, .5)"
            color="rgb(58, 139, 231, 1)"
            src={TravelSiteImg}
            alt="Trainer training young client to curl at Powerbody USA"
            title="Variety"
            info="Place info about project here"
          />
          <ProjectCard
            backgroundColor="rgb(58, 139, 231, .5)"
            src={TravelSiteImg}
            alt="Trainer training young client to curl at Powerbody USA"
            title="Variety"
            info="Place info about project here"
          />
        </ProjectCardDiv>
      </ProjectsLayout>
    </ProjectDiv>
  );
}

export default Projects;
