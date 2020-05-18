import React from "react";

import Search from "../Search";

export default {
  title: "Search",
  component: Search,
};

export const classic = () => (
  <Search loading={false} onSearch={(e) => console.log(e)} />
);
