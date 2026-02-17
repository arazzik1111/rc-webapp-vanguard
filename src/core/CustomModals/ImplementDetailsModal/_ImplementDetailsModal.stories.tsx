import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { ImplementDetailsModal } from "./ImplementDetailsModal";
import { Story } from "./stories/_ImplementDetailsModal.default";
import { Default as _Default } from "./stories/Default.story";
import { WithData as _WithData } from "./stories/WithData.story";
import { WithoutData as _WithoutData } from "./stories/WithoutData.story";

export const Default: Story = { ..._Default };
export const WithData: Story = { ..._WithData };
export const WithoutData: Story = { ..._WithoutData };

export default {
  ...SbDecorator({
    title: "vanguard/ImplementDetailsModal",
    component: ImplementDetailsModal,
  }),
};