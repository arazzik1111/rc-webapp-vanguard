/**
 * Input Blur Validation Test Helpers
 *
 * This file provides helper functions for testing input validation that triggers on blur events.
 * Unlike the standard validation helpers that trigger validation through typing and tabbing,
 * these helpers focus specifically on blur-triggered validation scenarios.
 *
 * Key Features:
 * - Blur-specific validation triggers
 * - Focus and blur event handling
 * - Validation testing without typing interactions
 * - Support for all validation types with blur triggers
 *
 * Usage Examples:
 *
 * 1. Basic blur validation:
 *    await testRequiredValidationOnBlur(canvasElement);
 *    await testEmailValidationOnBlur(canvasElement);
 *
 * 2. Blur validation with specific values:
 *    await testNumberValidationGTEOnBlurWithSpecificValue(canvasElement, 10);
 *    await testWrongDomainOnBlurWithSpecificDomain(canvasElement, "company.com");
 *
 * 3. Combined focus/blur testing:
 *    await testFocusBlurCycle(canvasElement, "test@example.com", ErrorsKeys.INVALID_EMAIL);
 */

import { ErrorsKeys } from '@helpers/validators/valid-input/validate-input-errors';

import {
  clearAndInputAndBlur,
  expectErrorToContain,
  expectErrorToNotExist,
  getTestElements,
  inputAndBlur,
  triggerBlurValidation,
} from '../../shared/test-helpers';

// Blur-specific validation test functions
export const testRequiredValidationOnBlur = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement);

  // Test empty field shows error on blur
  await triggerBlurValidation(input);
  await expectErrorToContain(canvas, ErrorsKeys.REQUIRED);

  // Test field with value clears error on blur
  await inputAndBlur(input, 'test value');
  await expectErrorToNotExist(canvas);
};

export const testMinLengthValidationOnBlur = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement);

  // Test short input shows error on blur
  await inputAndBlur(input, 'abc');
  await expectErrorToContain(canvas, ErrorsKeys.MIN_LEN);

  // Test valid length clears error on blur
  await clearAndInputAndBlur(input, 'abcdef');
  await expectErrorToNotExist(canvas);
};

export const testMaxLengthValidationOnBlur = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement);

  // Test long input shows error on blur
  await inputAndBlur(input, 'this is too long');
  await expectErrorToContain(canvas, ErrorsKeys.MAX_LEN);

  // Test valid length clears error on blur
  await clearAndInputAndBlur(input, 'short');
  await expectErrorToNotExist(canvas);
};

export const testEmailValidationOnBlur = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement);

  // Test invalid email shows error on blur
  await inputAndBlur(input, 'invalid-email');
  await expectErrorToContain(canvas, ErrorsKeys.INVALID_EMAIL);

  // Test valid email clears error on blur
  await clearAndInputAndBlur(input, 'test@example.com');
  await expectErrorToNotExist(canvas);
};

export const testPhoneValidationOnBlur = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement);

  // Test invalid phone shows error on blur
  await inputAndBlur(input, '123a');
  await expectErrorToContain(canvas, ErrorsKeys.INVALID_PHONE);

  // Test valid phone clears error on blur
  await clearAndInputAndBlur(input, '+1234567890');
  await expectErrorToNotExist(canvas);
};

export const testPasswordValidationOnBlur = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement, 'password');

  // Test empty password shows required error on blur
  await triggerBlurValidation(input);
  await expectErrorToContain(canvas, ErrorsKeys.REQUIRED);

  // Test short password shows min length error on blur
  await inputAndBlur(input, 'ab');
  await expectErrorToContain(canvas, ErrorsKeys.PASSWORD_MIN_LEN);

  // Test valid password clears error on blur
  await clearAndInputAndBlur(input, 'validpass');
  await expectErrorToNotExist(canvas);
};

export const testNumberValidationGTEOnBlur = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement, 'number');

  // Test number less than minimum shows error on blur
  await inputAndBlur(input, '5');
  await expectErrorToContain(canvas, ErrorsKeys.NR_GTE);

  // Test valid number clears error on blur
  await clearAndInputAndBlur(input, '15');
  await expectErrorToNotExist(canvas);
};

export const testNumberValidationLTEOnBlur = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement, 'number');

  // Test number greater than maximum shows error on blur
  await inputAndBlur(input, '150');
  await expectErrorToContain(canvas, ErrorsKeys.NR_LTE);

  // Test valid number clears error on blur
  await clearAndInputAndBlur(input, '50');
  await expectErrorToNotExist(canvas);
};

export const testSpecialCharsNotAllowedOnBlur = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement);

  // Test special characters show error on blur
  await inputAndBlur(input, 'test#value');
  await expectErrorToContain(canvas, ErrorsKeys.SPECIAL_CHARS_NOT_ALLOWED);

  // Test valid text clears error on blur
  await clearAndInputAndBlur(input, 'test value');
  await expectErrorToNotExist(canvas);
};

