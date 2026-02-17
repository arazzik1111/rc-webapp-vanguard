import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { ClipboardText } from "./ClipboardText";
import { Story } from "./stories/_ClipboardText.default";
import { Default as _Default } from "./stories/Default.story";

export const Default: Story = { ..._Default };

export default {
  ...SbDecorator({
    title: "Vanguard/ClipboardText",
    component: ClipboardText,
  }),
};
