import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { baseStore } from "@stores/redux-base.store.ts";
import { TextEditDrawer } from "./TextEditDrawer";
import { Story } from "./stories/_TextEditDrawer.default";
import { Default as _Default } from "./stories/Default.story";
import { WithDefaultValue as _WithDefaultValue } from "./stories/WithDefaultValue.story";
import { Required as _Required } from "./stories/Required.story";

export const Default: Story = { ..._Default };
export const WithDefaultValue: Story = { ..._WithDefaultValue };
export const Required: Story = { ..._Required };

export default {
  ...SbDecorator({
    title: "Vanguard/CustomDrawers/TextEditDrawer",
    component: TextEditDrawer,
    opts: {
      withRedux: true,
      customStore: baseStore,
    },
  }),
};
