import React from "react";
import { AvatarCheckbox } from "../AvatarCheckbox";
import { within, userEvent, expect } from "storybook/test";
import { Story, testIcons } from "./_AvatarCheckbox.default";
import { avatarCheckBoxStore } from "./bootstrap/AvatarCheckBox.slice";
import { Form } from "@vanguard/Form/Form";
import { useAvatarCheckboxFormConfig } from "./bootstrap/AvatarCheckbox.form-config";

export const WithRedux: Story = {
  args: {
    icon: testIcons.facebook,
  },
  render: (args, context) => {
    const { formConfig } = useAvatarCheckboxFormConfig();
    return (
      <div style={{ display: "inline-flex", flexDirection: "column", gap: 5 }}>
        <Form config={formConfig}>
          <AvatarCheckbox {...args} formConfig={formConfig} checkboxFormConfig={formConfig.avatarCheckbox} />
        </Form>
      </div>
    );
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    let state = avatarCheckBoxStore.getState();
    await expect(state.AvatarCheckBox.avatarCheckbox).toBe(false);
    const user = userEvent.setup();
    const label = await canvas.findByRole("checkbox");
    await user.click(label.parentElement as HTMLElement);
    state = avatarCheckBoxStore.getState();
    await expect(state.AvatarCheckBox.avatarCheckbox).toBe(true);
  },
};