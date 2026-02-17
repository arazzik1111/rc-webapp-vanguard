import { within, expect, userEvent } from "storybook/test";
import { Story, createMockOnStepDownNumericClick } from "./_InputBase.default";

export const OnStepDownNumericClickTest: Story = {
  args: {
    onStepDownNumericClick: createMockOnStepDownNumericClick(),
    type: "number",
    roundedNumericCTAType: true,
    formFieldType: "InputNumber",
    autoFocus: true,
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const user = userEvent.setup();
    const inputElement = canvas.getAllByRole("textbox")[1];
    await user.click(inputElement);
    // Querying using only the role
    const stepDownIcon = (await canvas.findAllByRole("button"))[0]; // Adjust the index as needed
    await user.click(stepDownIcon);
    await expect(args.onStepDownNumericClick).toHaveBeenCalled();
  },
};