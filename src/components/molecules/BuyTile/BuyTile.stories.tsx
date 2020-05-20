import React from "react";

import BuyTile from "../BuyTile";

import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "BuyTile",
  component: BuyTile,
};

const dataSet = {
  userAlias: "Ced",
  offerId: "1234567890",
  userOffersCount: 15,
};

export const classic = () => (
  <Router>
    <BuyTile {...dataSet} />
  </Router>
);
