import React from "react";
import { SbJumpPageBackground } from "@test-utils/get-storybook-decorator";
import { FontWeights, Text } from "@vanguard/Text/Text";
import { within, expect } from "storybook/test";
import { Story } from "./_FrostedGlass.default";
import { FrostedGlass } from "../FrostedGlass";

export const Default: Story = {
  render: () => (
    <SbJumpPageBackground>
      <FrostedGlass>
        <Text textTight={true} fontWeight={FontWeights.medium}>
          Frosted Glass is used for backgrounds
        </Text>
        <Text textTight={true} fontWeight={FontWeights.medium}>
          This is an example of the implementation
        </Text>
      </FrostedGlass>
    </SbJumpPageBackground>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const text1 = canvas.getByText("Frosted Glass is used for backgrounds");
    const text2 = canvas.getByText("This is an example of the implementation");
    await expect(text1).toBeInTheDocument();
    await expect(text2).toBeInTheDocument();
  },
};