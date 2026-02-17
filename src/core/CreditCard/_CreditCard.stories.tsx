
import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { CreditCard } from "./CreditCard";
import { Story } from "./stories/_CreditCard.default";
import { Visa as _Visa } from "./stories/Visa.story";
import { MasterCard as _MasterCard } from "./stories/MasterCard.story";
import { AmericanExpress as _AmericanExpress } from "./stories/AmericanExpress.story";
import { Discover as _Discover } from "./stories/Discover.story";
import { CarteBleue as _CarteBleue } from "./stories/CarteBleue.story";
import { Placeholder as _Placeholder } from "./stories/Placeholder.story";
import { Disabled as _Disabled } from "./stories/Disabled.story";
import { Small as _Small } from "./stories/Small.story";

export const Visa: Story = { ..._Visa };
export const MasterCard: Story = { ..._MasterCard };
export const AmericanExpress: Story = { ..._AmericanExpress };
export const Discover: Story = { ..._Discover };
export const CarteBleue: Story = { ..._CarteBleue };
export const Placeholder: Story = { ..._Placeholder };
export const Disabled: Story = { ..._Disabled };
export const Small: Story = { ..._Small };

export default {
  ...SbDecorator({
    title: "Vanguard/CreditCard",
    component: CreditCard,
    extra: {
      args: {
        testId: "credit-card",
      },
    },
  }),
};

