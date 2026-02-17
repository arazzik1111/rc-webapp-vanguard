import { Story } from "./_Textarea.default";
import { within, expect, userEvent } from "storybook/test";
import { wait } from "@helpers/wait";

export const TestWriteInsideInput: Story = {
  args: {
    value: "This is a highlight word test",
    valueAsDefaultValue: true,
    testId: "testId",
  },
  play: async ({ canvasElement }) => {
    await wait(100);
    const canvas = within(canvasElement);
    // Find the textarea inside the testId wrapper
    const wrapper = canvas.getByTestId("testId");
    const textarea = wrapper.querySelector("textarea");
    if (!textarea) throw new Error("No textarea found inside testId wrapper");
    await userEvent.clear(textarea);
    await userEvent.type(textarea, "This is a highlight word testwhat", { delay: 1 });
    await expect(textarea).toHaveValue("This is a highlight word testwhat");
  },
};

