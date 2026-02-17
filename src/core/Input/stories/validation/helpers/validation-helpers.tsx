/**
 * Input Validation Test Helpers
 *
 * This file provides helper functions for testing input validation in Storybook stories.
 * It handles validation error messages that contain variables (like %field_name%, %gt%, etc.)
 * that get replaced with actual values at runtime.
 *
 * Key Features:
 * - Automatic variable replacement in error messages
 * - Regex pattern matching for dynamic content
 * - Support for specific variable values when known
 *
 * Usage Examples:
 *
 * 1. Basic validation (works with both static and variable messages):
 *    await expectErrorToContain(canvas, ErrorsKeys.REQUIRED);
 *    await expectErrorToContain(canvas, ErrorsKeys.NR_GTE); // Handles %field_name% and %gte% automatically
 *
 * 2. Validation with specific variable values:
 *    await expectErrorToContainWithVariables(canvas, ErrorsKeys.NR_GTE, { gte: 10 });
 *    await expectErrorToContainWithVariables(canvas, ErrorsKeys.WRONG_DOMAIN, { domain: "company.com" });
 *
 * 3. Using specialized test functions:
 *    await testNumberValidationGTEWithSpecificValue(canvasElement, 10);
 *    await testWrongDomainWithSpecificDomain(canvasElement, "company.com");
 */

import { ErrorsKeys } from '@helpers/validators/valid-input/validate-input-errors';

import {
  clearAndInputAndBlur,
  expectErrorToContain,
  expectErrorToNotExist,
  getTestElements,
  inputAndBlur,
  triggerValidation,
} from '../../shared/test-helpers';

// Export helper functions for external use

// Validation test functions
export const testRequiredValidation = async (canvasElement: HTMLElement, remainInError: boolean) => {
  const { canvas, input } = await getTestElements(canvasElement);

  // Test empty field shows error
  await triggerValidation(input);
  await expectErrorToContain(canvas, ErrorsKeys.REQUIRED);

  if (!remainInError) {
    // Test field with value clears error
    await inputAndBlur(input, 'test value');
    await expectErrorToNotExist(canvas);
  }
};

export const testMinLengthValidation = async (canvasElement: HTMLElement) => {};

export const testMaxLengthValidation = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement);

  // Test long input shows error
  await inputAndBlur(input, 'this is too long');
  await expectErrorToContain(canvas, ErrorsKeys.MAX_LEN);

  // Test valid length clears error
  await clearAndInputAndBlur(input, 'short');
  await expectErrorToNotExist(canvas);
};

export const testEmailValidation = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement);

  // Test invalid email shows error
  await inputAndBlur(input, 'invalid-email');
  await expectErrorToContain(canvas, ErrorsKeys.INVALID_EMAIL);

  // Test valid email clears error
  await clearAndInputAndBlur(input, 'test@example.com');
  await expectErrorToNotExist(canvas);
};

export const testPhoneValidation = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement);

  // Test invalid phone shows error
  await inputAndBlur(input, '123a');
  await expectErrorToContain(canvas, ErrorsKeys.INVALID_PHONE);

  // Test valid phone clears error
  await clearAndInputAndBlur(input, '+1234567890');
  await expectErrorToNotExist(canvas);
};

export const testPasswordValidation = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement, 'password');

  // Test empty password shows required error
  await triggerValidation(input);
  await expectErrorToContain(canvas, ErrorsKeys.REQUIRED);

  // Test short password shows min length error
  await inputAndBlur(input, 'ab');
  await expectErrorToContain(canvas, ErrorsKeys.PASSWORD_MIN_LEN);

  // Test valid password clears error
  await clearAndInputAndBlur(input, 'validpass');
  await expectErrorToNotExist(canvas);
};

export const testNumberValidationGTE = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement, 'number');

  // Test number less than minimum shows error
  await inputAndBlur(input, '5');
  await expectErrorToContain(canvas, ErrorsKeys.NR_GTE);

  // Test valid number clears error
  await clearAndInputAndBlur(input, '15');
  await expectErrorToNotExist(canvas);
};

export const testNumberValidationLTE = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement, 'number');

  // Test number greater than maximum shows error
  await inputAndBlur(input, '150');
  await expectErrorToContain(canvas, ErrorsKeys.NR_LTE);

  // Test valid number clears error
  await clearAndInputAndBlur(input, '50');
  await expectErrorToNotExist(canvas);
};

