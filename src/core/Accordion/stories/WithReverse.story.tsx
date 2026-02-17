import { within, userEvent, expect } from "storybook/test";
import { Story, defaultProps, DETAILS_TEXT } from "./_Accordion.default";

export const WithReverse: Story = {
  args: {
    ...defaultProps,
    reverse: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const accordion = canvasElement.querySelector(".Accordion-container.Accordion-reverse");

    // 👇 Assert reverse class is applied
    await expect(accordion).toBeInTheDocument();

    const action = canvas.getByRole("button");
    await userEvent.click(action);

    // 👇 Assert functionality still works in reverse mode
    await expect(canvas.getByText(DETAILS_TEXT)).toBeVisible();
  },
};