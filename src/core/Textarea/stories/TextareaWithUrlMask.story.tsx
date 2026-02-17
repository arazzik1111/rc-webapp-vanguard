import { Story } from "./_Textarea.default";
import { testTextareaExpectMaskBackgroundColor } from "@vanguard/Textarea/stories/helpers/test-textarea-expect-mask-background-color";

export const TextareaWithUrlMask: Story = {
  args: {
    placeholder: "Test placeholder",
    highlightUrl: true,
    value: "Test www.google.ro",
    valueAsDefaultValue: true,
  },
  play: async ({ canvasElement }) => {
    await testTextareaExpectMaskBackgroundColor(canvasElement, "--e100", "www.google.ro");
  },
};

