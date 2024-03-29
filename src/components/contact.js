import React from "react";
import styled from "styled-components";
import Resume from "../images/Josh_Hall_Resume.pdf"

const ContactDiv = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

const Body = styled.div`
  height: 60%;
  margin: auto;
  justify-content: center;
`;

const TextDiv = styled.h1`
  width: 60%;
  margin: auto;
  text-align: center;
  font-size: 3.5rem;
  @media (max-width: 806px) {
    font-size: 2rem;
  }
`;

const ContactForms = styled.div`
  width: 40%;
  margin: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 38px;
`;

const ContactText = styled.a`
  font-size: 3.5rem;
  padding: 10px 0;
  text-decoration: none;
  color: #67eaca;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 806px) {
    font-size: 2rem;
  }
`;

function ContactForm() {
  return (
    <ContactDiv>
      <Body>
        <TextDiv>
          Please Feel Free To Contact Me With Any Questions Or Job Opportunities
        </TextDiv>
        <ContactForms>
          <ContactText href="mailto:joshhall1991@gmail.com" target="_blank">
            Send an Email
          </ContactText>

          <ContactText href="https://www.linkedin.com/in/josh-hall-657a881b4/" target="_blank">
            Connect on LinkedIn
          </ContactText>

          <ContactText href={Resume} target="_blank">Resume</ContactText>
        </ContactForms>
      </Body>
    </ContactDiv>
  );
}

export default ContactForm;
