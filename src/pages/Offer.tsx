import React from "react";

import { useParams } from "react-router-dom";

import styled from "styled-components";

import Large from "../components/templates/Large";

import OfferDetails from "../components/molecules/OfferDetails";
import BuyTile from "../components/molecules/BuyTile";
import Loading from "../components/atoms/Loading";

import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const GET_OFFER = gql`
  query GetOffer($id: ID) {
    offer(id: $id) {
      title
      date
      pictures
      price
      dealer {
        alias
        offersCount
      }
      description
    }
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 20px;
  height: 100%;
`;

const Offer: React.FC = () => {
  const { id } = useParams();

  const { data, loading } = useQuery(GET_OFFER, { variables: { id } });

  return (
    <Large>
      {loading ? (
        <Loading />
      ) : (
        <Wrapper>
          <OfferDetails
            title={data.offer.title}
            price={data.offer.price}
            description={data.offer.description}
            imgTab={data.offer.pictures}
            date={data.offer.date}
          />
          <BuyTile
            userAlias={data.offer.dealer.alias}
            userOffersCount={data.offer.dealer.offersCount}
            offerId={id}
          />
        </Wrapper>
      )}
    </Large>
  );
};

export default Offer;
