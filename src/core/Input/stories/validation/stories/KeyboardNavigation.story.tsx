import { ValidationTestWrapper } from "@vanguard/Input/stories";
import { within, userEvent, expect } from "storybook/test";
import { Story } from "./_Input.default";

export const KeyboardNavigation: Story = {
  render: (args) => (
    <ValidationTestWrapper
      validationConfig={{ required: true }}
      label="Keyboard Navigation Test"
      placeholder="Use Tab to navigate"
      {...args}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const user = userEvent.setup();
    const inputElement = canvas.getAllByRole('textbox')[0];
    const button = canvas.getByRole('button');

    // Tab to input
    await user.tab();
    await expect(inputElement).toHaveFocus();

    // Tab to button
    await user.tab();
    await expect(button).toHaveFocus();
  },
};