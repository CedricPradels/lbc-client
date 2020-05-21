import React, { useState } from "react";

import styled from "styled-components";

import { ChevronLeft, ChevronRight } from "react-feather";

const StyledImgCarousel = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  background-color: silver;
`;

const Image = styled.img`
  width: 100%;
  object-fit: contain;
`;

const SideButton = styled.button<{ visible: boolean }>`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  height: 10%;
  width: 10%;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: #fff;
  cursor: pointer;
  display: ${({ visible }) => !visible && "none"};
`;

const LeftButton = styled(SideButton)`
  left: 0;
`;
const RightButton = styled(SideButton)`
  right: 0;
`;

const IndexWrapper = styled.div<{ visible: boolean }>`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  display: ${({ visible }) => !visible && "none"};
`;

const IndexDisplay = styled.div`
  height: 10px;
  width: 10px;
  margin: 3px;
  border-radius: 50%;
  background-color: ${({ active }: { active: boolean }) =>
    active ? "#F56B2A" : "#FFF"};
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
`;

interface Props {
  imgTab: string[];
}

const ImgCarousel: React.FC<Props> = ({ imgTab }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <StyledImgCarousel>
      <Image src={imgTab[currentIndex]} />
      <LeftButton
        visible={currentIndex > 0}
        onClick={() => {
          if (currentIndex <= 0) return;
          setCurrentIndex((i) => i - 1);
        }}
      >
        <ChevronLeft size="100%" />
      </LeftButton>
      <RightButton
        visible={currentIndex < imgTab.length - 1}
        onClick={() => {
          if (currentIndex >= imgTab.length - 1) return;
          setCurrentIndex((i) => i + 1);
        }}
      >
        <ChevronRight size="100%" />
      </RightButton>
      <IndexWrapper visible={imgTab.length > 1}>
        {imgTab.map((_, i) => (
          <IndexDisplay active={i === currentIndex} key={i} />
        ))}
      </IndexWrapper>
    </StyledImgCarousel>
  );
};

export default ImgCarousel;
