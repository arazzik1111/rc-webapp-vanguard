import { Story } from "./_Text.default";
import { defaultProps } from "./_Text.default";
import { within, expect } from "storybook/test";

export const WithoutTranslate: Story = {
  args: {
    ...defaultProps,
    translate: false,
    children: "Testing qa is <b>ranked #27</b> for Tracy &#8212; CA",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textEl = canvas.getByText("ranked", { exact: false });

    // Should not contain raw HTML angle brackets or encoded entities
    expect(textEl.innerHTML).not.toMatch(/<|>|<b>|<\/b>|&#/);
    expect(textEl.innerHTML).not.toContain("&#");

    // Should contain properly sanitized HTML - check the parent element that contains the <b> tag
    const parentEl = textEl.parentElement;
    if (parentEl) {
      expect(parentEl.innerHTML).toMatch(/<b>|<em>|<\/b>|<\/em>/);
    }
    // After you locate textEl and parentEl …
    expect(parentEl!.innerHTML).not.toMatch(/<script|onerror|javascript:/i);
    expect(parentEl!.querySelectorAll("img, iframe, script").length).toBe(0);
  },
};