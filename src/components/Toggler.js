import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";

const Button = styled.button`
  background: rgba(255, 255, 255, 0);
//   ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 10px;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  font-size:.7rem;
  font-weight: 8px;
  padding: 0.2rem;
  }
`;

const Toggle = ({ theme, toggleTheme }) => {
  return <Button onClick={toggleTheme}>Switch Theme</Button>;
};
Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};
export default Toggle;
