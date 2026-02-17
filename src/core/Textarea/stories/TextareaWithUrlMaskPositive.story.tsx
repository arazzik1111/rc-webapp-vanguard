import { Story } from "./_Textarea.default";
import { testTextareaExpectMaskBackgroundColor } from "@vanguard/Textarea/stories/helpers/test-textarea-expect-mask-background-color";

export const TextareaWithUrlMaskPositive: Story = {
  args: {
    placeholder: "Test placeholder",
    highlightUrl: true,
    highlightUrlType: "positive",
    valueAsDefaultValue: true,
    value: "Test www.google.ro",
  },
  play: async ({ canvasElement }) => {
    await testTextareaExpectMaskBackgroundColor(canvasElement, "--s100", "www.google.ro");
  },
};

