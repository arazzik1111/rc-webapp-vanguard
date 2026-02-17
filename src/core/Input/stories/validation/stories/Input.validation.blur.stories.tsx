/**
 * Input Blur Validation Stories
 *
 * This file contains Storybook stories for testing input validation that triggers on blur events.
 * These stories demonstrate how validation works when users focus on an input field and then
 * blur (lose focus) without necessarily typing or making changes.
 */

import type { Meta, StoryObj } from "@storybook/react";
import { ValidationTestWrapper } from "@vanguard/Input/stories";
import {
  testRequiredValidationOnBlur,
  testEmailValidationOnBlur,
  testMinLengthValidationOnBlur,
  testMaxLengthValidationOnBlur,
  testPhoneValidationOnBlur,
  testPasswordValidationOnBlur,
  testNumberValidationGTEOnBlur,
  testNumberValidationLTEOnBlur,
  testSpecialCharsNotAllowedOnBlur,
  testURLNotAllowedOnBlur,
  testMultipleSpacesNotAllowedOnBlur,
  testRegexValidationOnBlur,
  testNumberValidationGTOnBlur,
  testNumberValidationLTOnBlur,
  testNumberValidationIsValidOnBlur,
  testPathFormatValidationOnBlur,
  testFullCapitalizationNotAllowedOnBlur,
  testAtNotAllowedOnBlur,
  testAtDomainNotAllowedOnBlur,
  testWrongDomainOnBlur,
  testIncorrectPhoneOnBlur,
  testNotInArrayOnBlur,
  testPasswordMaxLengthOnBlur,
  testCombinedValidationsOnBlur,
  testNumberValidationGTEOnBlurWithSpecificValue,
  testNumberValidationLTEOnBlurWithSpecificValue,
  testWrongDomainOnBlurWithSpecificDomain,
  testAtDomainNotAllowedOnBlurWithSpecificDomain,
  testFocusBlurCycle,
  testMultipleFocusBlurCycles,
} from "../helpers/blur-helpers";
import { SbDecorator } from "@test-utils/get-storybook-decorator";

const meta: Meta<typeof ValidationTestWrapper> = {
  ...SbDecorator({
    title: "Core/Input/Validation/Blur",
    component: ValidationTestWrapper,
    extra: {
      args: {
        testId: "validation-input",
      },
    },
    opts: {
      withRedux: true,
    },
  }),
};

export default meta;
type Story = StoryObj<typeof ValidationTestWrapper>;

// Basic blur validation stories
export const RequiredValidationOnBlur: Story = {
  args: {
    validationConfig: {
      required: true,
    },
  },
  play: async ({ canvasElement }) => {
    await testRequiredValidationOnBlur(canvasElement);
  },
};

export const EmailValidationOnBlur: Story = {
  args: {
    inputType: "email",
    validationConfig: {
      email: true,
    },
  },
  play: async ({ canvasElement }) => {
    await testEmailValidationOnBlur(canvasElement);
  },
};

export const MinLengthValidationOnBlur: Story = {
  args: {
    validationConfig: {
      minLength: 5,
    },
  },
  play: async ({ canvasElement }) => {
    await testMinLengthValidationOnBlur(canvasElement);
  },
};

export const MaxLengthValidationOnBlur: Story = {
  args: {
    validationConfig: {
      maxLength: 10,
    },
  },
  play: async ({ canvasElement }) => {
    await testMaxLengthValidationOnBlur(canvasElement);
  },
};

export const PhoneValidationOnBlur: Story = {
  args: {
    inputType: "tel",
    validationConfig: {
      phone: true,
    },
  },
  play: async ({ canvasElement }) => {
    await testPhoneValidationOnBlur(canvasElement);
  },
};

export const PasswordValidationOnBlur: Story = {
  args: {
    inputType: "password",
    validationConfig: {
      required: true,
      passwordMinLength: 8,
    },
  },
  play: async ({ canvasElement }) => {
    await testPasswordValidationOnBlur(canvasElement);
  },
};

// Number validation blur stories
export const NumberGTEValidationOnBlur: Story = {
  args: {
    inputType: "number",
    validationConfig: {
      numberGTE: 10,
    },
  },
  play: async ({ canvasElement }) => {
    await testNumberValidationGTEOnBlur(canvasElement);
  },
};

export const NumberLTEValidationOnBlur: Story = {
  args: {
    inputType: "number",
    validationConfig: {
      numberLTE: 100,
    },
  },
  play: async ({ canvasElement }) => {
    await testNumberValidationLTEOnBlur(canvasElement);
  },
};

export const NumberGTValidationOnBlur: Story = {
  args: {
    inputType: "number",
    validationConfig: {
      numberGT: 10,
    },
  },
  play: async ({ canvasElement }) => {
    await testNumberValidationGTOnBlur(canvasElement);
  },
};

export const NumberLTValidationOnBlur: Story = {
  args: {
    inputType: "number",
    validationConfig: {
      numberLT: 100,
    },
  },
  play: async ({ canvasElement }) => {
    await testNumberValidationLTOnBlur(canvasElement);
  },
};

export const NumberIsValidOnBlur: Story = {
  args: {
    inputType: "number",
    validationConfig: {
      numberIsValid: true,
    },
  },
  play: async ({ canvasElement }) => {
    await testNumberValidationIsValidOnBlur(canvasElement);
  },
};

// Text validation blur stories
export const SpecialCharsNotAllowedOnBlur: Story = {
  args: {
    validationConfig: {
      specialCharsNotAllowed: true,
    },
  },
  play: async ({ canvasElement }) => {
    await testSpecialCharsNotAllowedOnBlur(canvasElement);
  },
};

