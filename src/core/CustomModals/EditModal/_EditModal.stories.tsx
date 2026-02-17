import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { EditModal } from "./EditModal";
import { Story } from "./stories/_EditModal.default";
import { Default as _Default } from "./stories/Default.story";
import { WithTitleReplacements as _WithTitleReplacements } from "./stories/WithTitleReplacements.story";
import { WithCustomButtonText as _WithCustomButtonText } from "./stories/WithCustomButtonText.story";
import { WithButtonIcon as _WithButtonIcon } from "./stories/WithButtonIcon.story";
import { WithFooterBorder as _WithFooterBorder } from "./stories/WithFooterBorder.story";
import { NotSavable as _NotSavable } from "./stories/NotSavable.story";
import { SavingState as _SavingState } from "./stories/SavingState.story";
import { WithError as _WithError } from "./stories/WithError.story";
import { CloseOnSaveDisabled as _CloseOnSaveDisabled } from "./stories/CloseOnSaveDisabled.story";
import { CloseOnErrorEnabled as _CloseOnErrorEnabled } from "./stories/CloseOnErrorEnabled.story";
import { WithCustomWidth as _WithCustomWidth } from "./stories/WithCustomWidth.story";
import { WithTestId as _WithTestId } from "./stories/WithTestId.story";

export const Default: Story = { ..._Default };
export const WithTitleReplacements: Story = { ..._WithTitleReplacements };
export const WithCustomButtonText: Story = { ..._WithCustomButtonText };
export const WithButtonIcon: Story = { ..._WithButtonIcon };
export const WithFooterBorder: Story = { ..._WithFooterBorder };
export const NotSavable: Story = { ..._NotSavable };
export const SavingState: Story = { ..._SavingState };
export const WithError: Story = { ..._WithError };
export const CloseOnSaveDisabled: Story = { ..._CloseOnSaveDisabled };
export const CloseOnErrorEnabled: Story = { ..._CloseOnErrorEnabled };
export const WithCustomWidth: Story = { ..._WithCustomWidth };
export const WithTestId: Story = { ..._WithTestId };

export default {
  ...SbDecorator({
    title: "vanguard/EditModal",
    component: EditModal,
  }),
};