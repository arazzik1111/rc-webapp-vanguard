import React from "react";
import { within, expect } from "storybook/test";
import { Story, testTypes, testIds } from "./_CreditCard.default";

export const Small: Story = {
  args: {
    type: testTypes.visa,
    disabled: false,
    small: true,
    
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const container = canvas.getByTestId(testIds.creditCard);
    await expect(container).toBeInTheDocument();
  },
};