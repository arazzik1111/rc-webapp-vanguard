import { within, expect, userEvent } from "storybook/test";
import { wait } from "@helpers/wait";
import { Story, createMockOnStepUpNumericClick } from "./_InputBase.default";

export const OnStepUpNumericClickTest: Story = {
  args: {
    onStepUpNumericClick: createMockOnStepUpNumericClick(),
    type: "number",
    roundedNumericCTAType: true,
    formFieldType: "InputNumber",
    autoFocus: true,
  },
  play: async ({ canvasElement, args }) => {
    await wait(1500); // TODO: This wait was introduced because of some strange bug (probably on the InputBase component) that render the step-up button with some delay. This need to be investigated!
    const canvas = within(canvasElement);
    const user = userEvent.setup();
    const inputElement = canvas.getByRole("textbox");
    await user.click(inputElement);
    // Wait for the step up button to be available
    const stepUpIcon = await canvas.findByTestId("button-step-up");
    await user.click(stepUpIcon);
    await expect(args.onStepUpNumericClick).toHaveBeenCalled();
  },
};