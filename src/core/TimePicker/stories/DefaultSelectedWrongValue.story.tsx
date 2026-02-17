import { Story, testDefaultValue } from "./_TimePicker.default";

export const DefaultSelectedWrongValue: Story = {
  args: {
    hourListType: "quarter",
    value: "03:01",
  },
  play: async ({ canvasElement, args }) => {
    await testDefaultValue(canvasElement, args, true); // Value is shown in input even if invalid
  },
};