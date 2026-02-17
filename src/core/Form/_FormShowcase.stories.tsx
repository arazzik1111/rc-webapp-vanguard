import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { showcaseStore } from "./stories/bootstrap/showcase.test.slice";
import { Form } from "@vanguard/Form/Form";
import { Story } from "./stories/_FormShowcase.default";
import { AllElementsShowcase as _AllElementsShowcase } from "./stories/AllElementsShowcase.story";

export const AllElementsShowcase: Story = { ..._AllElementsShowcase };

export default {
  ...SbDecorator({
    title: "Vanguard/Form/Showcase",
    component: Form,
    opts: {
      customStore: showcaseStore,
    },
  }),
};