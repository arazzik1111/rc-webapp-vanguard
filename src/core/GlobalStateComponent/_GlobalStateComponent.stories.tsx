import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { GlobalStateComponent } from "./GlobalStateComponent";
import { Story } from "./stories/_GlobalStateComponent.default";
import { Default as _Default } from "./stories/Default.story";

export default {
  ...SbDecorator({
    title: "Vanguard/GlobalStateComponent",
    component: GlobalStateComponent,
  }),
};

export const Default: Story = { ..._Default };