import React from "react";
import { Story } from "./_Input.default";
import { ValidationTestWrapper, getTestElements, expectErrorToContain, expectErrorToNotExist, triggerValidation, inputAndBlur } from "../../shared/test-helpers";
import { ErrorsKeys } from "@helpers/validators/valid-input/validate-input-errors";

const testSearchValidation = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement, "search");

  // Test empty search shows required error
  await triggerValidation(input);
  await expectErrorToContain(canvas, ErrorsKeys.REQUIRED);

  // Test search with content clears error
  await inputAndBlur(input, "search term");
  await expectErrorToNotExist(canvas);
};

export const SearchValidation: Story = {
  render: (args) => (
    <ValidationTestWrapper
      inputType="search"
      validationConfig={{ required: true, minLength: 3 }}
      label="Search Input"
      placeholder="Enter search term"
      {...args}
    />
  ),
  play: async ({ canvasElement }) => {
    await testSearchValidation(canvasElement);
  },
};