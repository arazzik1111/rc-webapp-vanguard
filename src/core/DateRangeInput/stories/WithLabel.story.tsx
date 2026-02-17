import { within, expect } from "storybook/test";
import { Story, createMockFormConfig } from "./_DateRangeInput.default";

export const WithLabel: Story = {
  args: {
    formconfig: createMockFormConfig(),
    label: "Unique Test Label",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByText("Unique Test Label", { selector: 'label' });
    const button = canvas.getByRole("button");
    await expect(label).toBeInTheDocument();
    await expect(button).toBeInTheDocument();
  },
};