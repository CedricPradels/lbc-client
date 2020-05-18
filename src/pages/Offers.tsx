import React, { useEffect, useState } from "react";

import styled from "styled-components";

import OfferTile from "../components/molecules/OfferTile";

import Large from "../components/templates/Large";

import Search from "../components/molecules/Search";
import Paginate from "../components/molecules/Paginate";

import { useLazyQuery } from "@apollo/react-hooks";
import { GET_OFFERS } from "../graphql/query";

const ResultsWrapper = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 125px);
  grid-gap: 15px;
  margin-bottom: 15px;
`;

interface Offer {
  id: string;
  title: string;
  pictures: string[];
  date: string;
  price: number;
}

const Offers: React.FC = () => {
  const [queryVars, setQueryVars] = useState({
    search: undefined,
    priceMin: undefined,
    priceMax: undefined,
    sortTypes: "dateAsc",
    page: 1,
    limit: 3,
  });
  const [fetchOffers, { data, loading }] = useLazyQuery(GET_OFFERS);

  useEffect(() => {
    fetchOffers({ variables: queryVars });
  }, [queryVars]);

  return (
    <Large
      onTop={
        <Search
          loading={loading}
          onSearch={(e) => {
            setQueryVars(e);
          }}
        />
      }
    >
      {!data ? (
        <div>Loading</div>
      ) : (
        <div>
          <ResultsWrapper>
            {data.offers.result.map(({ id, ...rest }: Offer) => (
              <OfferTile key={id} {...rest} />
            ))}
          </ResultsWrapper>
          <Paginate
            limit={3}
            page={queryVars.page}
            count={data.offers.count}
            onPageChange={(e) => {
              setQueryVars((x) => ({ ...x, page: e }));
            }}
          />
        </div>
      )}
    </Large>
  );
};

export default Offers;
