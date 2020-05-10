import React from "react";

import Form from "../Form";
import { action } from "@storybook/addon-actions";

import InputBlock from "../InputBlock";

export default {
  title: "Form",
  component: Form,
};

export const classic = () => (
  <Form title="Just a form" onSubmit={action("Submited")} button="Submit">
    <InputBlock
      title="Field"
      value="field"
      type="text"
      onChange={action("Keyboard input")}
    />
    <InputBlock
      title="Field"
      value="field"
      type="text"
      onChange={action("Keyboard input")}
    />
  </Form>
);
