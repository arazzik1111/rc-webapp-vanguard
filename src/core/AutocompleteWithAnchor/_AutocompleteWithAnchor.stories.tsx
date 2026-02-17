import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { baseStore } from "@stores/redux-base.store";
import { AutocompleteWithAnchor } from "./AutocompleteWithAnchor";
import { Story } from "./stories/_AutocompleteWithAnchor.default";
import { WithInput as _WithInput } from "./stories/WithInput.story";
import { WithIcon as _WithIcon } from "./stories/WithIcon.story";

export const WithInput: Story = { ..._WithInput };
export const WithIcon: Story = { ..._WithIcon };

export default {
  ...SbDecorator({
    title: "vanguard/AutocompleteWithAnchor",
    component: AutocompleteWithAnchor,
    opts: {
      customStore: baseStore,
    },
  }),
};
