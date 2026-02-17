import { Story } from "./_Text.default";
import { defaultProps } from "./_Text.default";
import { within, expect } from "storybook/test";
import { rcWindow } from "@stores/window.store.ts";

export const WithTranslate: Story = {
  beforeEach:() => {
    rcWindow['TranslationsData'] = {
      "Testing qa is <b>ranked #27</b> for Tracy &#8212; CA" :"Testing qa is <b>ranked #27</b> for Tracy &#8212; CA Translated"
    }
  },
  afterEach:() => {
    rcWindow['TranslationsData'] = undefined;
  },
  args: {
    ...defaultProps,
    translate: true,
    children: "Testing qa is <b>ranked #27</b> for Tracy &#8212; CA",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textEl = canvas.getByText("ranked", { exact: false });

    // Should not contain raw HTML angle brackets or encoded entities
    await expect(textEl.innerHTML).not.toMatch(/<|>|<b>|<\/b>|&#/);
    await expect(textEl.innerHTML).not.toContain("&#");

    // Should contain properly sanitized HTML - check the parent element that contains the <b> tag
    const parentEl = textEl.parentElement;
    if (parentEl) {
      await expect(parentEl.innerHTML).toMatch(/<b>|<em>|<\/b>|<\/em>/);
    }
    await expect(parentEl!.innerHTML).not.toMatch(/<script|onerror|javascript:/i);
    await expect(parentEl!.querySelectorAll("img, iframe, script").length).toBe(0);

  },
};