import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;

  // background-color: rgba(173, 25, 25, 0.2);
`;

const ProjectInfo = styled.div`
  color: ${(props) => props.color || "black"};
  font-size: 20px;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  opacity: 1;
  transition: 0.5s ease;
  border-radius: 15px;
`;

const ProjectContainer = styled.div`
  position: relative;
  width: 60%;
  height: 300px;
  max-width: 350px;
  border-radius: 15px;
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.3);
  margin: 30px;
  background-color: ${(props) => props.backgroundColor || "rgb(58, 231, 64)"};
  &:hover ${Img} {
    opacity: 0.3;
  }
  &:hover ${Overlay} {
    opacity: 1;
  }
`;
// const { backgroundColor } = props;
// const TitleDiv = styled.div;
// const InfoDiv = styled.div;

function ProjectCard(props) {
  return (
    <ProjectContainer backgroundColor={props.backgroundColor}>
      <a href={props.href}>
        <Img src={props.src} alt={props.alt} />
        <Overlay>
          <ProjectInfo color={props.color}>
            <h1>{props.title}</h1>
            <p>{props.info}</p>
          </ProjectInfo>
        </Overlay>
      </a>
    </ProjectContainer>
  );
}

export default ProjectCard;
