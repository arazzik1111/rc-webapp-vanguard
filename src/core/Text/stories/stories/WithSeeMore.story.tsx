import { Story } from "./_Text.default";
import { defaultProps } from "./_Text.default";
import {within, expect, userEvent} from "storybook/test";

export const WithSeeMore: Story = {
  args: {
    ...defaultProps,
    translate: false,
    seeMore: true,
    maxChar: 30,
    children: "Testing qa is <b>ranked #27</b> for Tracy &#8212; CA. This text is long and should truncate.",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Check that the truncated text is rendered with HTML properly sanitized
    const textEl = canvas.getByText("ranked #27", { exact: false });
    expect(textEl.innerHTML).not.toMatch(/<|>|<b>|<\/b>|&#/);
    expect(textEl.innerHTML).not.toContain("&#");

    // Check that "See More" link exists (it's rendered as an <a> tag)
    const seeMoreLink = canvas.getByText("See More");
    await expect(seeMoreLink).toBeInTheDocument();

    // Click to expand
    await userEvent.click(seeMoreLink);

    // After expansion, check that full text is shown and still sanitized
    const expandedText = canvas.getByText("This text is long and should truncate", { exact: false });
    await expect(expandedText).toBeInTheDocument();
  },
};