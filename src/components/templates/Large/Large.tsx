import React from "react";

import styled from "styled-components";

const Main = styled.main`
  padding: 20px 20%;
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const OnTop = styled.div`
  padding: 0;
  margin: 0;
`;

interface Props {
  onTop?: React.ReactNode;
  children: React.ReactNode;
}

const Large: React.FC<Props> = ({ onTop = "", children }) => {
  return (
    <>
      <OnTop>{onTop}</OnTop>
      <Main>{children}</Main>
    </>
  );
};

export default Large;
