import React from "react";
import { PhoneNumber } from "../PhoneNumber";
import { Story, testPhoneNumbers, testCountryCodes } from "./_PhoneNumber.default";
import { within, expect } from "storybook/test";

export const WithDisabled: Story = {
  render: () => (
    <PhoneNumber
      phoneNumberBase={testPhoneNumbers.american}
      countryCode={testCountryCodes.US}
      phoneNumberDisabled={true}
      prefixNumberDisabled={true}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const phoneNumberComponent = canvas.getByTestId("phoneNumberComponent");

    await expect(phoneNumberComponent).toBeInTheDocument();
  },
};