export const testURLNotAllowedOnBlur = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement);

  // Test URL shows error on blur
  await inputAndBlur(input, 'Visit https://example.com');
  await expectErrorToContain(canvas, ErrorsKeys.URL_NOT_ALLOWED);

  // Test valid text clears error on blur
  await clearAndInputAndBlur(input, 'Visit our website');
  await expectErrorToNotExist(canvas);
};

export const testMultipleSpacesNotAllowedOnBlur = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement);

  // Test multiple spaces show error on blur
  await inputAndBlur(input, 'test  value');
  await expectErrorToContain(canvas, ErrorsKeys.MULTIPLE_SPACES_NOT_ALLOWED);

  // Test single spaces clear error on blur
  await clearAndInputAndBlur(input, 'test value');
  await expectErrorToNotExist(canvas);
};

export const testRegexValidationOnBlur = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement);

  // Test invalid format shows error on blur
  await inputAndBlur(input, 'hello');
  await expectErrorToContain(canvas, ErrorsKeys.NO_REGEX_MATCH);

  // Test valid format clears error on blur
  await clearAndInputAndBlur(input, 'Hello');
  await expectErrorToNotExist(canvas);
};

export const testNumberValidationGTOnBlur = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement, 'number');

  // Test number not greater than minimum shows error on blur
  await inputAndBlur(input, '10');
  await expectErrorToContain(canvas, ErrorsKeys.NR_GT);

  // Test valid number clears error on blur
  await clearAndInputAndBlur(input, '15');
  await expectErrorToNotExist(canvas);
};

export const testNumberValidationLTOnBlur = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement, 'number');

  // Test number not less than maximum shows error on blur
  await inputAndBlur(input, '100');
  await expectErrorToContain(canvas, ErrorsKeys.NR_LT);

  // Test valid number clears error on blur
  await clearAndInputAndBlur(input, '50');
  await expectErrorToNotExist(canvas);
};

export const testNumberValidationIsValidOnBlur = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement, 'number');

  // Test invalid number shows error on blur
  await inputAndBlur(input, 'abc');
  await expectErrorToContain(canvas, ErrorsKeys.NR_IS_VALID);

  // Test valid number clears error on blur
  await clearAndInputAndBlur(input, '123');
  await expectErrorToNotExist(canvas);
};

export const testPathFormatValidationOnBlur = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement);

  // Test invalid path characters show error on blur
  await inputAndBlur(input, 'path/with#invalid<chars>');
  await expectErrorToContain(canvas, ErrorsKeys.PATH_FORMAT);

  // Test valid path clears error on blur
  await clearAndInputAndBlur(input, 'valid/path/name');
  await expectErrorToNotExist(canvas);
};

export const testFullCapitalizationNotAllowedOnBlur = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement);

  // Test full capitalization shows error on blur
  await inputAndBlur(input, 'ALL CAPS TEXT');
  await expectErrorToContain(canvas, ErrorsKeys.FULL_CAPITALIZATION_NOT_ALLOWED);

  // Test mixed case clears error on blur
  await clearAndInputAndBlur(input, 'Mixed Case Text');
  await expectErrorToNotExist(canvas);
};

export const testAtNotAllowedOnBlur = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement);

  // Test @ symbol shows error on blur
  await inputAndBlur(input, 'user@domain');
  await expectErrorToContain(canvas, ErrorsKeys.AT_NOT_ALLOWED);

  // Test text without @ clears error on blur
  await clearAndInputAndBlur(input, 'username');
  await expectErrorToNotExist(canvas);
};

export const testAtDomainNotAllowedOnBlur = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement);

  // Test @domain shows error on blur
  await inputAndBlur(input, 'user@company.com');
  await expectErrorToContain(canvas, ErrorsKeys.AT_DOMAIN_NOT_ALLOWED);

  // Test username without domain clears error on blur
  await clearAndInputAndBlur(input, 'username');
  await expectErrorToNotExist(canvas);
};

export const testWrongDomainOnBlur = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement);

  // Test wrong domain shows error on blur
  await inputAndBlur(input, 'user@wrongdomain.com');
  await expectErrorToContain(canvas, ErrorsKeys.WRONG_DOMAIN);

  // Test correct format clears error on blur
  await clearAndInputAndBlur(input, 'username');
  await expectErrorToNotExist(canvas);
};

export const testIncorrectPhoneOnBlur = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement);

  // Test incorrect phone format shows error on blur
  await inputAndBlur(input, '123-456');
  await expectErrorToContain(canvas, ErrorsKeys.INCORRECT_PHONE);

  // Test correct phone format clears error on blur
  await clearAndInputAndBlur(input, '+1234567890');
  await expectErrorToNotExist(canvas);
};

export const testNotInArrayOnBlur = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement);

  // Test disallowed value shows error on blur
  await inputAndBlur(input, 'forbidden');
  await expectErrorToContain(canvas, ErrorsKeys.NOT_IN_ARRAY);

  // Test allowed value clears error on blur
  await clearAndInputAndBlur(input, 'allowed');
  await expectErrorToNotExist(canvas);
};

