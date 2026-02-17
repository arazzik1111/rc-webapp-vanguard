import { within, expect } from "storybook/test";
import { Story } from "./_Label.default";

export const WithReplacements: Story = {
  args: {
    value: "Hello {name}, welcome to {app}!",
    replacements: {
      name: "John",
      app: "Vanguard",
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByText("Hello John, welcome to Vanguard!");
    await expect(label).toBeInTheDocument();
  },
};