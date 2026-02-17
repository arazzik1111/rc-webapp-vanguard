import { Story } from "./_Textarea.default";
import { within, expect } from "storybook/test";

export const TestLabelProp: Story = {
  args: {
    label: "Test Label",
    placeholder: "Placeholder Test",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const labelElements = canvas.getAllByText("Test Label");
    const label = labelElements.find((element) => element.tagName === "LABEL");
    await expect(label).toBeInTheDocument();
  },
};

