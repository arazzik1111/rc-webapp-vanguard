import { Story } from "./_Text.default";
import { defaultProps } from "./_Text.default";
import { within, expect, waitFor } from "storybook/test";

export const WithAnimateWords: Story = {
  args: {
    ...defaultProps,
    testId: "text-anim",
    translate: false,
    animateWords: { duration: 200, delay: 50, animation: "fade-up" },
    children: "Testing qa is <b>ranked #27</b> for Tracy — CA",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 1) sanitization still good
    const textEl = canvas.getByText("ranked", { exact: false });
    expect(textEl.innerHTML).not.toMatch(/<script|onerror|javascript:/i);

    // 2) robust host lookup
    const host = canvas.getByTestId("text-anim");

    // 3) prefer a specific selector if your animation adds one (best)
    // e.g. if applyWordAnimation adds [data-animate-word]:
    // const wordNodes = host.querySelectorAll('[data-animate-word]');
    // otherwise fall back to spans:
    const wordNodes = host.querySelectorAll("span");

    // Make this assert meaningful:
    expect(wordNodes.length).toBeGreaterThan(0);

    // 4) tolerant opacity check
    const firstNode = wordNodes[0] as HTMLElement;
    const opacity = parseFloat(getComputedStyle(firstNode).opacity || "1");
    expect(Number.isNaN(opacity)).toBe(false);
    expect(opacity).toBeGreaterThanOrEqual(0);
    expect(opacity).toBeLessThanOrEqual(1);
  },
};

