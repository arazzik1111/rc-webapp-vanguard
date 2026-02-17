import { within, expect } from "storybook/test";
import { Story, testLocales } from "./_DateTimePicker.default";

export const WithLabels: Story = {
  args: {
    locale: testLocales.en,
    labelDate: "Custom Date Label",
    labelTime: "Custom Time Label",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByText("Custom Date Label");
    await expect(label).toBeInTheDocument();
  },
};