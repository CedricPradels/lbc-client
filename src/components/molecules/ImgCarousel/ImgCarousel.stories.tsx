import React from "react";

import ImgCarousel from "../ImgCarousel";

export default {
  title: "ImgCarousel",
  component: ImgCarousel,
};

const dataSet1 = {
  imgTab: [
    "https://i.picsum.photos/id/267/300/200.jpg",
    "https://i.picsum.photos/id/265/200/300.jpg",
    "https://i.picsum.photos/id/269/200/200.jpg",
  ],
};

const dataSet2 = {
  imgTab: ["https://i.picsum.photos/id/267/300/200.jpg"],
};

const dataSet3 = {
  imgTab: [],
};
export const multipleImages = () => <ImgCarousel {...dataSet1} />;
export const monoImage = () => <ImgCarousel {...dataSet2} />;
export const noImage = () => <ImgCarousel {...dataSet3} />;
