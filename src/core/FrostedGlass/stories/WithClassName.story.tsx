import React from "react";
import { SbJumpPageBackground } from "@test-utils/get-storybook-decorator";
import { FontWeights, Text } from "@vanguard/Text/Text";
import { within, expect } from "storybook/test";
import { Story } from "./_FrostedGlass.default";
import { FrostedGlass } from "../FrostedGlass";

export const WithClassName: Story = {
  render: () => (
    <SbJumpPageBackground>
      <FrostedGlass className="custom-frosted-glass">
        <Text textTight={true} fontWeight={FontWeights.medium}>
          Frosted Glass with custom class
        </Text>
      </FrostedGlass>
    </SbJumpPageBackground>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const text = canvas.getByText("Frosted Glass with custom class");
    await expect(text).toBeInTheDocument();
    // Check that the custom class is applied
    const frostedGlass = text.closest('.custom-frosted-glass');
    await expect(frostedGlass).toBeInTheDocument();
  },
};