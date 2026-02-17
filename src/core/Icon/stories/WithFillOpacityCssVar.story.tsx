import React from "react";
import { within, expect, waitFor } from "storybook/test";
import { Story, testIcon, testColors } from "./_Icon.default";

export const WithFillOpacityCssVar: Story = {
  args: {
    children: testIcon,
    hasCircle: true,
    fillColor: testColors.cssVar,
  },
};