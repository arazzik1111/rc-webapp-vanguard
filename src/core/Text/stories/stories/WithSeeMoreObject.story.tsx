import { Story } from "./_Text.default";
import { defaultProps } from "./_Text.default";
import {within, expect, userEvent} from "storybook/test";

export const WithSeeMoreObject: Story = {
  args: {
    ...defaultProps,
    translate: false,
    maxChar: 25,
    seeMore: {
      seeMoreVisible: true,
      seeMoreContent: <b>See More</b>,
      seeLessContent: <b>See Less</b>,
    },
    children: "Testing <b>ranked #27</b> for Tracy &#8212; CA — long long long content.",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByText("See More", { exact: false });
    const host = link.parentElement!;
    expect(host.innerHTML).not.toMatch(/<script|onerror|javascript:/i);

    await userEvent.click(link);
    const less = canvas.getByText("See Less", { exact: false });
    const after = less.parentElement!;
    expect(after.innerHTML).not.toMatch(/<script|onerror|javascript:/i);
    expect(after.innerHTML).toMatch(/<b>|<\/b>/); // safe markup preserved
  },
};
