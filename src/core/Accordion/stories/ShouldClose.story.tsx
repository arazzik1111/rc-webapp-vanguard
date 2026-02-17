import { within, userEvent, expect, waitFor } from "storybook/test";
import { Story, defaultProps, TITLE_TEXT, DETAILS_TEXT } from "./_Accordion.default";

export const ShouldClose: Story = {
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

    // 👇 Wait for accordion to open
    await waitFor(() => {
      expect(canvas.getByText(DETAILS_TEXT)).toBeVisible();
    });

    await userEvent.click(action);

    // 👇 Wait for accordion to close and assert DOM structure
    await waitFor(() => {
      expect(canvas.getByText(DETAILS_TEXT)).not.toBeVisible();
    });
  },
};