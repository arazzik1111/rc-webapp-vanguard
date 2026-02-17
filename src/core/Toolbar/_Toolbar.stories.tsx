import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { Toolbar } from "./Toolbar";
import { Story } from "./stories/_Toolbar.default";
import { Default as _Default } from "./stories/Default.story";
import { WithIconButtons as _WithIconButtons } from "./stories/WithIconButtons.story";
import { WithButtons as _WithButtons } from "./stories/WithButtons.story";
import { Dense as _Dense } from "./stories/Dense.story";
import { Regular as _Regular } from "./stories/Regular.story";
import { WithCustomStyling as _WithCustomStyling } from "./stories/WithCustomStyling.story";
import { MinimalToolbar as _MinimalToolbar } from "./stories/MinimalToolbar.story";

export default {
  ...SbDecorator({
    title: "Vanguard/Toolbar",
    component: Toolbar,
  }),
};

export const Default: Story = { ..._Default };
export const WithIconButtons: Story = { ..._WithIconButtons };
export const WithButtons: Story = { ..._WithButtons };
export const Dense: Story = { ..._Dense };
export const Regular: Story = { ..._Regular };
export const WithCustomStyling: Story = { ..._WithCustomStyling };
export const MinimalToolbar: Story = { ..._MinimalToolbar };