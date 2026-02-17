import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { PhoneNumber } from "./PhoneNumber";
import { Story } from "./stories/_PhoneNumber.default";
import { Default as _Default } from "./stories/Default.story";
import { WithDisabled as _WithDisabled } from "./stories/WithDisabled.story";
import { WithIndianNumber as _WithIndianNumber } from "./stories/WithIndianNumber.story";

export const Default: Story = { ..._Default };
export const WithDisabled: Story = { ..._WithDisabled };
export const WithIndianNumber: Story = { ..._WithIndianNumber };

export default {
  ...SbDecorator({
    title: "Vanguard/PhoneNumber",
    component: PhoneNumber,
    opts: {
      withRedux: true,
    },
  }),
};