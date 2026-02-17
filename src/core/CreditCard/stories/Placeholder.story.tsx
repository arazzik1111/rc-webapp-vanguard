import React from "react";
import { within, expect } from "storybook/test";
import { Story, testTypes, testIds } from "./_CreditCard.default";

export const Placeholder: Story = {
  args: {
    type: testTypes.placeholder,
    disabled: false,
    small: false,
    
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const container = canvas.getByTestId(testIds.creditCard);
    await expect(container).toBeInTheDocument();
  },
};