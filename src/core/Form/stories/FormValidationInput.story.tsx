import React from "react";
import { Form } from "@vanguard/Form/Form";
import { Input } from "@vanguard/Input/Input";
import { useFormConfig } from "@custom-hooks/useFormConfig";
import { within, expect, userEvent } from "storybook/test";
import { useSelector } from "react-redux";
import { FormRootState, FormSLice } from "./bootstrap/form.test.slice";
import { Story, createMockFormChange, waitForFormUpdate } from "./_Form.default";

export const FormValidationInput: Story = {
  render: () => {
    const [isValid, setIsValid] = React.useState<boolean>(true);
    const [hasChanges, setHasChanges] = React.useState<boolean>(false);
    const [currentField, setCurrentField] = React.useState<string>("null");
    const [currentInputValue, setCurrentInputValue] = React.useState<string>('');

    const { formConfig } = useFormConfig({
      slice: FormSLice,
      reducer: ((s: FormRootState) => s.form) as any,
      inputs: {
        textValue: {
          fieldType: "Input",
          validation: {
            required: true,
            minLength: 5,
          },
        },
      },
    });

    const currentStateValue = useSelector((state: FormRootState) => state.form.textValue);

    const handleFormChange = (status: any) => {
      console.log('Form change status:', status);
      setIsValid(status.isValid);
      setHasChanges(status.hasChanges);
      setCurrentField(status.currentConfig?.stateFieldName || "null");
      // Track the current input value regardless of validation
      if (status.currentConfig?.stateFieldName === 'textValue') {
        const currentValue = status.currentConfig?.getValue?.() || '';
        setCurrentInputValue(currentValue);
      }
    };

    return (
      <div data-testid="form-showcase">
        <Form config={formConfig} onChange={handleFormChange}>
          <Input label="Email Address" type="email" formconfig={formConfig.textValue} testId="email-input" />
        </Form>
        <div className="debug-section" data-testid="debug-section">
          <p>Form validation test for Input</p>
          <div data-testid="validation-status">
            <p>
              <strong>Form Status:</strong>
            </p>
            <p>
              Valid: <span data-testid="form-valid">{isValid ? "true" : "false"}</span>
            </p>
            <p>
              Has Changes: <span data-testid="form-changes">{hasChanges ? "true" : "false"}</span>
            </p>
            <p>
              Current Field: <span data-testid="form-config">{currentField}</span>
            </p>
            <p>
              Current Input Value: <span data-testid="input-value">{currentInputValue || "(empty)"}</span>
            </p>
            <p>
              Stored State Value: <span data-testid="state-value">{currentStateValue || "(empty)"}</span>
            </p>
          </div>
        </div>
      </div>
    );
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const user = userEvent.setup({ delay: 10 });

    // Find the actual input element within the TextField wrapper
    const emailInputWrapper = canvas.getByTestId("email-input");
    const emailInput = within(emailInputWrapper).getByRole("textbox");
    const validStatus = canvas.getByTestId("form-valid");
    const changesStatus = canvas.getByTestId("form-changes");
    const inputValue = canvas.getByTestId("input-value");
    const stateValue = canvas.getByTestId("state-value");

    // Test 1: Type incorrect email value (too short and invalid format)
    await user.clear(emailInput);
    await user.type(emailInput, "abc");
    await user.tab(); // Trigger blur to validate
    await waitForFormUpdate(200);

    // The form should be invalid at this point due to:
    // - minLength: 5 (only 3 characters)
    // - email: true (not a valid email format)
    await expect(validStatus).toHaveTextContent("false");
    await expect(changesStatus).toHaveTextContent("true");
    await expect(inputValue).toHaveTextContent("abc");
    // For Input, invalid values might still be stored depending on validation strategy
    await expect(stateValue).toHaveTextContent("abc");

    // Test 2: Type correct email value
    await user.clear(emailInput);
    await user.type(emailInput, "test@example.com");
    await user.tab(); // Trigger blur to validate
    await waitForFormUpdate(200);

    // The form should be valid now
    await expect(validStatus).toHaveTextContent("true");
    await expect(changesStatus).toHaveTextContent("true");
    await expect(emailInput).toHaveValue("test@example.com");
    await expect(inputValue).toHaveTextContent("test@example.com");
    await expect(stateValue).toHaveTextContent("test@example.com");
  },
};
