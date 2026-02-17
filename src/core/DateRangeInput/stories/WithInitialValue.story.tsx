import { within, expect } from "storybook/test";
import { Story, createMockFormConfig } from "./_DateRangeInput.default";

export const WithInitialValue: Story = {
  args: {
    formconfig: createMockFormConfig("2023-01-01_2023-01-31"),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const highlights = canvas.getByText("2023-01-01_2023-01-31");
    const button = canvas.getByRole("button");
    await expect(highlights).toBeInTheDocument();
    await expect(button).toBeInTheDocument();
  },
};