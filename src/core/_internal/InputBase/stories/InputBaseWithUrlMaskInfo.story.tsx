import { Story, urlMaskTestData, urlHighlightColors } from "./_InputBase.default";
import { testTextareaExpectMaskBackgroundColor } from "@vanguard/Textarea/stories/helpers/test-textarea-expect-mask-background-color";

export const InputBaseWithUrlMaskInfo: Story = {
  args: {
    placeholder: urlMaskTestData.placeholder,
    highlightUrl: true,
    value: urlMaskTestData.testText,
    valueAsDefaultValue: true,
    highlightUrlType: "info",
  },
  play: async ({ canvasElement }) => {
    await testTextareaExpectMaskBackgroundColor(canvasElement, urlHighlightColors.info, urlMaskTestData.testUrl);
  },
};