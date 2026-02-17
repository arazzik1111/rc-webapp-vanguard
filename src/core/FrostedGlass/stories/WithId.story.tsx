import React from "react";
import { SbJumpPageBackground } from "@test-utils/get-storybook-decorator";
import { FontWeights, Text } from "@vanguard/Text/Text";
import { within, expect } from "storybook/test";
import { Story } from "./_FrostedGlass.default";
import { FrostedGlass } from "../FrostedGlass";

export const WithId: Story = {
  render: () => (
    <SbJumpPageBackground>
      <FrostedGlass id="frosted-glass-id">
        <Text textTight={true} fontWeight={FontWeights.medium}>
          Frosted Glass with ID
        </Text>
      </FrostedGlass>
    </SbJumpPageBackground>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const text = canvas.getByText("Frosted Glass with ID");
    await expect(text).toBeInTheDocument();
    // Check that the id is applied
    const frostedGlass = document.getElementById("frosted-glass-id");
    await expect(frostedGlass).toBeInTheDocument();
  },
};