export const testSpecialCharsNotAllowed = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement);

  // Test special characters show error
  await inputAndBlur(input, 'test#value');
  await expectErrorToContain(canvas, ErrorsKeys.SPECIAL_CHARS_NOT_ALLOWED);

  // Test valid text clears error
  await clearAndInputAndBlur(input, 'test value');
  await expectErrorToNotExist(canvas);
};

export const testURLNotAllowed = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement);

  // Test URL shows error
  await inputAndBlur(input, 'Visit https://example.com');
  await expectErrorToContain(canvas, ErrorsKeys.URL_NOT_ALLOWED);

  // Test valid text clears error
  await clearAndInputAndBlur(input, 'Visit our website');
  await expectErrorToNotExist(canvas);
};

export const testMultipleSpacesNotAllowed = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement);

  // Test multiple spaces show error
  await inputAndBlur(input, 'test  value');
  await expectErrorToContain(canvas, ErrorsKeys.MULTIPLE_SPACES_NOT_ALLOWED);

  // Test single spaces clear error
  await clearAndInputAndBlur(input, 'test value');
  await expectErrorToNotExist(canvas);
};

export const testRegexValidation = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement);

  // Test invalid format shows error
  await inputAndBlur(input, 'hello');
  await expectErrorToContain(canvas, ErrorsKeys.NO_REGEX_MATCH);

  // Test valid format clears error
  await clearAndInputAndBlur(input, 'Hello');
  await expectErrorToNotExist(canvas);
};

export const testNumberValidationGT = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement, 'number');

  // Test number not greater than minimum shows error
  await inputAndBlur(input, '10');
  await expectErrorToContain(canvas, ErrorsKeys.NR_GT);

  // Test valid number clears error
  await clearAndInputAndBlur(input, '15');
  await expectErrorToNotExist(canvas);
};

export const testNumberValidationLT = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement, 'number');

  // Test number not less than maximum shows error
  await inputAndBlur(input, '100');
  await expectErrorToContain(canvas, ErrorsKeys.NR_LT);

  // Test valid number clears error
  await clearAndInputAndBlur(input, '50');
  await expectErrorToNotExist(canvas);
};

export const testNumberValidationIsValid = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement, 'number');

  // Test invalid number shows error
  await inputAndBlur(input, 'abc');
  await expectErrorToContain(canvas, ErrorsKeys.NR_IS_VALID);

  // Test valid number clears error
  await clearAndInputAndBlur(input, '123');
  await expectErrorToNotExist(canvas);
};

export const testPathFormatValidation = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement);

  // Test invalid path characters show error
  await inputAndBlur(input, 'path/with#invalid<chars>');
  await expectErrorToContain(canvas, ErrorsKeys.PATH_FORMAT);

  // Test valid path clears error
  await clearAndInputAndBlur(input, 'valid/path/name');
  await expectErrorToNotExist(canvas);
};

export const testFullCapitalizationNotAllowed = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement);

  // Test full capitalization shows error
  await inputAndBlur(input, 'ALL CAPS TEXT');
  await expectErrorToContain(canvas, ErrorsKeys.FULL_CAPITALIZATION_NOT_ALLOWED);

  // Test mixed case clears error
  await clearAndInputAndBlur(input, 'Mixed Case Text');
  await expectErrorToNotExist(canvas);
};

export const testAtNotAllowed = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement);

  // Test @ symbol shows error
  await inputAndBlur(input, 'user@domain');
  await expectErrorToContain(canvas, ErrorsKeys.AT_NOT_ALLOWED);

  // Test text without @ clears error
  await clearAndInputAndBlur(input, 'username');
  await expectErrorToNotExist(canvas);
};

export const testAtDomainNotAllowed = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement);

  // Test @domain shows error
  await inputAndBlur(input, 'user@company.com');
  await expectErrorToContain(canvas, ErrorsKeys.AT_DOMAIN_NOT_ALLOWED);

  // Test username without domain clears error
  await clearAndInputAndBlur(input, 'username');
  await expectErrorToNotExist(canvas);
};

export const testWrongDomain = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement);

  // Test wrong domain shows error
  await inputAndBlur(input, 'user@wrongdomain.com');
  await expectErrorToContain(canvas, ErrorsKeys.WRONG_DOMAIN);

  // Test correct format clears error
  await clearAndInputAndBlur(input, 'username');
  await expectErrorToNotExist(canvas);
};

