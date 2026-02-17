import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { LoadingModal } from "@vanguard/StandardModals/LoadingModal/LoadingModal";
import { Story } from "./stories/_LoadingModal.default";
import { Default as _Default } from "./stories/Default.story";
import { Rocket as _Rocket } from "./stories/Rocket.story";
import { Ai as _Ai } from "./stories/Ai.story";

export const Default: Story = { ..._Default };
export const Rocket: Story = { ..._Rocket };
export const Ai: Story = { ..._Ai };

export default {
  ...SbDecorator({
    title: "Vanguard/LoadingModal",
    component: LoadingModal,
  }),
};
