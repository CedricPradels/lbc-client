import React from "react";

import styled from "styled-components";

import ImgCaroussel from "../ImgCarousel";

const StyledOfferDetails = styled.div`
  font-family: "Roboto", sans-serif;
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
`;

const Price = styled.div`
  color: #f56b2a;
  font-size: 20px;
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
        <Title>{title}</Title>
        <Price>{price}</Price>
        <Description>{description}</Description>
        <Date>{date}</Date>
      </TextWrapper>
    </StyledOfferDetails>
  );
};

export default OfferDetails;
