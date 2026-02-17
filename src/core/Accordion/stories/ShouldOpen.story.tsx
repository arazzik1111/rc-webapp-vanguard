import { within, userEvent, expect } from "storybook/test";
import { Story, defaultProps, TITLE_TEXT, DETAILS_TEXT } from "./_Accordion.default";

export const ShouldOpen: Story = {
  args: {
    ...defaultProps,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const action = canvas.getByRole("button");
    // 👇 Simulate interactions with the component

    await expect(canvas.getByText(TITLE_TEXT)).toBeVisible();
    await expect(canvas.getByText(DETAILS_TEXT)).not.toBeVisible();

    await userEvent.click(action);

    // 👇 Assert DOM structure
    await expect(canvas.getByText(DETAILS_TEXT)).toBeVisible();
  },
};