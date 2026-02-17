import React from "react";
import { SbJumpPageBackground } from "@test-utils/get-storybook-decorator";
import { FontWeights, Text } from "@vanguard/Text/Text";
import { within, expect } from "storybook/test";
import { Story } from "./_FrostedGlass.default";
import { FrostedGlass } from "../FrostedGlass";

export const WithRole: Story = {
  render: () => (
    <SbJumpPageBackground>
      <FrostedGlass role="article">
        <Text textTight={true} fontWeight={FontWeights.medium}>
          Frosted Glass with article role
        </Text>
      </FrostedGlass>
    </SbJumpPageBackground>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const text = canvas.getByText("Frosted Glass with article role");
    await expect(text).toBeInTheDocument();
    // Check that the role is applied
    const frostedGlass = text.closest('[role="article"]');
    await expect(frostedGlass).toBeInTheDocument();
  },
};