export const testIncorrectPhone = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement);

  // Test incorrect phone format shows error
  await inputAndBlur(input, '123-456');
  await expectErrorToContain(canvas, ErrorsKeys.INCORRECT_PHONE);

  // Test correct phone format clears error
  await clearAndInputAndBlur(input, '+1234567890');
  await expectErrorToNotExist(canvas);
};

export const testNotInArray = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement);

  // Test disallowed value shows error
  await inputAndBlur(input, 'forbidden');
  await expectErrorToContain(canvas, ErrorsKeys.NOT_IN_ARRAY);

  // Test allowed value clears error
  await clearAndInputAndBlur(input, 'allowed');
  await expectErrorToNotExist(canvas);
};

export const testPasswordMaxLength = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement, 'password');

  // Test password too long shows error
  const longPassword = 'a'.repeat(101);
  await inputAndBlur(input, longPassword);
  await expectErrorToContain(canvas, ErrorsKeys.PASSWORD_MAX_LEN);

  // Test valid length password clears error
  await clearAndInputAndBlur(input, 'validpassword');
  await expectErrorToNotExist(canvas);
};

export const testCombinedValidations = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement);

  // Test empty field shows required error
  await triggerValidation(input);
  await expectErrorToContain(canvas, ErrorsKeys.REQUIRED);

  // Test short input shows min length error
  await inputAndBlur(input, 'ab');
  await expectErrorToContain(canvas, ErrorsKeys.MIN_LEN);

  // Test special characters show error
  await clearAndInputAndBlur(input, 'test#');
  await expectErrorToContain(canvas, ErrorsKeys.SPECIAL_CHARS_NOT_ALLOWED);

  // Test valid input clears all errors
  await clearAndInputAndBlur(input, 'validtext');
  await expectErrorToNotExist(canvas);
};

// Example test functions using the new variable-aware helper
export const testNumberValidationGTEWithSpecificValue = async (canvasElement: HTMLElement, minValue: number = 10) => {
  const { canvas, input } = await getTestElements(canvasElement, 'number');

  // Test number less than minimum shows error with specific value
  await inputAndBlur(input, String(minValue - 1));
  await expectErrorToContain(canvas, ErrorsKeys.NR_GTE, { gte: minValue });

  // Test valid number clears error
  await clearAndInputAndBlur(input, String(minValue + 5));
  await expectErrorToNotExist(canvas);
};

export const testNumberValidationLTEWithSpecificValue = async (canvasElement: HTMLElement, maxValue: number = 100) => {
  const { canvas, input } = await getTestElements(canvasElement, 'number');

  // Test number greater than maximum shows error with specific value
  await inputAndBlur(input, String(maxValue + 1));
  await expectErrorToContain(canvas, ErrorsKeys.NR_LTE, { lte: maxValue });

  // Test valid number clears error
  await clearAndInputAndBlur(input, String(maxValue - 5));
  await expectErrorToNotExist(canvas);
};

export const testWrongDomainWithSpecificDomain = async (
  canvasElement: HTMLElement,
  expectedDomain: string = 'company.com',
) => {
  const { canvas, input } = await getTestElements(canvasElement);

  // Test wrong domain shows error with specific domain
  await inputAndBlur(input, 'user@wrongdomain.com');
  await expectErrorToContain(canvas, ErrorsKeys.WRONG_DOMAIN, { domain: expectedDomain });

  // Test correct format clears error
  await clearAndInputAndBlur(input, 'username');
  await expectErrorToNotExist(canvas);
};

export const testAtDomainNotAllowedWithSpecificDomain = async (
  canvasElement: HTMLElement,
  expectedDomain: string = 'company.com',
) => {
  const { canvas, input } = await getTestElements(canvasElement);

  // Test @domain shows error with specific domain
  await inputAndBlur(input, `user@${expectedDomain}`);
  await expectErrorToContain(canvas, ErrorsKeys.AT_DOMAIN_NOT_ALLOWED, { domain: expectedDomain });

  // Test username without domain clears error
  await clearAndInputAndBlur(input, 'username');
  await expectErrorToNotExist(canvas);
};

export { expectErrorToContain, ValidationTestWrapper } from '../../shared/test-helpers';
