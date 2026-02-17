import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { IconButton } from "./IconButton";
import { Story } from "./stories/_IconButton.default";
import { Default as _Default } from "./stories/Default.story";
import { Active as _Active } from "./stories/Active.story";
import { WithTooltip as _WithTooltip } from "./stories/WithTooltip.story";
import { AllStates as _AllStates } from "./stories/AllStates.story";
import { SetActive as _SetActive } from "./stories/SetActive.story";
import { WithOnHover as _WithOnHover } from "./stories/WithOnHover.story";
import { WithSpinning as _WithSpinning } from "./stories/WithSpinning.story";

export const Default: Story = { ..._Default };
export const Active: Story = { ..._Active };
export const WithTooltip: Story = { ..._WithTooltip };
export const AllStates: Story = { ..._AllStates };
export const SetActive: Story = { ..._SetActive };
export const WithOnHover: Story = { ..._WithOnHover };
export const WithSpinning: Story = { ..._WithSpinning };

export default {
  ...SbDecorator({
    title: "vanguard/IconButton",
    component: IconButton,
  }),
};
