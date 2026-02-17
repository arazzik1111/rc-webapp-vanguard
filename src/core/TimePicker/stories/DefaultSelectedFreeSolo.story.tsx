import { Story, testDefaultValue } from "./_TimePicker.default";

export const DefaultSelectedFreeSolo: Story = {
  args: {
    hourListType: "quarter",
    value: "03:01",
    freeSolo: true,
  },
  play: async ({ canvasElement, args }) => {
    await testDefaultValue(canvasElement, args, true);
  },
};