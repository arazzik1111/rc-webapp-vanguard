import { Story } from "./_Text.default";
import { defaultProps } from "./_Text.default";
import { within, expect } from "storybook/test";

export const WithSeeMoreMaxLines: Story = {
  args: {
    ...defaultProps,
    translate: false,
    maxLines: 2,
    maxChar: 50,
    seeMore: { seeMoreVisible: true, seeMoreContent: <em>Continue</em> },
    children: "Line1 <b>bold</b>\nLine2 <i>italic</i>\nLine3 more content.",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const node = canvas.getByText("Line2", { exact: false });
    const seeMoreBlock = node.closest(".see-more") as HTMLElement;
    expect(seeMoreBlock).toBeTruthy();
    // style hint present:
    expect(seeMoreBlock.getAttribute("style") || "").toMatch(/-webkit-line-clamp:\s*2/i);

    // still sanitized:
    expect(seeMoreBlock.innerHTML).not.toMatch(/<script|onerror|javascript:/i);
  },
};
