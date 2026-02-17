import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { ModalStepper } from "./ModalStepper";
import { Story } from "./stories/_ModalStepper.default";
import { ModalStepperStory as _ModalStepperStory } from "./stories/ModalStepperStory.story";
import { ModalStepperBasicStory as _ModalStepperBasicStory } from "./stories/ModalStepperBasicStory.story";
import { WithHiddenSteps as _WithHiddenSteps } from "./stories/WithHiddenSteps.story";
import { WithAMixOfVisibleAndHidden as _WithAMixOfVisibleAndHidden } from "./stories/WithAMixOfVisibleAndHidden.story";
import { ModalStepperWithFirstHidden as _ModalStepperWithFirstHidden } from "./stories/ModalStepperWithFirstHidden.story";
import { ModalStepperBottomVariant as _ModalStepperBottomVariant } from "./stories/ModalStepperBottomVariant.story";
import { GaTutorial as _GaTutorial } from "./stories/GaTutorial.story";

export default {
  ...SbDecorator({
    title: "Vanguard/Modal/ModalStepper",
    component: ModalStepper,
    opts: {
      withRedux: true
    }
  }),
};

export const ModalStepperStory: Story = { ..._ModalStepperStory };
export const ModalStepperBasicStory: Story = { ..._ModalStepperBasicStory };
export const WithHiddenSteps: Story = { ..._WithHiddenSteps };
export const WithAMixOfVisibleAndHidden: Story = { ..._WithAMixOfVisibleAndHidden };
export const ModalStepperWithFirstHidden: Story = { ..._ModalStepperWithFirstHidden };
export const ModalStepperBottomVariant: Story = { ..._ModalStepperBottomVariant };
export const GaTutorial: Story = { ..._GaTutorial };