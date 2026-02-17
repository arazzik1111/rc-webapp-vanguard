import React from "react";
import { Form } from "@vanguard/Form/Form";
import { Textarea } from "@vanguard/Textarea/Textarea";
import { useFormConfig } from "@custom-hooks/useFormConfig";
import { within, expect } from "storybook/test";
import { useSelector } from "react-redux";
import { FormRootState, FormSLice } from "./bootstrap/form.test.slice";
import {
  Story,
  createMockFormChange,
  createMockTextareaChange
} from "./_Form.default";

// Mock functions for this story
const formChange = createMockFormChange();
const textareaChange = createMockTextareaChange();

export const FormInputOnBlur: Story = {
  beforeEach: () => {
    // Reset mocks before each test
    formChange.mockClear();
    textareaChange.mockClear();
  },

  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    // await writeInInput("test-id", "123", canvas, { delay: 100 });
    // await writeInInput("base-text-field", "123", canvas, { delay: 100 });
    // await expect(formChange).toBeCalledTimes(2);
    // await expect(textareaChange).toBeCalledTimes(1);
    // await expect(testFieldChange).toBeCalledTimes(1);
  },

  render: (args, context) => {
    const { textValue } = useSelector((s: FormRootState) => s.form);

    const { formConfig } = useFormConfig({
      slice: FormSLice,
      reducer: ((s: FormRootState) => s.form) as any,
      validateOn: "blur",
      inputs: {
        textValue: {
          validation: {
            required: true,
            minLength: 12,
          },
        },
      },
    });

    return (
      <Form config={formConfig} onChange={formChange}>
        <Textarea testId={"test-id"} formconfig={formConfig.textValue} onChange={textareaChange}></Textarea>
      </Form>
    );
  },
};