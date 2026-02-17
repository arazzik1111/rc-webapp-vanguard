import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { TestModal } from "./TestModal";
import { Story } from "./stories/_TestModal.default";
import { Default as _Default } from "./stories/Default.story";

export const Default: Story = { ..._Default };

export default {
  ...SbDecorator({
    title: "vanguard/TestModal",
    component: TestModal,
  }),
};