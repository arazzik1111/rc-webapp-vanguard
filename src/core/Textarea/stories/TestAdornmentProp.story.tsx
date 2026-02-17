import { Story } from "./_Textarea.default";
import { within, expect } from "storybook/test";

export const TestAdornmentProp: Story = {
  args: {
    adornment: <span className="adornment-icon">🔍</span>,
    placeholder: "Adornment Test",
  },
  play: async ({ canvasElement }) => {
    const adornment = within(canvasElement).getByText("🔍");
    await expect(adornment).toBeInTheDocument();
  },
};

