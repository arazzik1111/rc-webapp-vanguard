import React from "react";
import { Form } from "@vanguard/Form/Form";
import { Textarea } from "@vanguard/Textarea/Textarea";
import { useFormConfig } from "@custom-hooks/useFormConfig";
import { within, expect } from "storybook/test";
import { useSelector } from "react-redux";
import { writeInInput } from "@test-utils/input-test-utils";
import { TextField } from "@mui/material";
import { FormRootState, FormSLice } from "./bootstrap/form.test.slice";
import {
  Story,
  createMockFormChange,
  createMockTextareaChange,
  createMockTestFieldChange
} from "./_Form.default";

// Mock functions for this story
const formChange = createMockFormChange();
const textareaChange = createMockTextareaChange();
const testFieldChange = createMockTestFieldChange();

export const FormInputStory: Story = {
  beforeEach: () => {
    // Reset mocks before each test
    formChange.mockClear();
    textareaChange.mockClear();
    testFieldChange.mockClear();
  },

  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    await writeInInput("test-id", "123", canvas, { delay: 100 });
    await writeInInput("base-text-field", "123", canvas, { delay: 100 });
    await expect(formChange).toBeCalledTimes(2);
    await expect(textareaChange).toBeCalledTimes(1);
    await expect(testFieldChange).toBeCalledTimes(1);
  },

  render: (args, context) => {
    const { textValue } = useSelector((s: FormRootState) => s.form);

    const { formConfig } = useFormConfig({
      slice: FormSLice,
      reducer: ((s: FormRootState) => s.form) as any,
      inputs: {
        textValue: {},
      },
    });

    return (
      <Form config={formConfig} onChange={formChange}>
        {textValue}
        <Textarea testId={"test-id"} formconfig={formConfig.textValue} onChange={textareaChange}></Textarea>
        <TextField onChange={testFieldChange} data-testid={"base-text-field"}></TextField>
      </Form>
    );
  },
};