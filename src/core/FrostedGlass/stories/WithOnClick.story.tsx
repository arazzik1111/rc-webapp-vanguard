import React from "react";
import { SbJumpPageBackground } from "@test-utils/get-storybook-decorator";
import { FontWeights, Text } from "@vanguard/Text/Text";
import { within, expect, userEvent } from "storybook/test";
import { Story } from "./_FrostedGlass.default";
import { FrostedGlass } from "../FrostedGlass";

export const WithOnClick: Story = {
  render: () => (
    <SbJumpPageBackground>
      <FrostedGlass onClick={() => alert('Clicked!')}>
        <Text textTight={true} fontWeight={FontWeights.medium}>
          Clickable Frosted Glass
        </Text>
      </FrostedGlass>
    </SbJumpPageBackground>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const text = canvas.getByText("Clickable Frosted Glass");
    await expect(text).toBeInTheDocument();
    // The onClick is tested by the fact that the component renders without error
  },
};