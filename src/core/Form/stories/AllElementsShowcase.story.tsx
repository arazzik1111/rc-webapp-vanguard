import React from "react";
import { Form } from "@vanguard/Form/Form";
import { ColorPicker } from "@vanguard/ColorPicker/ColorPicker";
import { Input } from "@vanguard/Input/Input";
import { useFormConfig } from "@custom-hooks/useFormConfig";
import { within, expect, userEvent } from "storybook/test";
import { useSelector } from "react-redux";
import classNames from "classnames";
import { ShowcaseRootState, ShowcaseSlice } from "./bootstrap/showcase.test.slice";
import {
  Story,
  createMockFormChange,
  createMockColorPickerChange,
  createMockInputTextChange,
  createMockInputNumberChange,
  createMockInputEmailChange,
  createMockInputPasswordChange,
  testColors,
  testInputValues,
  selectors,
} from "./_FormShowcase.default";
import { PhoneNumber } from '@vanguard/PhoneNumber';
import { testCountryCodes } from '@vanguard/PhoneNumber/stories/_PhoneNumber.default.ts';

/**
 * FORM SHOWCASE TEST SCOPE & RULES
 *
 * This test is designed to be a comprehensive showcase of ALL form elements
 * integrated within a single Form component. The purpose is to:
 *
 * 1. SHOWCASE FUNCTIONALITY: Demonstrate how each form element works within the Form context
 * 2. INTEGRATION TESTING: Verify that all elements work together harmoniously
 * 3. VISUAL DOCUMENTATION: Serve as a living documentation for developers
 * 4. REGRESSION PREVENTION: Catch breaking changes across multiple form elements
 *
 * RULES FOR ADDING NEW ELEMENTS:
 * - Add each new form element to the bootstrap/showcase.test.slice.ts
 * - Include the element in the formConfig with appropriate validation
 * - Add the element to the render function with proper form integration
 * - Add basic interaction tests in the play function
 * - Keep tests focused on integration, not exhaustive element-specific testing
 * - Maintain alphabetical order for consistency
 *
 * CURRENT ELEMENTS SHOWCASED:
 * - ColorPicker: Color selection with hex validation
 * - Input (Text): Text input with validation
 * - Input (Number): Numeric input with validation
 * - Input (Email): Email input with validation
 * - Input (Password): Password input with validation
 *
 * PLANNED ELEMENTS TO ADD:
 * - Checkbox, Dropdown, Radio, Slider, Switch, Textarea, etc.
 */

// Mock functions for this story
const formChange = createMockFormChange();
const colorPickerChange = createMockColorPickerChange();
const inputTextChange = createMockInputTextChange();
const inputNumberChange = createMockInputNumberChange();
const inputEmailChange = createMockInputEmailChange();
const inputPasswordChange = createMockInputPasswordChange();

