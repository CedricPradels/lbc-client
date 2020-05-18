import React from "react";

import styled from "styled-components";

import Image from "../../atoms/Image";

const StyledOfferTile = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr;
  /* height: 180px; */
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
`;

const InformationsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px 30px;
  font-family: "Roboto", sans-serif;
  background-color: #fff;
`;

const Title = styled.h2`
  font-size: 22px;
  margin-bottom: 7px;
`;

const Price = styled.p`
  color: #f56b2a;
  font-size: 20px;
`;

const Date = styled.p`
  font-size: 16px;
`;

interface Props {
  title: string;
  price: number;
  date: string;
  pictures: string[];
}

const OfferTile: React.FC<Props> = ({ title, price, date, pictures }) => {
  return (
    <StyledOfferTile>
      <Image src={pictures[0]} />
      <InformationsWrapper>
        <div>
          <Title>{title}</Title>
          <Price>{price} €</Price>
        </div>
        <Date>{date}</Date>
      </InformationsWrapper>
    </StyledOfferTile>
  );
};

export default OfferTile;
