import React from "react";
import { SbJumpPageBackground } from "@test-utils/get-storybook-decorator";
import { FontWeights, Text } from "@vanguard/Text/Text";
import { within, expect } from "storybook/test";
import { Story } from "./_FrostedGlass.default";
import { FrostedGlass } from "../FrostedGlass";

export const WithTestId: Story = {
  render: () => (
    <SbJumpPageBackground>
      <FrostedGlass testId="frosted-glass-test">
        <Text textTight={true} fontWeight={FontWeights.medium}>
          Frosted Glass with testId
        </Text>
      </FrostedGlass>
    </SbJumpPageBackground>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const frostedGlass = canvas.getByTestId("frosted-glass-test");
    await expect(frostedGlass).toBeInTheDocument();
    const text = canvas.getByText("Frosted Glass with testId");
    await expect(text).toBeInTheDocument();
  },
};