export const AllElementsShowcase: Story = {
  beforeEach: () => {
    // Reset mocks before each test
    formChange.mockClear();
    colorPickerChange.mockClear();
    inputTextChange.mockClear();
    inputNumberChange.mockClear();
    inputEmailChange.mockClear();
    inputPasswordChange.mockClear();
  },

  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // Test ColorPicker interaction - target the text input specifically to avoid duplicate color picker input
    // const formShowcase = canvas.getByTestId("form-showcase");

    // // Find the text input within the ColorPicker component using CSS selector
    // // The InputBase with formFieldType="ColorPicker" gets the class "vanguard-input-type-colorpicker"
    // const colorTextInput = formShowcase.querySelector(
    //   '.vanguard-input-type-colorpicker input[type="text"]',
    // ) as HTMLInputElement;

    // await expect(colorTextInput).toBeInTheDocument();
    // await expect(colorTextInput).toHaveDisplayValue(testColors.blue);

    // // Change color value
    // await userEvent.clear(colorTextInput);
    // await userEvent.type(colorTextInput, testColors.red);

    // // Wait for debounced callback (ColorPicker uses 50ms debounce)
    // await new Promise((resolve) => setTimeout(resolve, 100));

    // // Verify form change was triggered
    // await expect(colorPickerChange).toHaveBeenCalled();

    // Test Text Input interaction
    const textInputContainer = canvas.getByTestId("input-text-showcase");
    await expect(textInputContainer).toBeInTheDocument();

    const textInputField = textInputContainer.querySelector('input[type="text"]') as HTMLInputElement;
    await expect(textInputField).toBeInTheDocument();
    await expect(textInputField).toHaveDisplayValue(testInputValues.text.initial);

    await userEvent.clear(textInputField);
    await userEvent.type(textInputField, testInputValues.text.updated);
    await expect(inputTextChange).toHaveBeenCalled();

    // Test Number Input interaction
    const numberInputContainer = canvas.getByTestId("input-number-showcase");
    await expect(numberInputContainer).toBeInTheDocument();

    const numberInputField = numberInputContainer.querySelector('input[type="number"]') as HTMLInputElement;
    await expect(numberInputField).toBeInTheDocument();
    await expect(numberInputField).toHaveDisplayValue(testInputValues.number.initial.toString());

    await userEvent.clear(numberInputField);
    await userEvent.type(numberInputField, testInputValues.number.updated.toString());
    await expect(inputNumberChange).toHaveBeenCalled();

    // Test Email Input interaction
    const emailInputContainer = canvas.getByTestId("input-email-showcase");
    await expect(emailInputContainer).toBeInTheDocument();

    const emailInputField = emailInputContainer.querySelector('input[type="email"]') as HTMLInputElement;
    await expect(emailInputField).toBeInTheDocument();
    await expect(emailInputField).toHaveDisplayValue(testInputValues.email.initial);

    await userEvent.clear(emailInputField);
    await userEvent.type(emailInputField, testInputValues.email.updated);
    await expect(inputEmailChange).toHaveBeenCalled();

    // Test DatePicker interaction - Commented out as DatePicker is not working in FORM
    // const datePickerContainer = canvas.getByTestId("datepicker-showcase");
    // await expect(datePickerContainer).toBeInTheDocument();

    // // Find the input field within the DatePicker
    // const datePickerInput = datePickerContainer.querySelector('input[type="text"]') as HTMLInputElement;
    // await expect(datePickerInput).toBeInTheDocument();

    // // Click to open the DatePicker
    // await userEvent.click(datePickerInput);

    // // Wait for the picker to open and then verify the change callback
    // await new Promise((resolve) => setTimeout(resolve, 100));

    // // Note: For DatePicker, we're mainly testing that it renders and can be interacted with
    // // Full calendar interaction testing would be more complex and is better suited for component-specific tests

    // Test Password Input interaction
    const passwordInputContainer = canvas.getByTestId("input-password-showcase");
    await expect(passwordInputContainer).toBeInTheDocument();

    const passwordInputField = passwordInputContainer.querySelector('input[type="password"]') as HTMLInputElement;
    await expect(passwordInputField).toBeInTheDocument();
    await expect(passwordInputField).toHaveDisplayValue(testInputValues.password.initial);

    await userEvent.clear(passwordInputField);
    await userEvent.type(passwordInputField, testInputValues.password.updated);
    await expect(inputPasswordChange).toHaveBeenCalled();

    // Add tests for other form elements here as they are added
  },

  render: (args, context) => {
    const { phoneNumberValue, colorValue, inputTextValue, inputNumberValue, inputEmailValue, inputPasswordValue } =
      useSelector((s: ShowcaseRootState) => s.showcase);

    const { formConfig } = useFormConfig({
      slice: ShowcaseSlice,
      reducer: ((s: ShowcaseRootState) => s.showcase) as any,
      inputs: {
        phoneNumberValue: {
          validation: {
            required: true,
            validatePhone: true,
          },
        },
        colorValue: {
          validation: {
            required: true,
          },
        },
        inputEmailValue: {
          validation: {
            required: true,
            validateEmail: true,
          },
        },
        inputNumberValue: {
          validation: {
            required: true,
            gte: 1,
            lte: 1000,
          },
        },
        inputPasswordValue: {
          validation: {
            required: true,
            minLength: 8,
          },
        },
        inputTextValue: {
          validation: {
            required: true,
            minLength: 3,
          },
        },
        // Add new form element configurations here in alphabetical order
      },
    });

    return (
      <div
        className={classNames("form-showcase-container")}
        style={{ padding: "20px", maxWidth: "600px" }}
        data-testid="form-showcase"
      >
        <h2>Form Elements Showcase</h2>
        <p>This form demonstrates all available form elements working together.</p>

        <Form config={formConfig} onChange={formChange}>
          {/* ColorPicker Section */}
          <div className={classNames("form-section")} style={{ marginBottom: "24px" }}>
            <h3>Color Selection</h3>
            <ColorPicker
              label="Choose a color"
              color={colorValue}
              onColorChange={colorPickerChange}
              maxWidth="300px"
            />
          </div>

          {/* DatePicker Section - Commented out as it's not working in FORM */}
          {/* <div className={classNames("form-section")} style={{ marginBottom: "24px" }}>
            <h3>Date Selection(Not working in FORM FIx)</h3>
            <div data-testid="datepicker-showcase">
              <DatePicker
                label="Date Picker"
                value={datePickerValue}
                formconfig={formConfig.datePickerValue}
                onChange={datePickerChange}
                locale="en-US"
              />
            </div>
          </div> */}

          {/* Input Sections - All Types */}
          <div className={classNames("form-section")} style={{ marginBottom: "24px" }}>
            <h3>Text Inputs</h3>

            {/* Text Input */}
            <div style={{ marginBottom: "16px" }}>
              <Input
                label="Text Input"
                value={inputTextValue}
                formconfig={formConfig.inputTextValue}
                onChange={inputTextChange}
                testId="input-text-showcase"
                placeholder="Enter some text..."
                type="text"
              />
            </div>

            {/* Number Input */}
            <div style={{ marginBottom: "16px" }}>
              <Input
                label="Number Input"
                value={inputNumberValue}
                formconfig={formConfig.inputNumberValue}
                onChange={inputNumberChange}
                testId="input-number-showcase"
                placeholder="Enter a number..."
                type="number"
              />
            </div>

            {/* Email Input */}
            <div style={{ marginBottom: "16px" }}>
              <Input
                label="Email Input"
                value={inputEmailValue}
                formconfig={formConfig.inputEmailValue}
                onChange={inputEmailChange}
                testId="input-email-showcase"
                placeholder="Enter your email..."
                type="email"
              />
            </div>

            {/* Password Input */}
            <div style={{ marginBottom: "16px" }}>
              <Input
                label="Password Input"
                value={inputPasswordValue}
                formconfig={formConfig.inputPasswordValue}
                onChange={inputPasswordChange}
                testId="input-password-showcase"
                placeholder="Enter your password..."
                type="password"
              />
            </div>
          </div>

          {/* Add new form elements here in alphabetical order */}
          {/* Example structure for future elements:
          <div className={classNames("form-section")} style={{ marginBottom: "24px" }}>
            <h3>Element Category</h3>
            <ElementComponent
              formconfig={formConfig.elementValue}
              onChange={elementChange}
            />
          </div>
          */}

          {/* Phone number Section */}
          <h3>Phone number Selection</h3>
          <div style={{ marginBottom: "16px" }}>
            <PhoneNumber
              phoneNumberBase={phoneNumberValue}
              formConfig={formConfig.phoneNumberValue}
              countryCode={testCountryCodes.IN}
            />
          </div>
        </Form>

        {/* Debug Information */}
        <div
          className={classNames("debug-section")}
          style={{ marginTop: "32px", padding: "16px", backgroundColor: "#f5f5f5", borderRadius: "4px" }}
        >
          <h4>Current Form State:</h4>
          <pre style={{ fontSize: "12px", margin: 0 }}>
            {JSON.stringify(
              {
                inputTextValue,
                inputNumberValue,
                inputEmailValue,
                inputPasswordValue,
                colorValue,
                phoneNumberValue,
              },
              null,
              2,
            )}
          </pre>
        </div>
      </div>
    );
  },
};
