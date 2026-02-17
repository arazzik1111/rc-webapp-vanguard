import { Story, urlMaskTestData, urlHighlightColors } from "./_InputBase.default";
import { testTextareaExpectMaskBackgroundColor } from "@vanguard/Textarea/stories/helpers/test-textarea-expect-mask-background-color";

export const InputBaseWithUrlMask: Story = {
  args: {
    placeholder: urlMaskTestData.placeholder,
    highlightUrl: true,
    value: urlMaskTestData.testText,
    valueAsDefaultValue: true,
  },
  play: async ({ canvasElement }) => {
    await testTextareaExpectMaskBackgroundColor(canvasElement, urlHighlightColors.default, urlMaskTestData.testUrl);
  },
};