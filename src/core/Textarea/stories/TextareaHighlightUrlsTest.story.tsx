import { Story } from "./_Textarea.default";
import { within, expect } from "storybook/test";
import { wait } from "@helpers/wait";

export const TextareaHighlightUrlsTest: Story = {
  args: {
    highlightUrl: true,
    highlightUrlType: "info",
    value: "This is a textarea containing urls: http://test1.com\n\n\n\nhttp://test2.com\n",
  },
  play: async ({ canvasElement }) => {
    await wait(100);
    const highlightedUrl1 = within(canvasElement).getByText("http://test1.com");
    const highlightedUrl2 = within(canvasElement).getByText("http://test2.com");
    await expect(highlightedUrl1).toHaveClass("vanguard-input-mark-blue");
    await expect(highlightedUrl2).toHaveClass("vanguard-input-mark-blue");
  },
};

