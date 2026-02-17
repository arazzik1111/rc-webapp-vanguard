import { Story, urlMaskTestData, urlHighlightColors } from "./_InputBase.default";
import { testTextareaExpectMaskBackgroundColor } from "@vanguard/Textarea/stories/helpers/test-textarea-expect-mask-background-color";

export const InputBaseWithUrlMaskPositive: Story = {
  args: {
    placeholder: urlMaskTestData.placeholder,
    highlightUrl: true,
    highlightUrlType: "positive",
    valueAsDefaultValue: true,
    value: urlMaskTestData.testText,
  },
  play: async ({ canvasElement }) => {
    await testTextareaExpectMaskBackgroundColor(canvasElement, urlHighlightColors.positive, urlMaskTestData.testUrl);
  },
};