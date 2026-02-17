import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { Modal } from "@vanguard/Modal/Modal";
import { modalStoriesStore } from "@vanguard/Modal/stories/bootstrap/Modal.stories.slice";
import modalDescription from "./Modal.description.md?raw";
import { Story } from "./stories/_Modal.default";
import { ModalStory as _ModalStory } from "./stories/ModalStory.story";
import { CloseViaService as _CloseViaService } from "./stories/CloseViaService.story";
import { CloseViaHeaderButton as _CloseViaHeaderButton } from "./stories/CloseViaHeaderButton.story";
import { CloseViaOutsideClick as _CloseViaOutsideClick } from "./stories/CloseViaOutsideClick.story";
import { CloseViaCallbacks as _CloseViaCallbacks } from "./stories/CloseViaCallbacks.story";
import { MultipleModalsClosing as _MultipleModalsClosing } from "./stories/MultipleModalsClosing.story";
import { CloseWithResponseData as _CloseWithResponseData } from "./stories/CloseWithResponseData.story";
import { CloseListeners as _CloseListeners } from "./stories/CloseListeners.story";

export const ModalStory: Story = { ..._ModalStory };
export const CloseViaService: Story = { ..._CloseViaService };
export const CloseViaHeaderButton: Story = { ..._CloseViaHeaderButton };
export const CloseViaOutsideClick: Story = { ..._CloseViaOutsideClick };
export const CloseViaCallbacks: Story = { ..._CloseViaCallbacks };
export const MultipleModalsClosing: Story = { ..._MultipleModalsClosing };
export const CloseWithResponseData: Story = { ..._CloseWithResponseData };
export const CloseListeners: Story = { ..._CloseListeners };

export default {
  ...SbDecorator({
    title: "vanguard/Modal",
    component: Modal,
    opts: {
      customStore: modalStoriesStore,
      description: modalDescription,
    },
  }),
};
