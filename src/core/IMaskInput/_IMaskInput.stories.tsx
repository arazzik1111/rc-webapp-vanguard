import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { IMaskInput } from "./IMaskInput";
import { Story } from "./stories/_IMaskInput.default";
import { Default as _Default } from "./stories/Default.story";

export const Default: Story = { ..._Default };

export default {
  ...SbDecorator({
    title: "Vanguard/IMaskInput",
    component: IMaskInput,
  }),
};