import React from "react";

import OfferDetails from "../OfferDetails";

export default {
  title: "OfferDetails",
  components: OfferDetails,
};

const dataSet = {
  imgTab: [
    "https://i.picsum.photos/id/267/300/200.jpg",
    "https://i.picsum.photos/id/265/200/300.jpg",
    "https://i.picsum.photos/id/269/200/200.jpg",
  ],
  title: "Cuillère",
  price: 15,
  date: Date.now().toString(),
  description: "Une belle cuillère en bois",
};

export const classic = () => <OfferDetails {...dataSet} />;
