// Decorate stories with provided settings
import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { Textarea } from "@vanguard/Textarea/Textarea";
import { StoryObj } from "@storybook/react";
import { TEXTAREA_STORY_CONTROLS } from "@vanguard/Textarea/stories/helpers/Textarea.tests.constants";

export default {
  ...SbDecorator({
    title: "Vanguard/Textarea",
    component: Textarea,
    extra: TEXTAREA_STORY_CONTROLS,

    opts: {
      withRedux: true,
    },
  }),
};

type Story = StoryObj<typeof Textarea>;

export const TEST: Story = {
  args: {
    popoverHighlight: {
      detector: "link",
      variant: "basicLink",
    },
    value:
      "This is a text with a link inside https://google.ro and another www.google.com and maybe just google.ro and then we have other things",
  },
  play: async ({ canvasElement }) => {},
};
