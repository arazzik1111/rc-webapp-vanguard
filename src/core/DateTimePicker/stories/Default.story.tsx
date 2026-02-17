import { within, expect } from "storybook/test";
import { Story, testLocales } from "./_DateTimePicker.default";

export const Default: Story = {
  args: {
    locale: testLocales.en,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByText("Start date");
    await expect(label).toBeInTheDocument();
  },
};