export const testPasswordMaxLengthOnBlur = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement, 'password');

  // Test password too long shows error on blur
  const longPassword = 'a'.repeat(101);
  await inputAndBlur(input, longPassword);
  await expectErrorToContain(canvas, ErrorsKeys.PASSWORD_MAX_LEN);

  // Test valid length password clears error on blur
  await clearAndInputAndBlur(input, 'validpassword');
  await expectErrorToNotExist(canvas);
};

export const testCombinedValidationsOnBlur = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement);

  // Test empty field shows required error on blur
  await triggerBlurValidation(input);
  await expectErrorToContain(canvas, ErrorsKeys.REQUIRED);

  // Test short input shows min length error on blur
  await inputAndBlur(input, 'ab');
  await expectErrorToContain(canvas, ErrorsKeys.MIN_LEN);

  // Test special characters show error on blur
  await clearAndInputAndBlur(input, 'test#');
  await expectErrorToContain(canvas, ErrorsKeys.SPECIAL_CHARS_NOT_ALLOWED);

  // Test valid input clears all errors on blur
  await clearAndInputAndBlur(input, 'validtext');
  await expectErrorToNotExist(canvas);
};

// Blur validation test functions with specific values
export const testNumberValidationGTEOnBlurWithSpecificValue = async (
  canvasElement: HTMLElement,
  minValue: number = 10,
) => {
  const { canvas, input } = await getTestElements(canvasElement, 'number');

  // Test number less than minimum shows error with specific value on blur
  await inputAndBlur(input, String(minValue - 1));
  await expectErrorToContain(canvas, ErrorsKeys.NR_GTE, { gte: minValue });

  // Test valid number clears error on blur
  await clearAndInputAndBlur(input, String(minValue + 5));
  await expectErrorToNotExist(canvas);
};

export const testNumberValidationLTEOnBlurWithSpecificValue = async (
  canvasElement: HTMLElement,
  maxValue: number = 100,
) => {
  const { canvas, input } = await getTestElements(canvasElement, 'number');

  // Test number greater than maximum shows error with specific value on blur
  await inputAndBlur(input, String(maxValue + 1));
  await expectErrorToContain(canvas, ErrorsKeys.NR_LTE, { lte: maxValue });

  // Test valid number clears error on blur
  await clearAndInputAndBlur(input, String(maxValue - 5));
  await expectErrorToNotExist(canvas);
};

export const testWrongDomainOnBlurWithSpecificDomain = async (
  canvasElement: HTMLElement,
  expectedDomain: string = 'company.com',
) => {
  const { canvas, input } = await getTestElements(canvasElement);

  // Test wrong domain shows error with specific domain on blur
  await inputAndBlur(input, 'user@wrongdomain.com');
  await expectErrorToContain(canvas, ErrorsKeys.WRONG_DOMAIN, { domain: expectedDomain });

  // Test correct format clears error on blur
  await clearAndInputAndBlur(input, 'username');
  await expectErrorToNotExist(canvas);
};

export const testAtDomainNotAllowedOnBlurWithSpecificDomain = async (
  canvasElement: HTMLElement,
  expectedDomain: string = 'company.com',
) => {
  const { canvas, input } = await getTestElements(canvasElement);

  // Test @domain shows error with specific domain on blur
  await inputAndBlur(input, `user@${expectedDomain}`);
  await expectErrorToContain(canvas, ErrorsKeys.AT_DOMAIN_NOT_ALLOWED, { domain: expectedDomain });

  // Test username without domain clears error on blur
  await clearAndInputAndBlur(input, 'username');
  await expectErrorToNotExist(canvas);
};

// Advanced blur testing utilities
export const testFocusBlurCycle = async (
  canvasElement: HTMLElement,
  invalidValue: string,
  expectedError: string,
  validValue?: string,
) => {
  const { canvas, input } = await getTestElements(canvasElement);

  // Test focus -> input invalid value -> blur shows error
  await inputAndBlur(input, invalidValue);
  await expectErrorToContain(canvas, expectedError);

  // If valid value provided, test that it clears the error
  if (validValue) {
    await clearAndInputAndBlur(input, validValue);
    await expectErrorToNotExist(canvas);
  }
};

export const testMultipleFocusBlurCycles = async (
  canvasElement: HTMLElement,
  testCases: Array<{ value: string; expectedError?: string; shouldPass?: boolean }>,
) => {
  const { canvas, input } = await getTestElements(canvasElement);

  for (const testCase of testCases) {
    if (testCase.shouldPass) {
      await clearAndInputAndBlur(input, testCase.value);
      await expectErrorToNotExist(canvas);
    } else if (testCase.expectedError) {
      await clearAndInputAndBlur(input, testCase.value);
      await expectErrorToContain(canvas, testCase.expectedError);
    }
  }
};
