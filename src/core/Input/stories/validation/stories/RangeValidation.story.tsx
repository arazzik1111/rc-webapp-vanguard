import React from "react";
import { userEvent } from "storybook/test";
import { Story } from "./_Input.default";
import { ValidationTestWrapper, getTestElements, expectErrorToNotExist } from "../../shared/test-helpers";

const testRangeValidation = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement, "range");

  // Range inputs always have a value, test if it's within bounds
  await userEvent.click(input);
  await userEvent.tab();
  await expectErrorToNotExist(canvas);
};

export const RangeValidation: Story = {
  render: (args) => (
    <ValidationTestWrapper inputType="range" validationConfig={{ gte: 0, lte: 100 }} label="Range Input" {...args} />
  ),
  play: async ({ canvasElement }) => {
    await testRangeValidation(canvasElement);
  },
};