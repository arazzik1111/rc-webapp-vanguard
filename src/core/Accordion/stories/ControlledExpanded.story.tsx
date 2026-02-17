import { within, expect } from "storybook/test";
import { Story, defaultProps, DETAILS_TEXT } from "./_Accordion.default";

export const ControlledExpanded: Story = {
  args: {
    ...defaultProps,
    expanded: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 👇 Assert accordion starts expanded when controlled
    await expect(canvas.getByText(DETAILS_TEXT)).toBeVisible();
  },
};