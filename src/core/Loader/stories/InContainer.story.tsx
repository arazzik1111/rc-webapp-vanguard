import React from "react";
import { within, expect } from "storybook/test";
import { Story, testIds } from "./_Loader.default";
import { Loader } from "../Loader";

export const InContainer: Story = {
  args: {
    loading: true,
    testId: testIds.loader,
  },
  render: (args) => (
    <div
      style={{
        height: "200px",
        width: "300px",
        border: "1px solid #ccc",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <div>Some content that is loading...</div>
      <Loader {...args} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loader = canvas.getByTestId(testIds.loader);
    await expect(loader).toBeInTheDocument();
  },
};