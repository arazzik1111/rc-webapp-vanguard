import { within, expect } from "storybook/test";
import { Story } from "./_InputBase.default";

export const LabelTypeTest: Story = {
  args: {
    label: "Sample Label",
    labelType: "static",
  },
  play: async ({ canvasElement }) => {
    // Use within to query the specific label element associated with the input
    const canvas = within(canvasElement);

    // Use a more refined query to target the label element based on class or attributes
    const labelElement = canvas.getAllByText("Sample Label").find((element) => {
      return element.classList.contains("MuiInputLabel-root");
    });

    // Assert that the label element with the expected class for "static" labelType is present
    await expect(labelElement).toBeInTheDocument();
    await expect(labelElement).toHaveClass("MuiInputLabel-shrink");
  },
};