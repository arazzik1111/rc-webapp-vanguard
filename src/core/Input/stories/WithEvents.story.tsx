import React from "react";
import { Input } from "../Input";
import { within, expect, userEvent } from "storybook/test";
import { Story, createMockOnChange, createMockOnFocus, createMockOnBlur } from "./_Input.default";

export const WithEvents: Story = {
  args: {
    onChange: createMockOnChange(),
    onFocus: createMockOnFocus(),
    onBlur: createMockOnBlur(),
    testId: "events-input",
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByTestId("events-input");

    // Test that input renders
    await expect(input).toBeInTheDocument();
  },
};