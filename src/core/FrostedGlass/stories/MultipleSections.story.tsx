import React from "react";
import { SbJumpPageBackground } from "@test-utils/get-storybook-decorator";
import { FontWeights, Text } from "@vanguard/Text/Text";
import { within, expect } from "storybook/test";
import { Story } from "./_FrostedGlass.default";
import { FrostedGlass } from "../FrostedGlass";

export const MultipleSections: Story = {
  render: () => (
    <SbJumpPageBackground>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
        <section style={{
          padding: '20px',
          background: 'rgba(255, 255, 255, 0.8)',
          borderRadius: '8px',
          border: '2px solid rgba(0, 0, 0, 0.1)'
        }}>
          <Text textTight={true} fontWeight={FontWeights.bold}>
            Regular Section (No Frosted Glass)
          </Text>
          <Text textTight={true} fontWeight={FontWeights.medium}>
            This section has a regular semi-transparent background. The background image shows through clearly without any blur effect.
          </Text>
        </section>

        <section>
          <FrostedGlass style={{
            padding: '20px',
            borderRadius: '8px',
            border: '2px solid rgba(255, 255, 255, 0.3)'
          }}>
            <Text textTight={true} fontWeight={FontWeights.bold}>
              Frosted Glass Section
            </Text>
            <Text textTight={true} fontWeight={FontWeights.medium}>
              This section uses FrostedGlass component. Notice the backdrop blur effect that creates a frosted glass appearance over the background.
            </Text>
          </FrostedGlass>
        </section>

        <section style={{
          padding: '20px',
          background: 'rgba(255, 255, 255, 0.8)',
          borderRadius: '8px',
          border: '2px solid rgba(0, 0, 0, 0.1)'
        }}>
          <Text textTight={true} fontWeight={FontWeights.bold}>
            Another Regular Section
          </Text>
          <Text textTight={true} fontWeight={FontWeights.medium}>
            This section also has no frosted glass effect. Compare it with the middle section to see the difference.
          </Text>
        </section>

        <section>
          <FrostedGlass style={{
            padding: '20px',
            borderRadius: '8px',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            backgroundColor: 'rgba(0, 0, 0, 0.1)'
          }}>
            <Text textTight={true} fontWeight={FontWeights.bold}>
              Frosted Glass with Custom Background
            </Text>
            <Text textTight={true} fontWeight={FontWeights.medium}>
              This frosted glass section has an additional dark tint. The backdrop blur still applies, creating a layered glass effect.
            </Text>
          </FrostedGlass>
        </section>
      </div>
    </SbJumpPageBackground>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Check that regular sections exist
    const regularSections = canvas.getAllByText(/Regular Section/);
    await expect(regularSections).toHaveLength(2);

    // Check that frosted glass section headings exist
    await expect(canvas.getByText("Frosted Glass Section")).toBeInTheDocument();
    await expect(canvas.getByText("Frosted Glass with Custom Background")).toBeInTheDocument();

    // Verify the content is present
    await expect(canvas.getByText("This section has a regular semi-transparent background. The background image shows through clearly without any blur effect.")).toBeInTheDocument();
    await expect(canvas.getByText("This section uses FrostedGlass component. Notice the backdrop blur effect that creates a frosted glass appearance over the background.")).toBeInTheDocument();
  },
};