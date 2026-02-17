import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { FlagAdornment } from "./FlagAdornment";
import { Story } from "./stories/_FlagAdornment.default";
import { Default as _Default } from "./stories/Default.story";
import { WithDifferentCountry as _WithDifferentCountry } from "./stories/WithDifferentCountry.story";

export default {
  ...SbDecorator({
    title: "Vanguard/FlagAdornment",
    component: FlagAdornment,
  }),
};

export const Default: Story = { ..._Default };
export const WithDifferentCountry: Story = { ..._WithDifferentCountry };
