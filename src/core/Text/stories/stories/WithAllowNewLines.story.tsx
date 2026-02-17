import { Story } from "./_Text.default";
import { defaultProps } from "./_Text.default";
import { within, expect } from "storybook/test";

export const WithAllowNewLines: Story = {
  args: {
    ...defaultProps,
    translate: false,
    allowNewLines: true,
    children: "Line 1\nLine 2 <b>bold</b>",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textEl = canvas.getByText("Line 2", { exact: false });

    // With allowNewLines=true, newlines should be converted to <br> and HTML should be allowed
    expect(textEl.innerHTML).toMatch(/<br>|<b>|<\/b>/);

    const host = textEl.closest("[data-testid]") ?? textEl.parentElement!;
    const brCount = host.innerHTML.match(/<br\s*\/?>/g)?.length ?? 0;
    expect(brCount).toBeGreaterThan(0);
    expect(host.innerHTML).not.toMatch(/<script|onerror|javascript:/i);

  },
};