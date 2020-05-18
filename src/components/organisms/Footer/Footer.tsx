import React from "react";

import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #474747;
  height: 40px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface Props {}

const Footer: React.FC<Props> = ({ children }) => {
  return (
    <StyledFooter>Copie de LeBonCoin codée par Cédric Pradels</StyledFooter>
  );
};

export default Footer;
