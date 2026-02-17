import React, { useEffect } from "react";
import { CheckBox } from "../CheckBox";
import { Form } from "@vanguard/Form/Form";
import { within, expect, userEvent } from "storybook/test";
import { Story, testLabels, useCheckboxFormConfig, CheckBoxSlice, checkBoxStore } from "./_CheckBox.default";
import { useAppDispatch } from "@custom-hooks/use-app-dispatch";

export const WithFormConfig: Story = {
  args: {
    label: testLabels.default,
  },
  render: (args) => {
    const { formConfig } = useCheckboxFormConfig();
    const dispatch = useAppDispatch();
    const { resetState } = CheckBoxSlice;

    useEffect(() => {
      dispatch(resetState());
    }, []);

    return (
      <Form config={formConfig}>
        <CheckBox formconfig={formConfig.checkbox} {...args} />
      </Form>
    );
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    let state = checkBoxStore.getState();
    await expect(state.CheckBox.checkbox).toBe(false);

    const label = await canvas.findByText(args.label as string);
    const user = userEvent.setup();
    await user.click(label);

    state = checkBoxStore.getState();
    await expect(state.CheckBox.checkbox).toBe(true);
  },
};