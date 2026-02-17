import { within, expect } from "storybook/test";
import { Story, testValues } from "./_InputBase.default";

export const LabelTest: Story = {
  args: {
    label: testValues.sampleLabel,
  },
  play: async ({ canvasElement }) => {
    // Use within to narrow down the scope and select the label more specifically
    const canvas = within(canvasElement);

    // Use a more specific query to get the correct label element
    const labelElement = canvas.getAllByText(testValues.sampleLabel).find((element) => {
      return element.tagName === "LABEL"; // Check if the element is a LABEL
    });

    // Assert that the label element is present in the document
    await expect(labelElement).toBeInTheDocument();
  },
};