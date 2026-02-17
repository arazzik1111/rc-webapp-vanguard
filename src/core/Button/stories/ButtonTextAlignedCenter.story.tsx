import React from "react";
import { Button } from "../Button";
import { fn } from "storybook/test";
import { ButtonStory } from "./_Button.default";

// Tests full width button
export const ButtonTextAlignedCenter: ButtonStory = {
  args: {
    onClick: fn(),
    children: "text-align: center",
  },
  render: (props) => (
    <div style={{ outline: "dotted 2px blue", padding: "16px", textAlign: "center" }}>
      <Button {...props} />
    </div>
  )
};