import React from "react";
import { Button } from "../Button";
import { fn } from "storybook/test";
import { ButtonStory } from "./_Button.default";

// Tests full width button
export const ButtonW100: ButtonStory = {
  args: {
    onClick: fn(),
    w100: true,
    children: "Button spans full width!"
  },
};