import React from "react";
import { Form } from "@vanguard/Form/Form";
import { within, expect } from "storybook/test";
import { Story } from "./_Form.default";

export const WithClassName: Story = {
  args: {
    className: "custom-form-class",
    children: <div data-testid="form-content">Form content</div>,
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Verify the custom class is applied
    const formContainer = canvas.getByTestId("form-content").parentElement;
    await expect(formContainer).toHaveClass("Form-container");
    await expect(formContainer).toHaveClass("custom-form-class");

    // Verify children are rendered
    await expect(canvas.getByTestId("form-content")).toBeInTheDocument();
  },
};