import React from "react";
import { SbJumpPageBackground } from "@test-utils/get-storybook-decorator";
import { FontWeights, Text } from "@vanguard/Text/Text";
import { within, expect } from "storybook/test";
import { Story } from "./_FrostedGlass.default";
import { FrostedGlass } from "../FrostedGlass";

export const WithStyle: Story = {
  render: () => (
    <SbJumpPageBackground>
      <FrostedGlass style={{ border: '2px solid red', padding: '20px' }}>
        <Text textTight={true} fontWeight={FontWeights.medium}>
          Frosted Glass with custom style
        </Text>
      </FrostedGlass>
    </SbJumpPageBackground>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const text = canvas.getByText("Frosted Glass with custom style");
    await expect(text).toBeInTheDocument();
  },
};