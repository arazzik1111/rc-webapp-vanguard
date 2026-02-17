import React from "react";
import { CheckBox } from "../CheckBox";
import { within, expect, userEvent } from "storybook/test";
import { Story, testLabels, createMockOnChange } from "./_CheckBox.default";

export const WithOnChange: Story = {
  args: {
    label: testLabels.default,
    onChange: createMockOnChange(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const label = await canvas.findByText(args.label as string);

    const user = userEvent.setup();
    await user.click(label);

    await expect(args.onChange).toHaveBeenCalledTimes(1);
  },
};