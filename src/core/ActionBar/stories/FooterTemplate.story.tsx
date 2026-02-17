import React from "react";
import { within, expect } from "storybook/test";
import { Story, selectors } from "./_ActionBar.default";

export const FooterTemplate: Story = {
  args: {
    show: true,
    templateProps: {
      template: "footer",
      buttons: [
        { text: "Left content", onClick: () => {} },
        { text: "Right content", onClick: () => {} },
      ],
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const container = canvas.getByTestId(selectors.container);
    await expect(container).toBeInTheDocument();
  },
};