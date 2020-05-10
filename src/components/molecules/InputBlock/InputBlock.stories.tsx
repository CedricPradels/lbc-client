import React from "react";
import InputBlock from "../InputBlock";
import { action } from "@storybook/addon-actions";

// export default

export default {
  title: "Input Block",
  component: InputBlock,
};

export const text = () => (
  <InputBlock
    title="Text"
    type="text"
    value="text"
    onChange={action("Change")}
  />
);

export const password = () => (
  <InputBlock
    title="Password"
    type="password"
    value="password"
    onChange={action("Change")}
  />
);

export const number = () => (
  <InputBlock
    title="Number"
    type="number"
    value="number"
    onChange={action("Change")}
  />
);

export const email = () => (
  <InputBlock
    title="Email"
    type="email"
    value="email"
    onChange={action("Change")}
  />
);

export const textArea = () => (
  <InputBlock
    title="Text Area"
    type="textarea"
    value="textarea"
    onChange={action("Change")}
  />
);
