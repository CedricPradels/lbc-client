import React, { useState, useEffect } from "react";

import styled from "styled-components";

import { ChevronsLeft, ChevronsRight } from "react-feather";

const StyledPaginate = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Roboto" sans-serif;
`;

const Button = styled.button`
  height: 30px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  border: none;
  background: transparent;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }
`;

const PageButton = styled(Button)`
  margin: 0 5px;
  &:disabled {
    background: #f56b2a;
    color: #fff;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
  }
`;

const LimitButton = styled(Button)`
  &:disabled {
    display: none;
  }
`;

interface Props {
  limit: number;
  page: number;
  count: number;
  onPageChange: (e: number) => void;
}

const computePageMax = (count: number, limit: number): number =>
  Math.ceil(count / limit);

const computeRange = (
  activePage: number,
  limit: number,
  count: number
): number[] => {
  const range: number = 2;
  const pageMin: number = 1;
  const pageMax: number = computePageMax(count, limit);
  const rangeMin: number =
    activePage - range < pageMin ? pageMin : activePage - range;
  const rangeMax: number =
    activePage + range > pageMax ? pageMax : activePage + range;
  const pagesTab: number[] = [];

  for (let i = rangeMin; i <= rangeMax; i++) {
    pagesTab.push(i);
  }
  return pagesTab;
};

const Paginate: React.FC<Props> = ({ page, limit, count, onPageChange }) => {
  const [activePage, setActivePage] = useState(page);
  const [pagesRange, setPagesRange] = useState(
    computeRange(activePage, limit, count)
  );

  useEffect(() => {
    setPagesRange(computeRange(activePage, limit, count));
  }, [activePage]);

  console.log("Active page:", activePage);
  console.log("Page Range:", pagesRange);

  return (
    <StyledPaginate>
      <LimitButton
        onClick={() => {
          setActivePage(1);
          onPageChange(1);
        }}
        disabled={activePage === 1}
      >
        <ChevronsLeft />
      </LimitButton>
      {pagesRange.map((page) => (
        <PageButton
          key={page}
          onClick={() => {
            console.log("on click page:", page);
            onPageChange(page);
            setActivePage(page);
          }}
          disabled={page === activePage}
        >
          {page}
        </PageButton>
      ))}
      <LimitButton
        onClick={() => {
          setActivePage(computePageMax(count, limit));
          onPageChange(computePageMax(count, limit));
        }}
        disabled={activePage === computePageMax(count, limit)}
      >
        <ChevronsRight />
      </LimitButton>
    </StyledPaginate>
  );
};

export default Paginate;
