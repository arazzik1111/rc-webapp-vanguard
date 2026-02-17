import { within, expect } from "storybook/test";
import { Story } from "./_InputBase.default";

/**
 * Test: Replacements Prop
 */
export const TestReplacementsProp: Story = {
  args: {
    label: "Label with {variable}",
    replacements: { variable: "Replaced Text" },
  },
  play: async ({ canvasElement }) => {
    // Use within to query for all elements with the replaced text
    const canvas = within(canvasElement);
    const labelElements = canvas.getAllByText("Label with Replaced Text");

    // Filter to find the element that is a <label> tag
    const label = labelElements.find((element) => element.tagName === "LABEL");

    // Assert that the label element is present in the document
    await expect(label).toBeInTheDocument();
  },
};