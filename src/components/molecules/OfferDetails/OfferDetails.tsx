import React from "react";

import styled from "styled-components";

import ImgCaroussel from "../ImgCarousel";

const StyledOfferDetails = styled.div`
  font-family: "Roboto", sans-serif;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

const TextWrapper = styled.div`
  padding: 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
`;

const Title = styled.h2`
  font-size: 26px;
  margin-bottom: 11px;
`;

const Price = styled.div`
  color: #f56b2a;
  font-size: 20px;
  margin-bottom: 17px;
`;

const Description = styled.p`
  font-size: 19px;
`;

const Date = styled.div`
  font-size: 16px;
`;

interface Props {
  price: number;
  description: string;
  title: string;
  date: string;
  imgTab: string[];
}

const OfferDetails: React.FC<Props> = ({
  imgTab,
  price,
  description,
  title,
  date,
}) => {
  return (
    <StyledOfferDetails>
      <ImgCaroussel imgTab={imgTab} />

      <TextWrapper>
        <div>
          <Title>{title}</Title>
          <Price>{price} €</Price>
          <Description>{description}</Description>
        </div>
        <Date>{date}</Date>
      </TextWrapper>
    </StyledOfferDetails>
  );
};

export default OfferDetails;
