import { disableControls, SbDecorator } from "@test-utils/get-storybook-decorator";
import { ProgressBar } from "./ProgressBar";
import { StoryObj } from "@storybook/react/*";
import { fn, userEvent, within, expect, screen } from "storybook/test";

export default {
  ...SbDecorator({
    title: "Vanguard/ProgressBar",
    component: ProgressBar,
    extra: {
      ...disableControls([""]),
    }
  })
};

/**
* We create the story type referencing its component
*/
type Story = StoryObj<typeof ProgressBar>;

export const ProgressBarWithValue: Story = {
  args: {
    progressValue: 50,
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
  },
};

export const ProgressBarIndeterminate: Story = {
  args: {
    // progressValue: 50,
    variant: 'buffer',
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
  },
};