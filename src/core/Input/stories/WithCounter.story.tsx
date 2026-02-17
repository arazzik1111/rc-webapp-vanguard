import React from "react";
import { Input } from "../Input";
import { within, expect } from "storybook/test";
import { Story, testValues } from "./_Input.default";

export const WithCounter: Story = {
  args: {
    value: testValues.text,
    counter: true,
    maxLength: 50,
    testId: "counter-input",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByTestId("counter-input");
    const counter = canvas.getByText(`${testValues.text.length}/50`);
    await expect(input).toBeInTheDocument();
    await expect(counter).toBeInTheDocument();
  },
};