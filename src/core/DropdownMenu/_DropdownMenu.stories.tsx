import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { DropdownMenu } from "./DropdownMenu";
import { Story } from "./stories/_DropdownMenu.default";
import { Default as _Default } from "./stories/Default.story";
import { WithIcons as _WithIcons } from "./stories/WithIcons.story";
import { WithPlacementBottomEnd as _WithPlacementBottomEnd } from "./stories/WithPlacementBottomEnd.story";
import { WithHideOnItemClickFalse as _WithHideOnItemClickFalse } from "./stories/WithHideOnItemClickFalse.story";

export const Default: Story = { ..._Default };
export const WithIcons: Story = { ..._WithIcons };
export const WithPlacementBottomEnd: Story = { ..._WithPlacementBottomEnd };
export const WithHideOnItemClickFalse: Story = { ..._WithHideOnItemClickFalse };

export default {
  ...SbDecorator({
    title: "vanguard/DropdownMenu",
    component: DropdownMenu,
  }),
};
