import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { RcCropper } from "./Cropper";
import { Story } from "./stories/_Cropper.default";
import { Default as _Default } from "./stories/Default.story";

export const Default: Story = { ..._Default };

export default {
  ...SbDecorator({
    title: "Vanguard/Cropper",
    component: RcCropper,
  }),
};