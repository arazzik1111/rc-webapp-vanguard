import { within, userEvent, expect } from "storybook/test";
import { Story, defaultProps, DETAILS_TEXT } from "./_Accordion.default";

export const WithMuiProps: Story = {
  args: {
    ...defaultProps,
    disableGutters: true,
    variant: "outlined",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const action = canvas.getByRole("button");

    // 👇 Test that accordion works with MUI props
    await userEvent.click(action);
    await expect(canvas.getByText(DETAILS_TEXT)).toBeVisible();
  },
};