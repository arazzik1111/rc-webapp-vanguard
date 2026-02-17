import { Story, testDefaultValue } from "./_TimePicker.default";

export const DefaultSelected: Story = {
  args: {
    hourListType: "quarter",
    value: "03:00",
  },
  play: async ({ canvasElement, args }) => {
    await testDefaultValue(canvasElement, args, true);
  },
};