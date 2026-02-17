import { Story } from "./_Text.default";
import { defaultProps } from "./_Text.default";
import { within, expect } from "storybook/test";

export const WithNewLines: Story = {
  args: {
    ...defaultProps,
    translate: false,
    allowNewLines: true,
    children: "Line 1<br>Line 2 &#8212; <b>bold</b>",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textEl = canvas.getByText("Line 2", { exact: false });

    // With allowNewLines=true, some HTML like <br> and <b> should be allowed
    expect(textEl.innerHTML).toMatch(/<br>|<b>|<\/b>/);

    const host = textEl.closest("[data-testid]") ?? textEl.parentElement!;
    const brCount = host.innerHTML.match(/<br\s*\/?>/g)?.length ?? 0;
    expect(brCount).toBeGreaterThan(0);
    expect(host.innerHTML).not.toMatch(/<script|onerror|javascript:/i);

  },
};