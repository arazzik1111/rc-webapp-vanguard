import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { baseStore } from "@stores/redux-base.store.ts";
import { MultiSelectDrawer } from "./MultiSelectDrawer";
import { Story } from "./stories/_MultiSelectDrawer.default";
import { Default as _Default } from "./stories/Default.story";
import { WithMinSelected as _WithMinSelected } from "./stories/WithMinSelected.story";

export const Default: Story = { ..._Default };
export const WithMinSelected: Story = { ..._WithMinSelected };

export default {
  ...SbDecorator({
    title: "Vanguard/CustomDrawers/MultiSelectDrawer",
    component: MultiSelectDrawer,
    opts: {
      withRedux: true,
      customStore: baseStore,
    },
  }),
};