export const URLNotAllowedOnBlur: Story = {
  args: {
    validationConfig: {
      urlNotAllowed: true,
    },
  },
  play: async ({ canvasElement }) => {
    await testURLNotAllowedOnBlur(canvasElement);
  },
};

export const MultipleSpacesNotAllowedOnBlur: Story = {
  args: {
    validationConfig: {
      multipleSpacesNotAllowed: true,
    },
  },
  play: async ({ canvasElement }) => {
    await testMultipleSpacesNotAllowedOnBlur(canvasElement);
  },
};

export const RegexValidationOnBlur: Story = {
  args: {
    validationConfig: {
      regex: /^[A-Z]/,
    },
  },
  play: async ({ canvasElement }) => {
    await testRegexValidationOnBlur(canvasElement);
  },
};

export const PathFormatValidationOnBlur: Story = {
  args: {
    validationConfig: {
      pathFormat: true,
    },
  },
  play: async ({ canvasElement }) => {
    await testPathFormatValidationOnBlur(canvasElement);
  },
};

export const FullCapitalizationNotAllowedOnBlur: Story = {
  args: {
    validationConfig: {
      fullCapitalizationNotAllowed: true,
    },
  },
  play: async ({ canvasElement }) => {
    await testFullCapitalizationNotAllowedOnBlur(canvasElement);
  },
};

// Domain and @ symbol validation blur stories
export const AtNotAllowedOnBlur: Story = {
  args: {
    validationConfig: {
      atNotAllowed: true,
    },
  },
  play: async ({ canvasElement }) => {
    await testAtNotAllowedOnBlur(canvasElement);
  },
};

export const AtDomainNotAllowedOnBlur: Story = {
  args: {
    validationConfig: {
      atDomainNotAllowed: "company.com",
    },
  },
  play: async ({ canvasElement }) => {
    await testAtDomainNotAllowedOnBlur(canvasElement);
  },
};

export const WrongDomainOnBlur: Story = {
  args: {
    validationConfig: {
      wrongDomain: "company.com",
    },
  },
  play: async ({ canvasElement }) => {
    await testWrongDomainOnBlur(canvasElement);
  },
};

export const IncorrectPhoneOnBlur: Story = {
  args: {
    validationConfig: {
      incorrectPhone: true,
    },
  },
  play: async ({ canvasElement }) => {
    await testIncorrectPhoneOnBlur(canvasElement);
  },
};

export const NotInArrayOnBlur: Story = {
  args: {
    validationConfig: {
      notInArray: ["forbidden", "blocked", "denied"],
    },
  },
  play: async ({ canvasElement }) => {
    await testNotInArrayOnBlur(canvasElement);
  },
};

export const PasswordMaxLengthOnBlur: Story = {
  args: {
    inputType: "password",
    validationConfig: {
      passwordMaxLength: 100,
    },
  },
  play: async ({ canvasElement }) => {
    await testPasswordMaxLengthOnBlur(canvasElement);
  },
};

// Combined validation blur stories
export const CombinedValidationsOnBlur: Story = {
  args: {
    validationConfig: {
      required: true,
      minLength: 5,
      specialCharsNotAllowed: true,
    },
  },
  play: async ({ canvasElement }) => {
    await testCombinedValidationsOnBlur(canvasElement);
  },
};

// Advanced blur validation stories with specific values
export const NumberGTEWithSpecificValueOnBlur: Story = {
  args: {
    inputType: "number",
    validationConfig: {
      numberGTE: 25,
    },
  },
  play: async ({ canvasElement }) => {
    await testNumberValidationGTEOnBlurWithSpecificValue(canvasElement, 25);
  },
};

export const NumberLTEWithSpecificValueOnBlur: Story = {
  args: {
    inputType: "number",
    validationConfig: {
      numberLTE: 75,
    },
  },
  play: async ({ canvasElement }) => {
    await testNumberValidationLTEOnBlurWithSpecificValue(canvasElement, 75);
  },
};

export const WrongDomainWithSpecificDomainOnBlur: Story = {
  args: {
    validationConfig: {
      wrongDomain: "mycompany.org",
    },
  },
  play: async ({ canvasElement }) => {
    await testWrongDomainOnBlurWithSpecificDomain(canvasElement, "mycompany.org");
  },
};

export const AtDomainNotAllowedWithSpecificDomainOnBlur: Story = {
  args: {
    validationConfig: {
      atDomainNotAllowed: "restricted.com",
    },
  },
  play: async ({ canvasElement }) => {
    await testAtDomainNotAllowedOnBlurWithSpecificDomain(canvasElement, "restricted.com");
  },
};

// Advanced blur testing utilities stories
export const FocusBlurCycleTest: Story = {
  args: {
    inputType: "email",
    validationConfig: {
      email: true,
    },
  },
  play: async ({ canvasElement }) => {
    await testFocusBlurCycle(canvasElement, "invalid-email", "Invalid email format", "test@example.com");
  },
};

export const MultipleFocusBlurCyclesTest: Story = {
  args: {
    validationConfig: {
      required: true,
      minLength: 5,
      specialCharsNotAllowed: true,
    },
  },
  play: async ({ canvasElement }) => {
    await testMultipleFocusBlurCycles(canvasElement, [
      { value: "", expectedError: "This field is required" },
      { value: "abc", expectedError: "Minimum length is 5 characters" },
      { value: "test#", expectedError: "Special characters are not allowed" },
      { value: "validtext", shouldPass: true },
    ]);
  },
};
