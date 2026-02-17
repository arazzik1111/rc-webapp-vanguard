import { ValidationTestWrapper } from "@vanguard/Input/stories";
import { within } from "storybook/test";
import { Story } from "./_Input.default";

export const ColorContrastCompliance: Story = {
  render: (args) => (
    <ValidationTestWrapper
      validationConfig={{ required: true }}
      label="Color Contrast Test"
      placeholder="Color accessibility test"
      {...args}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getAllByRole('textbox')[0];
    const label = canvas.getByText(/color contrast test/i);
    // For real contrast testing, consider integrating axe-core or similar.
  },
};
