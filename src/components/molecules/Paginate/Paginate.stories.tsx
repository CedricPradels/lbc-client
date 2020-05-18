import React from "react";

import Paginate from "../Paginate";
import { action } from "@storybook/addon-actions";

export default {
  title: "Paginage",
  component: Paginate,
};

const props = {
  count: 25,
  limit: 5,
  page: 1,
};
export const classic = () => (
  <Paginate {...props} onPageChange={action("test")} />
);
