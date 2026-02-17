import React from "react";
import { FrostedGlass } from "./FrostedGlass";
import { Text, FontWeights } from "@vanguard/Text/Text";
import frostedGlassDescription from "./FrostedGlass.description.md?raw";

export const Showcase: React.FC = () => {
  return (
    <div style={{
      position: 'relative',
      minHeight: '600px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }}>
      <h1 style={{ color: 'white', marginBottom: '20px' }}>FrostedGlass Showcase</h1>

      <section style={{
        padding: '20px',
        background: 'rgba(255, 255, 255, 0.8)',
        borderRadius: '8px',
        border: '2px solid transparent'
      }}>
        <h2>Regular Section (No Frosted Glass)</h2>
        <Text textTight={true} fontWeight={FontWeights.medium}>
          This section has a regular semi-transparent white background without any blur effect.
          The content behind it is not affected by backdrop filtering.
        </Text>
        <Text textTight={true} fontWeight={FontWeights.medium}>
          Notice how the background gradient shows through clearly without any frosted glass effect.
        </Text>
      </section>

      <section>
        <FrostedGlass style={{
          padding: '20px',
          borderRadius: '8px',
          border: '2px solid rgba(255, 255, 255, 0.3)'
        }}>
          <h2>Frosted Glass Section</h2>
          <Text textTight={true} fontWeight={FontWeights.medium}>
            This section uses the FrostedGlass component, which applies a backdrop blur filter
            and semi-transparent background to create a frosted glass effect.
          </Text>
          <Text textTight={true} fontWeight={FontWeights.medium}>
            The background gradient is blurred behind this section, creating a modern glass-like appearance.
          </Text>
        </FrostedGlass>
      </section>

      <section style={{
        padding: '20px',
        background: 'rgba(255, 255, 255, 0.8)',
        borderRadius: '8px',
        border: '2px solid transparent'
      }}>
        <h2>Another Regular Section</h2>
        <Text textTight={true} fontWeight={FontWeights.medium}>
          This is another regular section to compare with the frosted glass section above.
          The background shows through without blur, maintaining full clarity.
        </Text>
      </section>

      <section>
        <FrostedGlass style={{
          padding: '20px',
          borderRadius: '8px',
          border: '2px solid rgba(255, 255, 255, 0.3)',
          backgroundColor: 'rgba(0, 0, 0, 0.1)' // Adding slight dark tint
        }}>
          <h2>Frosted Glass with Custom Background</h2>
          <Text textTight={true} fontWeight={FontWeights.medium}>
            The FrostedGlass component can be customized with additional background colors
            or styles while maintaining the backdrop blur effect.
          </Text>
          <Text textTight={true} fontWeight={FontWeights.medium}>
            This demonstrates how the component can be extended for different visual needs.
          </Text>
        </FrostedGlass>
      </section>
    </div>
  );
};

export default {
  title: "vanguard/FrostedGlass/FrostedGlassShowcase",
  component: Showcase,
  parameters: {
    docs: {
      description: {
        component: frostedGlassDescription,
      },
    },
  },
};