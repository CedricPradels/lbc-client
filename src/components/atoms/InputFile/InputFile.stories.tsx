import React from "react";

import InputFile from "../InputFile";
import { action } from "@storybook/addon-actions";

export default {
  title: "Input File",
  component: InputFile,
};

export const classic = () => (
  <InputFile ref={null} onChange={action("coucou")} />
);
