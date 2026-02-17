import React from "react";
import { within, expect } from "storybook/test";
import { Story } from "./_GlobalStateComponent.default";
import { GlobalStateComponent } from "../GlobalStateComponent";

export const Default: Story = {
  render: () => <GlobalStateComponent />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const text = canvas.getByText("GlobalStateComponent");
    await expect(text).toBeInTheDocument();
  },
};