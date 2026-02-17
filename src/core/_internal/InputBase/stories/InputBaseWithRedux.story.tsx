import React, { useEffect } from "react";
import { within, expect, userEvent } from "storybook/test";
import { useAppDispatch } from "@custom-hooks/use-app-dispatch";
import { useSelector } from "react-redux";
import { Form } from "@vanguard/Form/Form";
import { InputBase } from "@vanguard/_internal/InputBase/InputBase";
import {
  InputBaseRootState,
  InputBaseSlice,
  inputBaseStore,
} from "@vanguard/_internal/InputBase/stories/bootstrap/InputBase.slice";
import { useInputBaseFormConfig } from "@vanguard/_internal/InputBase/stories/bootstrap/InputBase.form-config";
import { wait } from "@helpers/wait";
import { Story } from "./_InputBase.default";

export const InputBaseWithRedux: Story = {
  args: {
    label: "With Redux",
    placeholder: "Enter text here",
  },
  render: (args, context) => {
    const { formConfig } = useInputBaseFormConfig();
    const dispatch = useAppDispatch();
    const { resetState, setInputBase } = InputBaseSlice;
    const { inputBase } = useSelector((state: InputBaseRootState) => state.InputBase);

    useEffect(() => {
      dispatch(resetState());
      dispatch(setInputBase(""));
    }, []);

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
        <Form config={formConfig}>
          <InputBase formconfig={formConfig.inputBase} {...args} />
        </Form>
      </div>
    );
  },

  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    let state = inputBaseStore.getState();
    await wait(0);
    await expect(state.InputBase.inputBase).toBe("");

    const user = userEvent.setup();
    const inputElement = canvas.getAllByRole("textbox")[1];

    // Type in the input
    await user.click(inputElement);
    await user.keyboard("Test input value");

    // Wait for state to update
    await wait(100);
    state = inputBaseStore.getState();
    await expect(state.InputBase.inputBase).toBe("Test input value");
  },
};