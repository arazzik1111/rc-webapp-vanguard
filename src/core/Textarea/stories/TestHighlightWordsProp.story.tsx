import { Story } from "./_Textarea.default";
import { within, expect } from "storybook/test";
import { wait } from "@helpers/wait";

export const TestHighlightWordsProp: Story = {
  args: {
    highlightWords: ["highlight"],
    value: "This is a highlight word test",
    valueAsDefaultValue: true,
  },
  play: async ({ canvasElement }) => {
    await wait(100);
    const highlightedWord = within(canvasElement).getByText("highlight");
    await expect(highlightedWord).toHaveClass("vanguard-input-mark-green");
  },
};

