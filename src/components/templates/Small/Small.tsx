import React from "react";

import styled from "styled-components";

const Main = styled.main`
  padding: 40px 40%;
  display: flex;
  flex-direction: column;
`;

interface Props {
  children: React.ReactNode;
}

const Small: React.FC<Props> = ({ children }) => {
  return <Main>{children}</Main>;
};

export default Small;
