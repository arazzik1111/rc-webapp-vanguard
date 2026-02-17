
import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { List } from "./List";
import { Story } from "./stories/_List.default.tsx";
import { Default as _Default } from "./stories/Default.story";
import { WithIcons as _WithIcons } from "./stories/WithIcons.story";
import { WithLimit as _WithLimit } from "./stories/WithLimit.story";
import { WithColumns as _WithColumns } from "./stories/WithColumns.story";

export const Default: Story = { ..._Default };
export const WithIcons: Story = { ..._WithIcons };
export const WithLimit: Story = { ..._WithLimit };
export const WithColumns: Story = { ..._WithColumns };

export default {
  ...SbDecorator({
    title: "vanguard/List",
    component: List,
  }),
};


