import React, { useState } from "react";

import styled from "styled-components";

import Button from "../../atoms/Button";

import { Search as Lens } from "react-feather";

const StyledSearch = styled.div`
  box-sizing: border-box;
  padding: 15px 20%;
  background: radial-gradient(
    ellipse 75% 50% at top,
    #f56b2a 90%,
    transparent 50%
  );
`;

const Text = styled.span`
  display: flex;
  align-items: center;
`;

const FieldIcon = styled.div`
  background-color: silver;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 10px;
`;

const SearchWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr) 3fr;
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 20px;
  background: #ffffff;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
  padding: 20px 10%;
  border-radius: 5px;
`;

const InputField = styled.input`
  display: flex;
  flex: 1;
  border: none;
  margin: none;
  background-color: silver;
  box-sizing: border-box;
  height: 100%;
  padding: 0 10px;
`;

const InputPrice = styled(InputField).attrs(() => ({
  type: "number",
  min: 0,
}))``;

const InputSort = styled.select`
  height: 100%;
  width: 100%;
  background: silver;
  border: none;
`;

const sortTypes = [
  { value: "priceAsc", placeholder: "Prix ascendant" },
  { value: "priceDesc", placeholder: "Prix descendant" },
  { value: "dateAsc", placeholder: "Date ascendante" },
  { value: "dateAsc", placeholder: "Date descendante" },
];

const InputSearchWrapper = styled.span`
  grid-column: span 4;
  display: flex;
  align-items: center;
`;

interface Props {
  onSearch: (e: any) => void;
  loading?: boolean;
}

const Search: React.FC<Props> = ({ onSearch, loading }) => {
  const [search, setSearch] = useState("");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [sort, setSort] = useState("priceAsc");

  return (
    <StyledSearch>
      <SearchWrapper>
        <InputSearchWrapper>
          <FieldIcon>
            <Lens />
          </FieldIcon>
          <InputField
            placeholder="Que recherchez-vous ?"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </InputSearchWrapper>
        <Button
          loading={loading}
          onClick={() => {
            onSearch({
              search: search || undefined,
              priceMin: priceMin || undefined,
              priceMax: priceMax || undefined,
              sortTypes: sort,
              page: 1,
              limit: 3,
            });
          }}
        >
          Rechercher
        </Button>
        <Text>Prix entre</Text>
        <InputPrice
          placeholder="prix min"
          value={priceMin}
          onChange={(e) => setPriceMin(e.target.value)}
        />
        <Text>et</Text>
        <InputPrice
          placeholder="prix max"
          value={priceMax}
          onChange={(e) => setPriceMax(e.target.value)}
        />
        <div>
          <InputSort onChange={(e) => setSort(e.target.value)}>
            {sortTypes.map(({ value, placeholder }) => (
              <option key={placeholder} value={value}>
                {placeholder}
              </option>
            ))}
          </InputSort>
        </div>
      </SearchWrapper>
    </StyledSearch>
  );
};

export default Search;
