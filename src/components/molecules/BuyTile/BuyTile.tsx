import React from "react";

import styled from "styled-components";

import { useHistory } from "react-router-dom";

import { ShoppingCart } from "react-feather";
import Button from "../../atoms/Button";

const StyledBuyTile = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  align-self: start;
`;

const UserAlias = styled.h2`
  font-size: 23px;
  margin-bottom: 5px;
  color: #000;
`;

const OffersCount = styled.h3`
  font-size: 19px;
  color: #4183d7;
`;

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  &:first {
    border-bottom: 1px #e6ebef solid;
  }
`;

interface Props {
  userOffersCount: number;
  userAlias: string;
  offerId: string;
}

const BuyTile: React.FC<Props> = ({ userOffersCount, userAlias, offerId }) => {
  const history = useHistory();
  return (
    <StyledBuyTile>
      <Wrapper>
        <UserAlias>{userAlias}</UserAlias>
        <OffersCount>{userOffersCount} annonces en ligne</OffersCount>
      </Wrapper>
      <Wrapper>
        <Button onClick={() => history.push(`/offer/${offerId}/buy`)}>
          <ShoppingCart /> Acheter
        </Button>
      </Wrapper>
    </StyledBuyTile>
  );
};

export default BuyTile;
