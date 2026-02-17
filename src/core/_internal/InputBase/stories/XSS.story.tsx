import { Story } from "./_InputBase.default";
import { within, expect, userEvent } from "storybook/test";


export const XSS: Story = {
  args: {
    type: "text",
    highlightUrl: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const input = canvasElement.querySelector('input[type="text"]') as HTMLInputElement;

    const malicious = `"><img src=x onerror=alert(1)>`;

    // Type malicious input
    await userEvent.type(input, malicious);

    // Wait for rendering and sanitization
    await new Promise((resolve) => setTimeout(resolve, 200));

    const highlights = canvasElement.querySelector('.vanguard-input-highlights') as HTMLElement;

    await expect(highlights.querySelector('img')).toBeNull();
  },
};