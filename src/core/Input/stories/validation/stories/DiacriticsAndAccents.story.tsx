import React from "react";
import { userEvent, within, expect } from "storybook/test";
import { Story } from "./_Input.default";
import { ValidationTestWrapper, getTestElements, expectErrorToContain, expectErrorToNotExist, inputAndBlur, clearAndInputAndBlur } from "../../shared/test-helpers";
import { ErrorsKeys } from "@helpers/validators/valid-input/validate-input-errors";

const testDiacriticsAndAccents = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement);

  // Test various diacritics and accented characters
  await inputAndBlur(input, "Café, naïve, résumé");
  await expectErrorToNotExist(canvas);

  await clearAndInputAndBlur(input, "Ñoño, piñata, señor");
  await expectErrorToNotExist(canvas);

  await clearAndInputAndBlur(input, "Müller, Björk, façade");
  await expectErrorToNotExist(canvas);
};

export const DiacriticsAndAccents: Story = {
  render: (args) => (
    <ValidationTestWrapper
      validationConfig={{ minLength: 5, maxLength: 30 }}
      label="Diacritics and Accents"
      placeholder="Café, naïve, Müller"
      {...args}
    />
  ),
  play: async ({ canvasElement }) => {
    await testDiacriticsAndAccents(canvasElement);
  },
};