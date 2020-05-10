import React from "react";

import styled from "styled-components";

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Item = styled.li`
  display: flex;
  align-items: center;
`;
const IconWrapper = styled.div`
  width: 35px;
  height: 35px;
  color: #4183d7;
  margin-right: 30px;
`;
const TextWrapper = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
`;

const ListTitle = styled.h2`
  font-weight: bold;
`;
const Details = styled.p``;

const Title = styled.h2`
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  padding-bottom: 33px;
`;

interface Props {
  title: string;
  items: {
    icon: React.ReactNode;
    title: String;
    details: String;
  }[];
}

const IconList: React.FC<Props> = ({ items, title }) => {
  return (
    <StyledList>
      <Title>{title}</Title>
      {items.map(({ icon, title, details }, index) => (
        <Item key={`${index}`}>
          <IconWrapper>{icon}</IconWrapper>
          <TextWrapper>
            <ListTitle>{title}</ListTitle>
            <Details>{details}</Details>
          </TextWrapper>
        </Item>
      ))}
    </StyledList>
  );
};

export default IconList;
